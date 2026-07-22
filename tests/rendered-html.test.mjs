import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Kaique Santos Barbearia homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Kaique Santos Barbearia \| Tubarão, SC<\/title>/i);
  assert.match(html, /Escolha seu serviço e faça uma pré-reserva\./);
  assert.match(html, /Ver profissionais e preços de Combos/);
  assert.match(html, /Ver profissionais e preços de Cabelo/);
  assert.match(html, /Ver profissionais e preços de Barba/);
  assert.match(html, /Ver profissionais e preços de Sobrancelha/);
  assert.match(html, /WhatsApp: \(48\) 99810-6967/);
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
