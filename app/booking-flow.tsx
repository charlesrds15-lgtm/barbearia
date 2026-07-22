"use client";

import { useEffect, useMemo, useState } from "react";

type CategoryId = "combos" | "cabelo" | "barba" | "sobrancelha";
type ProfessionalId = "kaique" | "nathally" | "victor" | "franklin";

type Service = {
  name: string;
  price: number;
};

type Professional = {
  id: ProfessionalId;
  name: string;
  image: string;
};

const categories: Array<{
  id: CategoryId;
  number: string;
  title: string;
  description: string;
  image: string;
}> = [
  {
    id: "combos",
    number: "01",
    title: "Combos",
    description: "Cabelo, barba e acabamento em uma única visita.",
    image: "/service-combos.webp",
  },
  {
    id: "cabelo",
    number: "02",
    title: "Cabelo",
    description: "Do corte social ao degradê navalhado ou shaver.",
    image: "/service-cabelo.webp",
  },
  {
    id: "barba",
    number: "03",
    title: "Barba",
    description: "Desenho e acabamento para renovar o visual.",
    image: "/service-barba.webp",
  },
  {
    id: "sobrancelha",
    number: "04",
    title: "Sobrancelha",
    description: "Um detalhe preciso para equilibrar a expressão.",
    image: "/service-sobrancelha.webp",
  },
];

const professionals: Professional[] = [
  {
    id: "kaique",
    name: "Kaique",
    image:
      "https://kaiquesantos.ageenda.com.br/wp-content/uploads/kaique-1-150x150.png",
  },
  {
    id: "nathally",
    name: "Nathally",
    image:
      "https://kaiquesantos.ageenda.com.br/wp-content/uploads/B7197F2A-765A-4483-8D74-695D7A599454-150x150.jpeg",
  },
  {
    id: "victor",
    name: "Victor",
    image:
      "https://kaiquesantos.ageenda.com.br/wp-content/uploads/IMG_4586-150x150.jpeg",
  },
  {
    id: "franklin",
    name: "Franklin",
    image:
      "https://kaiquesantos.ageenda.com.br/wp-content/uploads/IMG_3388-150x150.jpeg",
  },
];

const sharedCombos: Service[] = [
  { name: "Degradê shaver + barba", price: 85 },
  { name: "Degradê shaver + barba + sobrancelha", price: 90 },
  { name: "Raspar cabelo + barba", price: 55 },
  { name: "Degradê navalhado + barba + sobrancelha", price: 90 },
  { name: "Degradê + barba + sobrancelha", price: 85 },
  { name: "Degradê navalhado + barba", price: 85 },
  { name: "Cabelo + barba", price: 75 },
];

const services: Record<CategoryId, Record<ProfessionalId, Service[]>> = {
  combos: {
    kaique: [
      { name: "Raspar cabelo + barba", price: 60 },
      { name: "Degradê shaver/navalhado + barba", price: 85 },
      { name: "Cabelo, barba e sobrancelha", price: 85 },
      { name: "Cabelo e barba", price: 80 },
    ],
    nathally: sharedCombos,
    victor: sharedCombos,
    franklin: [
      { name: "Raspar cabelo + barba", price: 60 },
      { name: "Degradê shaver/navalhado + barba", price: 85 },
      { name: "Cabelo, barba e sobrancelha", price: 85 },
      { name: "Cabelo e barba", price: 80 },
      ...sharedCombos,
    ],
  },
  cabelo: {
    kaique: [
      { name: "Corte social", price: 50 },
      { name: "Degradê", price: 50 },
      { name: "Navalhado/shaver", price: 55 },
      { name: "Recorte pezinho", price: 25 },
    ],
    nathally: [
      { name: "Cabelo degradê", price: 45 },
      { name: "Cabelo degradê navalhado/shaver", price: 50 },
      { name: "Corte social", price: 45 },
      { name: "Recorte/pezinho", price: 20 },
    ],
    victor: [
      { name: "Cabelo degradê", price: 45 },
      { name: "Cabelo degradê navalhado/shaver", price: 50 },
      { name: "Corte social", price: 45 },
      { name: "Recorte/pezinho", price: 20 },
    ],
    franklin: [
      { name: "Corte social", price: 50 },
      { name: "Degradê", price: 50 },
      { name: "Navalhado/shaver", price: 55 },
      { name: "Recorte pezinho", price: 25 },
      { name: "Cabelo degradê", price: 45 },
      { name: "Cabelo degradê navalhado/shaver", price: 50 },
      { name: "Corte social", price: 45 },
      { name: "Recorte/pezinho", price: 20 },
    ],
  },
  barba: {
    kaique: [{ name: "Barba", price: 50 }],
    nathally: [{ name: "Barba", price: 45 }],
    victor: [{ name: "Barba", price: 45 }],
    franklin: [
      { name: "Barba", price: 50 },
      { name: "Barba", price: 45 },
    ],
  },
  sobrancelha: {
    kaique: [{ name: "Sobrancelha", price: 20 }],
    nathally: [{ name: "Sobrancelha", price: 20 }],
    victor: [{ name: "Sobrancelha", price: 20 }],
    franklin: [{ name: "Sobrancelha", price: 20 }],
  },
};

function formatPrice(price: number) {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default function BookingFlow() {
  const [categoryId, setCategoryId] = useState<CategoryId | null>(null);
  const [professionalId, setProfessionalId] =
    useState<ProfessionalId | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const category = useMemo(
    () => categories.find((item) => item.id === categoryId) ?? null,
    [categoryId],
  );
  const professional = useMemo(
    () => professionals.find((item) => item.id === professionalId) ?? null,
    [professionalId],
  );

  const step = selectedService ? 3 : professionalId ? 2 : 1;

  useEffect(() => {
    if (!categoryId) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCategoryId(null);
        setProfessionalId(null);
        setSelectedService(null);
      }
    };

    document.body.classList.add("booking-open");
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("booking-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [categoryId]);

  function openBooking(id: CategoryId) {
    setCategoryId(id);
    setProfessionalId(null);
    setSelectedService(null);
  }

  function closeBooking() {
    setCategoryId(null);
    setProfessionalId(null);
    setSelectedService(null);
  }

  function goBack() {
    if (selectedService) {
      setSelectedService(null);
      return;
    }
    if (professionalId) {
      setProfessionalId(null);
      return;
    }
    closeBooking();
  }

  const whatsappUrl = useMemo(() => {
    if (!category || !professional || !selectedService) return "#";

    const message = [
      "Olá! Vim pelo site da Kaique Santos Barbearia e gostaria de fazer uma pré-reserva.",
      "",
      `Profissional: ${professional.name}`,
      `Categoria: ${category.title}`,
      `Serviço: ${selectedService.name}`,
      `Valor: ${formatPrice(selectedService.price)}`,
      "",
      "Qual é o próximo horário disponível?",
    ].join("\n");

    return `https://wa.me/5548998106967?text=${encodeURIComponent(message)}`;
  }, [category, professional, selectedService]);

  return (
    <>
      <div className="booking-categories">
        {categories.map((item) => (
          <button
            className="booking-category"
            key={item.id}
            type="button"
            onClick={() => openBooking(item.id)}
            aria-label={`Ver profissionais e preços de ${item.title}`}
          >
            <span
              className={`booking-category-image booking-category-image-${item.id}`}
              style={{ backgroundImage: `url(${item.image})` }}
              aria-hidden="true"
            />
            <span className="booking-category-copy">
              <small>{item.number}</small>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </span>
            <span className="booking-category-action">
              Ver preços <b aria-hidden="true">↗</b>
            </span>
          </button>
        ))}
      </div>

      <p className="booking-note">
        Pré-agendamento sem compromisso. Aos sábados, o atendimento é por ordem
        de chegada.
      </p>

      {category && (
        <div className="booking-modal" role="presentation">
          <button
            className="booking-backdrop"
            type="button"
            onClick={closeBooking}
            aria-label="Fechar pré-agendamento"
          />
          <section
            className="booking-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
          >
            <header className="booking-dialog-header">
              <div>
                <span>Pré-agendamento • etapa {step} de 3</span>
                <h3 id="booking-title">
                  {step === 1 && "Escolha o profissional"}
                  {step === 2 && "Escolha o serviço"}
                  {step === 3 && "Confira sua escolha"}
                </h3>
              </div>
              <button type="button" onClick={closeBooking} aria-label="Fechar">
                ×
              </button>
            </header>

            <div className="booking-progress" aria-hidden="true">
              <span className="active" />
              <span className={step >= 2 ? "active" : ""} />
              <span className={step >= 3 ? "active" : ""} />
            </div>

            <div className="booking-dialog-body">
              <div className="booking-selection-label">
                <span>Categoria</span>
                <strong>{category.title}</strong>
              </div>

              {step === 1 && (
                <div className="professional-grid">
                  {professionals.map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setProfessionalId(item.id)}
                    >
                      <span
                        className="professional-photo"
                        style={{ backgroundImage: `url(${item.image})` }}
                        role="img"
                        aria-label={`Foto de ${item.name}`}
                      />
                      <strong>{item.name}</strong>
                      <span>Ver serviços</span>
                    </button>
                  ))}
                </div>
              )}

              {step === 2 && professional && professionalId && (
                <>
                  <div className="selected-professional">
                    <span
                      className="professional-photo small"
                      style={{ backgroundImage: `url(${professional.image})` }}
                      role="img"
                      aria-label={`Foto de ${professional.name}`}
                    />
                    <div>
                      <span>Profissional escolhido</span>
                      <strong>{professional.name}</strong>
                    </div>
                  </div>
                  <div className="booking-service-list">
                    {services[category.id][professionalId].map((service, index) => (
                      <button
                        type="button"
                        key={`${service.name}-${service.price}-${index}`}
                        onClick={() => setSelectedService(service)}
                      >
                        <span>{service.name}</span>
                        <strong>{formatPrice(service.price)}</strong>
                        <b aria-hidden="true">→</b>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 3 && professional && selectedService && (
                <div className="booking-review">
                  <div className="booking-review-person">
                    <span
                      className="professional-photo small"
                      style={{ backgroundImage: `url(${professional.image})` }}
                      role="img"
                      aria-label={`Foto de ${professional.name}`}
                    />
                    <div>
                      <span>Profissional</span>
                      <strong>{professional.name}</strong>
                    </div>
                  </div>
                  <dl>
                    <div>
                      <dt>Serviço</dt>
                      <dd>{selectedService.name}</dd>
                    </div>
                    <div>
                      <dt>Valor informado</dt>
                      <dd>{formatPrice(selectedService.price)}</dd>
                    </div>
                  </dl>
                  <a
                    className="booking-whatsapp"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Continuar no WhatsApp <span aria-hidden="true">↗</span>
                  </a>
                  <small>
                    O WhatsApp abrirá com profissional, serviço e valor já
                    preenchidos. O horário será confirmado pela barbearia.
                  </small>
                </div>
              )}
            </div>

            <footer className="booking-dialog-footer">
              <button type="button" onClick={goBack}>
                ← {step === 1 ? "Voltar aos serviços" : "Voltar"}
              </button>
              <span>
                {professional ? `${professional.name} • ` : ""}
                {category.title}
              </span>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}
