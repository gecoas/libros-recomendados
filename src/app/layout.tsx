import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Libros recomendados por edades",
  description: "Guía interactiva de lecturas infantiles y juveniles de 5 a 18 años.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
