import AboutMe from "@/components/AboutMe";
import ApproachToCoaching from "@/components/ApproachToCoaching";
import Hero from "@/components/Hero";
import QuestionsAnswers from "@/components/QuestionsAnswers";
import Services from "@/components/Services";
import WhyChooseMe from "@/components/WhyChooseMe";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main className="space-y-20">
      <Hero />
      <AboutMe />
      <Services />
      <ApproachToCoaching />
      <WhyChooseMe />
      <QuestionsAnswers />
      <Testimonials />
      <Contact />
    </main>
  );
}
