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
      className="relative w-full overflow-hidden bg-black px-4 py-[86px] text-white md:px-[75px] md:py-[112px]"
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
          className="absolute left-1/2 top-1/2 h-full w-screen -translate-x-1/2 -translate-y-1/2 opacity-[0.12]"
        >
          <Image
            src="/img/logo-negro.svg"
            alt=""
            fill
            priority
            draggable={false}
            className="h-full w-full object-cover object-center"
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
        className="relative z-10 w-full"
      >
        <motion.div
          variants={fadeUpVariants}
          className="mb-[56px] md:mb-[70px]"
        >
          <p className="mb-[14px] text-[14px] font-[400] uppercase leading-[100%] tracking-[-0.055em] text-white/65 md:text-[16px]">
            NOSOTRAS
          </p>

          <h2 className="text-[42px] font-[700] uppercase leading-[92%] tracking-[-0.075em] text-white md:text-[72px]">
            POR QUÉ DUE
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex w-full flex-col gap-y-[44px] md:flex-row md:flex-wrap md:gap-x-[56px] md:gap-y-[56px] xl:gap-x-[70px]"
        >
          {aboutItems.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeUpVariants}
              className={[
                "w-full md:w-[calc((100%-112px)/3)] xl:w-[calc((100%-140px)/3)]",
                index >= 3
                  ? "md:w-[calc((100%-56px)/3)] xl:w-[calc((100%-70px)/3)]"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <h3 className="mb-[22px] text-[15px] font-[400] uppercase leading-[100%] tracking-[-0.06em] text-white md:mb-[26px] md:text-[17px]">
                {item.title}
              </h3>

              <p className="max-w-[315px] text-[14px] font-[300] leading-[26px] tracking-[1px] text-white/68 md:max-w-[337px] md:text-[18px]">
                {item.text}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}