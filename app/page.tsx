import Hero from "../components/Hero";
import Navbar from "@/components/navbar";
import Companies from "@/components/Companies";
import Benefits from "@/components/Benefits";

export default function Home() {
  return (
    <main>
      <div className="fixed left-[112px] w-px h-[calc(100%-72px)] bg-[#1A1A1A] z-10"></div>
      <div className="fixed right-[112px] w-px h-[calc(100%-72px)] bg-[#1A1A1A] z-10"></div>
      <Navbar />
      <Hero />
      <Companies />
      <Benefits />
    </main>
  );
}
