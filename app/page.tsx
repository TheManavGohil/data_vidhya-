import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "@/components/navbar";
import Companies from "@/components/Companies";
import Benefits from "@/components/Benefits";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Companies />
      <Benefits />
    </main>
  );
}
