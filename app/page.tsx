import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <div id="faq"><FAQ /></div>
        <div id="contact"><Contact1 /></div>
      </main>
    </>
  );
}
