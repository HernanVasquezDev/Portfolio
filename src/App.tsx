import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsappButton';
import { Hero, About, Projects, Experience, Contact, Skills, Education } from './components/sections/index';


function App() {
  return (
    <div className="font-sans bg-gray-950 text-gray-100 scroll-smooth">
      <Navbar />
      <main className="space-y-32 pt-16">
        <Hero />
        <About />
        < Skills />
        <Projects />
        <Experience />
        < Education />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
