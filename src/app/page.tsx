import AboutMe from "@/components/AboutMe";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import QuestionsAnswers from "@/components/QuestionsAnswers";
import Services from "@/components/Services";
import WhyChooseMe from "@/components/WhyChooseMe";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Services />
      <Help />
      <WhyChooseMe />
      <QuestionsAnswers />  
      <Testimonials />
      <Contact />
    </main>
  );
}
