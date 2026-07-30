import type { Metadata } from "next";
import { Newsreader, Manrope } from "next/font/google";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { SmoothScrolling } from "@/components/SmoothScrolling";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "CEPAP — Centro Paulista de Psicologia",
  description: "Clínica de psicologia no ABC. Psicoterapia, psiquiatria e avaliações especializadas para todas as fases da vida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${newsreader.variable} ${manrope.variable} antialiased`}
    >
      <body className="flex flex-col min-h-screen">
        <SmoothScrolling>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
