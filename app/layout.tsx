import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ÉCLET MOBILIERE — A family builder, crafting homes with heart",
  description:
    "Crafted with care. Designed to last. Verity & Co builds family homes with heart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}