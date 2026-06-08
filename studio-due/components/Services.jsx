"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    number: "01",
    title: "GESTIÓN DE REDES SOCIALES",
    description:
      "Creamos y gestionamos la presencia digital de tu marca con una estrategia clara, contenido coherente y una estética alineada a tu identidad.",
    items: [
      "Estrategia mensual de contenido",
      "Diseño de piezas para redes",
      "Calendario editorial",
      "Copywriting y tono de marca",
      "Análisis de métricas y optimización",
    ],
    cta: "Ideal para marcas que quieren crecer con una presencia constante, profesional y estética.",
  },
  {
    number: "02",
    title: "BRANDING",
    description:
      "Construimos una identidad visual y conceptual que represente la esencia de tu marca, conecte con tu audiencia y se sostenga en el tiempo.",
    items: [
      "Dirección creativa",
      "Identidad visual",
      "Paleta cromática y tipografías",
      "Sistema gráfico",
      "Manual de marca",
    ],
    cta: "Ideal para marcas nuevas o proyectos que necesitan redefinir su universo visual.",
  },
  {
    number: "03",
    title: "EMAIL MARKETING",
    description:
      "Diseñamos campañas de email pensadas para comunicar mejor, fidelizar clientes y convertir de forma más directa y medible.",
    items: [
      "Diseño de newsletters",
      "Automatizaciones",
      "Segmentación de base de datos",
      "Copywriting para campañas",
      "Optimización de aperturas y clicks",
    ],
    cta: "Ideal para marcas que quieren activar su comunidad y vender sin depender solo de redes.",
  },
  {
    number: "04",
    title: "DISEÑO Y DESARROLLO WEB",
    description:
      "Diseñamos y desarrollamos sitios web modernos, responsive y estratégicos, pensados para comunicar, convertir y elevar la percepción de marca.",
    items: [
      "Diseño UI responsive",
      "Desarrollo web en Next.js, Framer o la herramienta que mejor aplique",
      "Animaciones e interacciones",
      "Optimización mobile",
      "Integración con formularios, links y herramientas externas",
    ],
    cta: "Ideal para marcas que necesitan una web profesional, funcional y visualmente diferencial.",
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

function ServiceItem({ service, isOpen, onClick }) {
  return (
    <motion.div
      variants={fadeUpVariants}
      className="border-b border-white/[0.16]"
    >
      <motion.button
        type="button"
        onClick={onClick}
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="group relative flex min-h-[98px] w-full items-center overflow-hidden text-left text-white md:min-h-[108px]"
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
          <div className="flex items-center gap-[18px] md:gap-[32px]">
            <motion.span
              variants={{
                rest: { opacity: 0.42, x: 0 },
                hover: { opacity: 0.72, x: 4 },
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-[24px] text-[9px] font-[400] leading-[100%] tracking-[-0.035em] text-white md:w-[34px] md:text-[10px]"
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
              className="max-w-[255px] text-[18px] font-[700] uppercase leading-[104%] tracking-[-0.055em] text-white sm:max-w-none md:text-[25px]"
            >
              {service.title}
            </motion.h3>
          </div>

          <motion.span
            animate={{
              rotate: isOpen ? 135 : 0,
              y: isOpen ? 2 : 0,
              opacity: isOpen ? 0.75 : 1,
            }}
            transition={{
              duration: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pr-[4px] text-[30px] font-[300] leading-[100%] tracking-[-0.06em] text-white md:pr-[8px] md:text-[34px]"
          >
            ↗
          </motion.span>
        </div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
              filter: "blur(8px)",
            }}
            animate={{
              height: "auto",
              opacity: 1,
              filter: "blur(0px)",
            }}
            exit={{
              height: 0,
              opacity: 0,
              filter: "blur(8px)",
            }}
            transition={{
              duration: 0.48,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <div className="flex w-full flex-col gap-[34px] pb-[42px] pt-[4px] md:flex-row md:gap-[70px] md:pb-[54px] md:pl-[66px]">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full md:max-w-[470px]"
              >
                <p className="text-[16px] font-[300] leading-[145%] tracking-[1px] text-white/68 md:text-[18px]">
                  {service.description}
                </p>

                <p className="mt-[28px] text-[14px] font-[300] uppercase leading-[135%] tracking-[1px] text-white/42 md:text-[15px]">
                  {service.cta}
                </p>
              </motion.div>

              <motion.ul
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex w-full flex-col md:max-w-[430px]"
              >
                {service.items.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start gap-[14px] border-t border-white/[0.12] py-[14px] last:border-b last:border-white/[0.12]"
                  >
                    <span className="mt-[4px] text-[10px] font-[300] leading-[100%] text-white/38">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[15px] font-[300] uppercase leading-[130%] tracking-[1px] text-white/76 md:text-[16px]">
                      {item}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  const [openService, setOpenService] = useState(null);

  const handleToggle = (number) => {
    setOpenService((current) => (current === number ? null : number));
  };

  return (
    <section
      id="servicios"
      className="relative w-full overflow-hidden bg-black px-4 py-[86px] text-white md:px-[75px] md:py-[112px]"
      style={{ fontFamily }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        className="w-full"
      >
        <motion.h2
          variants={fadeUpVariants}
          className="mb-[56px] text-[42px] font-[700] uppercase leading-[92%] tracking-[-0.075em] text-white md:mb-[70px] md:text-[72px]"
        >
          SERVICIOS
        </motion.h2>

        <motion.div
          variants={fadeUpVariants}
          className="h-px w-full bg-white/[0.16]"
        />

        <motion.div variants={containerVariants} className="w-full">
          {services.map((service) => (
            <ServiceItem
              key={service.number}
              service={service}
              isOpen={openService === service.number}
              onClick={() => handleToggle(service.number)}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}