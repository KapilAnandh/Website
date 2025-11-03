import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Publications } from "@/components/Publications";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Leadership } from "@/components/Leadership";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main id="home">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <Education />
        <Certifications />
        <Leadership />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
