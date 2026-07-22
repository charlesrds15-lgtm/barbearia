# Barbearia Top

Site institucional responsivo para a **Barbearia Top**, inspirado no estilo vintage e moderno de barbearias tradicionais.

## Site publicado

https://barbearia-top-demo.charlesrds15.chatgpt.site

## Principais áreas

- cabeçalho e navegação responsiva;
- banner principal com chamada para agendamento;
- apresentação da barbearia;
- serviços e preços de exemplo;
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

No Windows PowerShell, caso o comando acima não reconheça a variável de ambiente, use:

```powershell
$env:WRANGLER_LOG_PATH='.wrangler/wrangler.log'
npx vinext dev
```

Depois, abra o endereço local mostrado no terminal.

## Validar antes de publicar

```bash
npm run build
```

Os dados de telefone, endereço, preços e redes sociais são exemplos e podem ser substituídos diretamente em `app/page.tsx`.
