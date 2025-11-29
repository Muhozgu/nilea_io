import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { About } from "./components/about";
import { CaseStudies } from "./components/case-studies";
import { Contact } from "./components/contact";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
}

export { App };
