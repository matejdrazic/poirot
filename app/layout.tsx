import Header from "@/components/HomePageComponents/Header";
import ToastContainer from "@/components/ToastContainer";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/HomePageComponents/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Poirot",
  description: "Poirot - a decentralized application (dApp) on the Solana ecosystem using the Next.js framework",
};

const WalletProvider = dynamic(() => import("./components/WalletProvider"), {
  ssr: false,
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletProvider>
          <Header/>
          <main className="min-h-screen p-16">
            {children}
            <ToastContainer theme="colored" />
          </main>
        </WalletProvider>
        <Footer/>
      </body>
    </html>
  );
}
