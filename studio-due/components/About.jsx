"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const aboutItems = [
  {
    title: "STRATEGIC BY NATURE",
    text: "No trabajamos para que “se vea aesthetic”. Trabajamos para que funcione. Cada decisión responde a un objetivo, una necesidad y una estrategia detrás.",
  },
  {
    title: "TWO PERSPECTIVES, ONE DIRECTION",
    text: "Somos la combinación entre una mirada creativa y una mirada técnica: lo que nos permite encontrar soluciones más completas y equilibradas para cada marca.",
  },
  {
    title: "NO ONE SIZE-FITS-ALL",
    text: "No creemos en recetas ni paquetes universales. Cada proyecto se construye desde cero, respetando/ creando su identidad, objetivos y el momento de cada negocio.",
  },
  {
    title: "BUILT AROUND YOUR BRAND",
    text: "Antes de crear, entendemos. Nos involucramos en la esencia de cada marca para desarrollar un universo coherente, auténtico y sobre todo, sostenible en el tiempo.",
  },
  {
    title: "BOUTIQUE APPROACH",
    text: "Trabajás directamente con nosotras. Sin intermediarios, sin estructuras gigantes. Más cercanía, más agilidad y más atención a cada detalle.",
  },
];

const fontFamily = '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 26,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function About() {
  return (
    <section
      id="nosotras"
      className="relative w-full overflow-hidden bg-black px-4 py-[96px] text-white md:px-0 md:py-[120px]"
      style={{ fontFamily }}
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-1/2 top-1/2 h-[76%] w-screen -translate-x-1/2 -translate-y-1/2 opacity-[0.12] md:h-[86%] md:w-screen"
        >
          <Image
            src="/img/logo-negro.svg"
            alt=""
            fill
            priority
            draggable={false}
            className="object-contain object-center"
          />
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.22,
        }}
        className="relative z-10 mx-auto w-full max-w-[1050px]"
      >
        <motion.div
          variants={fadeUpVariants}
          className="mb-[64px] md:mb-[76px]"
        >
          <p className="mb-[16px] text-[15px] font-[400] uppercase leading-[100%] tracking-[-0.055em] text-white/65 md:text-[16px]">
            NOSOTRAS
          </p>

          <h2 className="text-[44px] font-[700] uppercase leading-[92%] tracking-[-0.075em] text-white md:text-[72px]">
            POR QUÉ DUE
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex w-full flex-col gap-y-[48px] md:flex-row md:flex-wrap md:gap-x-[58px] md:gap-y-[56px]"
        >
          {aboutItems.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeUpVariants}
              className={[
                "w-full md:w-[calc((100%-116px)/3)]",
                index >= 3 ? "md:w-[calc((100%-58px)/3)]" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <h3 className="mb-[26px] text-[17px] font-[400] uppercase leading-[100%] tracking-[-0.06em] text-white">
                {item.title}
              </h3>

              <p className="max-w-[310px] text-[16px] font-[300] leading-[137%] tracking-[-0.045em] text-white/68 md:max-w-[300px]">
                {item.text}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}