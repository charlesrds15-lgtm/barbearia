import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the homepage content ready for Vercel", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const layout = await readFile(
    new URL("../app/layout.tsx", import.meta.url),
    "utf8",
  );

  assert.match(layout, /title: "Kaique Santos Barbearia \| Tubarão, SC"/);
  assert.match(page, /Escolha seu serviço e faça uma pré-reserva\./);
  assert.match(page, /WhatsApp: \(48\) 99810-6967/);
  assert.match(page, /Rua dos Ferroviários, 295/);
  assert.doesNotMatch(layout, /next\/headers/);
});

test("keeps the pre-booking flow connected to prices and WhatsApp", async () => {
  const source = await readFile(
    new URL("../app/booking-flow.tsx", import.meta.url),
    "utf8",
  );

  for (const professional of ["Kaique", "Nathally", "Victor", "Franklin"]) {
    assert.match(source, new RegExp(`name: "${professional}"`));
  }

  assert.match(source, /https:\/\/wa\.me\/5548998106967\?text=/);
  assert.match(source, /encodeURIComponent\(message\)/);
  assert.match(source, /Profissional: \$\{professional\.name\}/);
  assert.match(source, /Serviço: \$\{selectedService\.name\}/);
  assert.match(source, /Valor: \$\{formatPrice\(selectedService\.price\)\}/);
});
