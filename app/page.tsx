import BetaBanner from "@/components/betabanner";
import Hero from "@/components/hero";
import Stablecoins from "@/components/stablecoins";
import WhoItsFor from "@/components/whoitsfor";

export default function Home() {
  return (
    <main className="min-h-screen">
      <BetaBanner />
      <Hero />

      <WhoItsFor />
      <Stablecoins />
    </main>
  );
}
