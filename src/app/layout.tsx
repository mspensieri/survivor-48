import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Survivor Pool Season 47",
  description: "Outwit. Outplay. Outlast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container fluid>{children}</Container>
      </body>
    </html>
  );
}
