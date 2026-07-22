import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") ?? incomingHeaders.get("host") ?? "localhost:3001";
  const protocol = incomingHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const ogImage = `${protocol}://${host}/kaique-logo.png`;

  return {
    title: "Kaique Santos Barbearia | Tubarão, SC",
    description: "Cabelo, barba, sobrancelha e combos em Oficinas, Tubarão. Agende seu horário na Kaique Santos Barbearia pelo WhatsApp.",
    openGraph: {
      title: "Kaique Santos Barbearia",
      description: "Seu momento de cuidado e estilo em Oficinas, Tubarão.",
      type: "website",
      locale: "pt_BR",
      images: [{ url: ogImage, width: 640, height: 639, alt: "Kaique Santos Barbearia" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Kaique Santos Barbearia",
      description: "Seu momento de cuidado e estilo em Oficinas, Tubarão.",
      images: [ogImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
