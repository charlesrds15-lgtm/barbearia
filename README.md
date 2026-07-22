# Kaique Santos Barbearia

Site institucional responsivo para a **Kaique Santos Barbearia**, pronto para deploy na Vercel.

## Site publicado

https://barbearia-top-demo.charlesrds15.chatgpt.site

## Principais áreas

- cabeçalho e navegação responsiva;
- banner principal com chamada para agendamento;
- apresentação da barbearia;
- fluxo de pré-agendamento com profissional, serviço, valor e WhatsApp;
- diferenciais, endereço e horários;
- galeria de imagens;
- links de WhatsApp e redes sociais;
- imagem de compartilhamento para redes sociais.

## Onde editar

- `app/page.tsx`: textos, serviços, preços, contatos, links e estrutura da página;
- `app/globals.css`: cores, tipografia, espaçamentos e comportamento responsivo;
- `app/layout.tsx`: título, descrição e metadados de compartilhamento;
- `public/og.png`: imagem exibida ao compartilhar o link.

## Rodar no computador

Requer Node.js 22.13 ou superior.

```bash
npm install
npm run dev
```

Depois, abra o endereço local mostrado no terminal.

## Validar antes de publicar

```bash
npm run lint
npm run build
npm test
```

## Deploy na Vercel

1. Importe este repositório na Vercel.
2. Framework Preset: `Next.js`.
3. Build Command: `npm run build`.
4. Install Command: `npm install`.
5. Output Directory: deixe em branco.
6. Variável opcional: `NEXT_PUBLIC_SITE_URL` com a URL final do site, para ajustar a imagem de compartilhamento.

Os dados de telefone, endereço, preços e redes sociais podem ser substituídos diretamente em `app/page.tsx` e `app/booking-flow.tsx`.
