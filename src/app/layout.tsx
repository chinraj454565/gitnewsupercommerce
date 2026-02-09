import { Header, Footer } from "@/layout/index";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#D4D4D4] min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
