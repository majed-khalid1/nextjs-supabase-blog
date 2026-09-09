import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js Blog",
  description: "A minimal blog application built with the Next.js App Router.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} min-h-full`}
      >
        <div className="min-h-dvh bg-zinc-200 text-zinc-950">
          <div className="mx-auto flex min-h-dvh w-full max-w-[1100px] flex-col border-x border-zinc-300 bg-white">
            <Header />

            <main className="flex flex-1 flex-col px-4 py-8 sm:px-6 sm:py-10">
              {children}
            </main>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
