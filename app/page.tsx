import Image from "next/image";
import BookingFlow from "./booking-flow";

const whatsappUrl =
  "https://wa.me/5548998106967?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Kaique%20Santos%20Barbearia";
const instagramUrl = "https://www.instagram.com/kaiquesantos_barbearia/";
const facebookUrl =
  "https://www.facebook.com/p/Kaique-Santos-Barbearia-100083202045582/";
const mapsUrl = "https://share.google/D1uZ5yNOXGUO4A0mm";

const gallery = [
  {
    src: "/kaique-lounge.webp",
    alt: "Espaço de convivência com mesa de sinuca na Kaique Santos Barbearia",
    width: 680,
    height: 510,
  },
  {
    src: "/kaique-interior.webp",
    alt: "Cadeiras e estações de atendimento da Kaique Santos Barbearia",
    width: 382,
    height: 510,
  },
  {
    src: "/kaique-coffee.png",
    alt: "Área de café e conveniência da Kaique Santos Barbearia",
    width: 680,
    height: 510,
  },
];

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Kaique Santos Barbearia — início">
      <span className="brand-copy">
        <b>Kaique Santos</b>
        <strong>Barbearia</strong>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="inicio">
      <div className="announcement">
        <span>Segunda a sexta • 08h30 às 21h</span>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp: (48) 99810-6967
        </a>
      </div>

      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">A barbearia</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Agendar no WhatsApp
        </a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menu">Menu</summary>
          <nav aria-label="Navegação móvel">
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">A barbearia</a>
            <a href="#contato">Contato</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow light">Estilo • Conforto • Atendimento</span>
          <h1 id="hero-title">Kaique Santos Barbearia</h1>
          <p>
            Mais que um corte: um ambiente completo para cuidar do visual,
            relaxar e se sentir em casa.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
              Agendar pelo WhatsApp
            </a>
            <a className="text-link" href="#sobre">
              Conheça o espaço <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
        <div className="hero-note">
          <span>Seg–Sex</span> 08h30–21h <span>Sáb</span> 08h–18h30
        </div>
      </section>

      <section className="intro section" id="sobre">
        <div className="section-label">
          <span>01</span>
          <p>Nossa casa</p>
        </div>
        <div className="intro-copy">
          <span className="eyebrow">Barbearia em Oficinas</span>
          <h2>Seu momento de cuidado em um ambiente feito para você.</h2>
          <p>
            A Kaique Santos Barbearia une atendimento profissional, ambiente
            familiar e acolhedor. Aqui, cada detalhe foi pensado para você se
            sentir bem e sair satisfeito com o resultado.
          </p>
          <a className="underlined-link" href={whatsappUrl} target="_blank" rel="noreferrer">
            Reserve seu horário
          </a>
        </div>
        <div className="intro-image">
          <Image
            src="/kaique-owner.webp"
            width={340}
            height={510}
            unoptimized
            sizes="(max-width: 720px) 100vw, 40vw"
            alt="Kaique Santos sentado em uma cadeira da barbearia"
          />
        </div>
      </section>

      <section className="services section" id="servicos">
        <div className="services-heading">
          <div className="section-label inverse">
            <span>02</span>
            <p>Serviços</p>
          </div>
          <div>
            <span className="eyebrow light">Valores e profissionais</span>
            <h2>Escolha seu serviço e faça uma pré-reserva.</h2>
          </div>
        </div>
        <BookingFlow />
      </section>

      <section className="difference section">
        <div className="difference-photo" role="img" aria-label="Equipe da Kaique Santos Barbearia" />
        <div className="difference-copy">
          <span className="eyebrow">Nosso diferencial</span>
          <h2>Uma equipe pronta para cuidar do seu estilo.</h2>
          <p>
            Atendimento profissional em um espaço confortável, descontraído e
            preparado para transformar o cuidado com o visual em uma experiência.
          </p>
          <ul>
            <li>Atendimento de segunda a sábado</li>
            <li>Agendamento rápido pelo WhatsApp</li>
            <li>Ambiente com sinuca, TV e área de café</li>
          </ul>
        </div>
      </section>

      <section className="location section" id="contato">
        <div className="location-heading">
          <div className="section-label">
            <span>03</span>
            <p>Onde estamos</p>
          </div>
          <div>
            <span className="eyebrow">Venha conhecer</span>
            <h2>Seu ponto de cuidado e estilo em Oficinas.</h2>
          </div>
        </div>
        <div className="info-grid">
          <article>
            <span>Endereço</span>
            <h3>Rua dos Ferroviários, 295</h3>
            <p>Oficinas — Tubarão, SC</p>
            <a className="info-link" href={mapsUrl} target="_blank" rel="noreferrer">
              Ver rota no Google Maps ↗
            </a>
          </article>
          <article>
            <span>Horários</span>
            <h3>Segunda a sexta</h3>
            <p>08h30 às 21h<br />Sábado, 08h às 18h30<br />Domingo, fechado</p>
            <small>Sábado: atendimento por ordem de chegada.</small>
          </article>
          <article>
            <span>Contato</span>
            <h3>(48) 99810-6967</h3>
            <p>Agendamentos e informações<br />pelo WhatsApp</p>
            <a className="info-link" href={whatsappUrl} target="_blank" rel="noreferrer">
              Chamar no WhatsApp ↗
            </a>
          </article>
        </div>
      </section>

      <section className="gallery section" aria-labelledby="gallery-title">
        <div className="gallery-heading">
          <span className="eyebrow">Nosso espaço</span>
          <h2 id="gallery-title">Um ambiente para se sentir em casa.</h2>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            @kaiquesantos_barbearia ↗
          </a>
        </div>
        <div className="gallery-grid">
          {gallery.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              width={image.width}
              height={image.height}
              unoptimized
              sizes="(max-width: 720px) 100vw, (max-width: 1000px) 50vw, 34vw"
              alt={image.alt}
            />
          ))}
        </div>
      </section>

      <section className="final-cta">
        <span className="eyebrow light">Seu horário, seu estilo</span>
        <h2>Seu próximo corte começa aqui.</h2>
        <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
          Agendar agora
        </a>
      </section>

      <footer className="footer">
        <Brand />
        <div className="footer-social">
          <span>Acompanhe a Kaique Santos Barbearia</span>
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          <a href={facebookUrl} target="_blank" rel="noreferrer">Facebook</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp: (48) 99810-6967</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Kaique Santos Barbearia. Todos os direitos reservados.</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com a Kaique Santos Barbearia pelo WhatsApp">
        <Image
          src="/whatsapp.svg"
          width={28}
          height={28}
          alt=""
          aria-hidden="true"
        />
      </a>
    </main>
  );
}
