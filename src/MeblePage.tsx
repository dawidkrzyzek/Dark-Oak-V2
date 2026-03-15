import type { LenisRef } from "lenis/react";
import { ReactLenis } from "lenis/react";
import { useRef } from "react";
import About from "./About";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import Navbar from "./Navbar";
import WhyChooseUs from "./WhyChooseUs";

function MeblePage() {
  const lenisRef = useRef<LenisRef | null>(null);
  const onasRef = useRef<HTMLDivElement | null>(null);
  const galeriaRef = useRef<HTMLDivElement | null>(null);
  const kontaktRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-yellow focus:text-grey focus:px-4 focus:py-2 focus:rounded"
      >
        Przejdź do głównej treści
      </a>

      <ReactLenis root options={{ duration: 1.5 }} ref={lenisRef} />

      <Navbar
        lenisRef={lenisRef}
        refs={{
          onas: onasRef,
          galeria: galeriaRef,
          kontakt: kontaktRef,
        }}
      />
      <main id="main" role="main">
        <header className="relative isolate h-screen w-full" role="banner">
          <img
            src="/k-1.webp"
            alt="Nowoczesna kuchnia na wymiar Dark Oak Toruń - czarna zabudowa premium z marmurowym blatem i złotymi akcentami, elegancka wyspa kuchenna z białymi krzesłami barowymi"
            fetchPriority="high"
            decoding="async"
            loading="eager"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full block h-full object-cover object-center pointer-events-none select-none"
          />
          <Header />
        </header>

        <WhyChooseUs />

        <div id="about" ref={onasRef}>
          <About />
        </div>

        <div id="gallery" ref={galeriaRef}>
          <Gallery />
        </div>
      </main>

      <footer id="contact" ref={kontaktRef}>
        <Footer />
      </footer>
    </>
  );
}

export default MeblePage;
