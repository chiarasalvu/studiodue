"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "GESTIÓN DE REDES SOCIALES",
    href: "#gestion-redes",
  },
  {
    number: "02",
    title: "BRANDING",
    href: "#branding",
  },
  {
    number: "03",
    title: "EMAIL MARKETING",
    href: "#email-marketing",
  },
  {
    number: "04",
    title: "DISEÑO Y DESARROLLO WEB",
    href: "#diseno-web",
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

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative w-full overflow-hidden bg-black px-4 py-[96px] text-white md:px-0 md:py-[120px]"
      style={{ fontFamily }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        className="mx-auto w-full max-w-[1050px]"
      >
        <motion.h2
          variants={fadeUpVariants}
          className="mb-[64px] text-[44px] font-[700] uppercase leading-[92%] tracking-[-0.075em] text-white md:mb-[76px] md:text-[72px]"
        >
          SERVICIOS
        </motion.h2>

        <motion.div
          variants={fadeUpVariants}
          className="h-px w-full bg-white/[0.16]"
        />

        <motion.div variants={containerVariants} className="w-full">
          {services.map((service) => (
            <motion.a
              key={service.number}
              href={service.href}
              variants={fadeUpVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group relative flex min-h-[104px] w-full items-center overflow-hidden border-b border-white/[0.16] text-white md:min-h-[110px]"
            >
              <motion.div
                variants={{
                  rest: { opacity: 0 },
                  hover: {
                    opacity: 1,
                    transition: {
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="absolute inset-0 bg-white/[0.055]"
              />

              <div className="relative z-10 flex w-full items-center justify-between">
                <div className="flex items-center gap-[22px] md:gap-[32px]">
                  <motion.span
                    variants={{
                      rest: { opacity: 0.42, x: 0 },
                      hover: { opacity: 0.72, x: 4 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-[26px] text-[10px] font-[400] leading-[100%] tracking-[-0.035em] text-white md:w-[34px]"
                  >
                    {service.number}
                  </motion.span>

                  <motion.h3
                    variants={{
                      rest: { opacity: 1, x: 0 },
                      hover: { opacity: 0.92, x: 8 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="max-w-[260px] text-[23px] font-[700] uppercase leading-[104%] tracking-[-0.055em] text-white sm:max-w-none md:text-[25px]"
                  >
                    {service.title}
                  </motion.h3>
                </div>

                <motion.span
                  variants={{
                    rest: {
                      x: 0,
                      y: 0,
                      opacity: 1,
                    },
                    hover: {
                      x: 2,
                      y: 7,
                      opacity: 0.75,
                    },
                  }}
                  transition={{
                    duration: 0.32,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="pr-[8px] text-[32px] font-[300] leading-[100%] tracking-[-0.06em] text-white md:pr-[12px] md:text-[34px]"
                >
                  ↗
                </motion.span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}