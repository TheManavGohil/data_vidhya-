import Hero from "../components/Hero";
import Navbar from "@/components/navbar";
import Companies from "@/components/Companies";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import FeatureCard from "@/components/FeatureCard";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import Community from "@/components/Community";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import Subscribe from "@/components/Subscribe";
import FounderMemo from "@/components/FounderMemo";
import Footer from "@/components/Footer";
import GetStartedSection from "@/components/Getstarted";

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
          imageSrc="/images/evaluator.jpg"
          imageAlt="AI Evaluator"
      />
      <FeatureGrid 
        features={[
          {
            icon: "book-open-check",
            heading: "Job-Ready Content",
            subheading: "Designed specifically to equip you with practical skills demanded by employers."
          },
          {
            icon: "book-open",
            heading: "Hands-On Learning",
            subheading: "Directly apply concepts through real-world scenarios, projects, and coding challenges."
          },
          {
            icon: "star",
            heading: "Expert Instruction",
            subheading: "Learn from industry professionals with proven expertise in data engineering."
          },
          {
            icon: "code-2",
            heading: "Modern Tech Stack",
            subheading: "Stay ahead by mastering tools and technologies actively used in leading tech companies."
          }
        ]}
      />
      <Projects />
      <FAQ 
        faqs={[
          {
            question: "Who can enroll in the programs?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Will I receive a certificate?",
            answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          },
          {
            question: "Is the course in Hindi or English?",
            answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          },
          {
            question: "How can I contact you if I have any questions?",
            answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
          },
          {
            question: "Do I need to learn anything before this course starts?",
            answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
          }
        ]}
      />
      <Community />
      <Testimonials />
      <Projects />
      <Subscribe />
      <FounderMemo />
      <GetStartedSection />
      <Footer />
    </main>
  );
}
