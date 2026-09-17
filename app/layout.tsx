import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TypeDex Field Guide",
  description:
    "Scan Pokémon type matchups and find the best choice from your party using generation-aware PokéAPI data.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "TypeDex",
  },
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
