import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";
import CodeExampleSection from "@/components/code-example-section";
import QuickstartSection from "@/components/quickstart-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections except hero
    const sections = document.querySelectorAll('.section-reveal');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CodeExampleSection />
      <QuickstartSection />
      <Footer />
    </div>
  );
}
