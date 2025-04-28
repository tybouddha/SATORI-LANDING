import type { Metadata } from "next";
import "@/app/globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "SatoriLanding",
  description: "A landing page built with Next.js and Shadcn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
