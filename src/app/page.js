import Navbar from '@/components/navbar'
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Interface from '@/components/interface';
import Course from '@/components/course';
import Projects from '@/components/projects';
import Platforms from '@/components/platforms';
import Testimonials from '@/components/testimonials';
import Faqs from '@/components/faq';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black px-15 overflow-hidden">
      <Navbar />  
        
      <Hero />

      <Interface />


      <Course />

      <Projects />

          
      <Platforms />

      <Testimonials />


      <Faqs />

      <Footer />
    </div>
  );
}
