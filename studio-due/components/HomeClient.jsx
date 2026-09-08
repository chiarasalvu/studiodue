"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomeClient() {
  const [isLoading, setIsLoading] = useState(true);

  // Evita que el navegador restaure el scroll donde quedó antes del
  // refresh: si no, las secciones que quedan arriba de esa posición
  // nunca llegan a "entrar" en el viewport, y sus animaciones
  // whileInView (una sola vez) se quedan trabadas en opacity: 0 para
  // siempre. Corre antes del paint para que no se note el salto.
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 3400);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />

      <main className="bg-black">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}