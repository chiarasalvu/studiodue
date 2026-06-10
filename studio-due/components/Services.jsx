"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "GESTIÓN DE REDES SOCIALES",
    description:
      "Desarrollamos y gestionamos la presencia digital de tu marca combinando creatividad, diseño y estrategia. Creamos contenido pensado no solo para verse bien, sino para conectar con tu audiencia, fortalecer tu identidad y generar resultados reales.",
    items: [
      "ESTRATEGIA DE CONTENIDO",
      "CALENDARIO MENSUAL",
      "DISEÑO DE PIEZAS GRÁFICAS",
      "REDACCIÓN DE COPIES",
      "PUBLICACIÓN Y SEGUIMIENTO",
      "REPORTES MENSUALES",
    ],
  },
  {
    number: "02",
    title: "BRANDING",
    description:
      "Toda marca tiene un ADN propio. Nuestro trabajo consiste en identificarlo, darle estructura y convertirlo en una identidad visual sólida y consistente. Te ayudamos a construir una marca que no solo se vea bien, sino que transmita con claridad quién es y qué la diferencia.",
    items: [
      "BENCHMARKING",
      "ESTRATEGIA DE COMUNICACIÓN",
      "DISEÑO DE ELEMENTOS GRÁFICOS",
      "SISTEMA VISUAL",
      "PALETA CROMÁTICA",
      "TIPOGRAFÍAS",
    ],
  },
  {
    number: "03",
    title: "EMAIL MARKETING",
    description:
      "Creamos campañas de email que combinan estrategia, contenido y diseño para generar una comunicación más directa y valiosa con tu audiencia. Una herramienta clave para fortalecer el vínculo con tu comunidad, acompañar el recorrido del cliente y potenciar resultados.",
    items: [
      "ESTRATEGIA",
      "DISEÑO DE NEWSLETTERS",
      "AUTOMATIZACIONES",
      "SEGMENTACIÓN DE AUDIENCIAS",
      "COPYWRITING",
      "REPORTES Y OPTIMIZACIONES",
    ],
  },
  {
    number: "04",
    title: "DISEÑO Y DESARROLLO WEB",
    description:
      "Tu sitio web suele ser uno de los primeros puntos de contacto con tu marca. Diseñamos experiencias digitales pensadas para reflejar tu identidad, facilitar la navegación y acompañar tus objetivos de negocio.",
    items: [
      "DISEÑO UI RESPONSIVE",
      "DESARROLLO WEB",
      "ANIMACIONES E INTERACCIONES",
      "OPTIMIZACIÓN MOBILE",
      "INTEGRACIÓN CON FORMULARIOS, LINKS Y HERRAMIENTAS EXTERNAS.",
    ],
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
  const contentId = `service-content-${service.number}`;

  return (
    <motion.article
      variants={fadeUpVariants}
      className="border-b border-white/[0.16]"
    >
      <motion.button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={contentId}
        initial="rest"
        whileHover="hover"
        animate="rest"
        className={[
          "group relative flex w-full overflow-hidden text-left text-white",
          isOpen
            ? "min-h-[96px] items-start pt-[26px] md:min-h-[118px] md:pt-[34px]"
            : "min-h-[98px] items-center md:min-h-[108px]",
        ].join(" ")}
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
          className="absolute inset-0 bg-white/[0.045]"
        />

        <div className="relative z-10 flex w-full items-start justify-between">
          <div className="flex items-start gap-[18px] md:gap-[32px]">
            <motion.span
              variants={{
                rest: { opacity: 0.42, x: 0 },
                hover: { opacity: 0.72, x: 4 },
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-[5px] w-[24px] text-[9px] font-[400] leading-[100%] tracking-[1px] text-white/55 md:mt-[8px] md:w-[34px] md:text-[10px]"
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
              className="max-w-[265px] text-[18px] font-[700] uppercase leading-[104%] tracking-[-0.055em] text-white sm:max-w-none md:text-[32px]"
            >
              {service.title}
            </motion.h3>
          </div>

          <motion.span
            animate={{
              rotate: isOpen ? 90 : 0,
              y: isOpen ? 4 : 0,
              opacity: isOpen ? 0.85 : 1,
            }}
            transition={{
              duration: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pr-[4px] text-[30px] font-[300] leading-[100%] tracking-[-0.06em] text-white md:pr-[8px] md:text-[42px]"
          >
            ↗
          </motion.span>
        </div>
      </motion.button>

      <motion.div
        id={contentId}
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          filter: isOpen ? "blur(0px)" : "blur(8px)",
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="overflow-hidden"
      >
        <div className="flex w-full flex-col gap-[42px] pb-[58px] pt-0 pl-[42px] md:grid md:grid-cols-[1fr_0.92fr] md:gap-[90px] md:pb-[112px] md:pt-[84px] md:pl-[66px] lg:gap-[130px]">
          <motion.div
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : 18,
            }}
            transition={{
              duration: 0.48,
              delay: isOpen ? 0.08 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full md:max-w-[670px]"
          >
            <p className="text-[16px] font-[300] leading-[170%] tracking-[1px] text-white md:text-[20px] md:leading-[170%]">
              {service.description}
            </p>
          </motion.div>

          <motion.ul
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : 18,
            }}
            transition={{
              duration: 0.48,
              delay: isOpen ? 0.14 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex w-full flex-col gap-[20px] md:max-w-[520px] md:gap-[24px]"
          >
            {service.items.map((item, index) => (
              <li key={item} className="flex items-start gap-[20px]">
                <span className="mt-[4px] w-[22px] text-[12px] font-[300] leading-[100%] tracking-[1px] text-white/38 md:text-[13px]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[15px] font-[300] uppercase leading-[135%] tracking-[1px] text-white/42 md:text-[18px]">
                  {item}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </motion.article>
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