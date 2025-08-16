import Hero from "../components/Hero";
import Navbar from "@/components/navbar";
import Companies from "@/components/Companies";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <main>
      <div className="fixed left-[112px] w-px h-[calc(100%-72px)] bg-[#1A1A1A] z-10"></div>
      <div className="fixed right-[112px] w-px h-[calc(100%-72px)] bg-[#1A1A1A] z-10"></div>
      <Navbar />
      <Hero />
      <Companies />
      <Benefits />
      <Features />
      <FeatureCard 
          heading="Data & Dimension Modeling Playground"
          subheading={<>Design star and snowflake schemas in an interactive space<br />built for hands-on data modeling practice.</>}
          imageSrc="/images/datadimension.svg"
          imageAlt="DD"
      />
      <FeatureCard 
          heading="AI Resume Evaluator"
          subheading={<>Get instant, AI-powered feedback on your resume,<br />customized for data engineering roles</>}
          imageSrc="/images/evaluator.svg"
          imageAlt="AI Evaluator"
      />
    </main>
  );
}
