import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://barbearia-top-demo.charlesrds15.chatgpt.site",
  ),
  title: "Kaique Santos Barbearia | Tubarão, SC",
  description:
    "Cabelo, barba, sobrancelha e combos em Oficinas, Tubarão. Agende seu horário na Kaique Santos Barbearia pelo WhatsApp.",
  openGraph: {
    title: "Kaique Santos Barbearia",
    description: "Seu momento de cuidado e estilo em Oficinas, Tubarão.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/kaique-logo.png",
        width: 640,
        height: 639,
        alt: "Kaique Santos Barbearia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaique Santos Barbearia",
    description: "Seu momento de cuidado e estilo em Oficinas, Tubarão.",
    images: ["/kaique-logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
