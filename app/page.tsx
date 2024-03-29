"use client";
import { useWalletNfts } from "@/hooks/useWalletNfts";
import { Nft } from "@metaplex-foundation/js";
import { useWallet } from "@solana/wallet-adapter-react";
import dynamic from "next/dynamic";
import FrequentlyAsked from "./components/HomePageComponents/FrequentlyAsked";
import Hero from "./components/HomePageComponents/Hero";
import Testimonials from "./components/HomePageComponents/Testimonials";
import Story from "./components/HomePageComponents/Story";
import AnimatedFeatures from "./components/HomePageComponents/AnimatedFeatures";
import RequestAudit from "./components/HomePageComponents/RequestAudit";

// Dynamically import components
const NftSelect = dynamic(() => import("./components/NftSelect"), {
  ssr: false,
});


export default function Home() {
  const { connected, publicKey } = useWallet();
  // const [publicKey, setPublicKey] = useState<PublicKey | undefined>();

  return (
    <>
      
        <Hero/>
        <Story/>
        <Testimonials/>
        <AnimatedFeatures/>
        <FrequentlyAsked/>
        <RequestAudit/>
    </>
  );
}
