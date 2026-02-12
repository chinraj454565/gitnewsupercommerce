import { Header, Footer } from "@/layout/index";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${dmSans.className} overflow-x-hidden w-full`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}