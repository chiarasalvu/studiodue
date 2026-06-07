"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    name: "ESTUDIO M",
    category: "GESTIÓN DE REDES SOCIALES",
    href: "https://www.instagram.com/estudiom.guadamonasterio/",
    image: "/img/estudio-m.svg",
  },
  {
    name: "BOTTINI BROKER",
    category: "GESTIÓN DE REDES SOCIALES",
    href: "https://www.instagram.com/bottinibroker/",
    image: "/img/bottini-broker.svg",
  },
  {
    name: "J’suis",
    category: "BRANDING · GESTIÓN DE REDES SOCIALES",
    href: "https://www.instagram.com/jsuis_studio/",
    image: "/img/j-suis.svg",
  },
];

const fontFamily = '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
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

function TypingTitle({ text }) {
  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-wrap items-end text-[44px] font-[700] uppercase leading-[92%] tracking-[-0.075em] text-white md:text-[72px]"
      style={{ fontFamily }}
      aria-label={text}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: index * 0.04,
                duration: 0.01,
              },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: text.length * 0.04 }}
        className="ml-[7px] inline-flex"
      >
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.85,
            repeat: Infinity,
            ease: "linear",
          }}
          className="inline-block text-[44px] font-[700] leading-[92%] tracking-[-0.075em] text-white md:text-[72px]"
        >
          _
        </motion.span>
      </motion.span>
    </motion.h2>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      initial="rest"
      whileHover="hover"
      className="group block w-full md:w-[calc((100%-48px)/2)]"
    >
      <motion.div
        variants={{
          rest: {
            y: 0,
          },
          hover: {
            y: -6,
            transition: {
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className="w-full"
      >
        <div className="relative mb-[14px] aspect-[1.18/1] w-full overflow-hidden rounded-[28px] bg-[#111111]">
          <motion.div
            variants={{
              rest: {
                scale: 1,
              },
              hover: {
                scale: 1.07,
                transition: {
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className="relative h-full w-full"
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            variants={{
              rest: {
                opacity: 0,
              },
              hover: {
                opacity: 1,
                transition: {
                  duration: 0.35,
                },
              },
            }}
            className="pointer-events-none absolute inset-0 bg-white/[0.045]"
          />

          <motion.div
            variants={{
              rest: {
                opacity: 0,
                y: 12,
                filter: "blur(6px)",
              },
              hover: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className="pointer-events-none absolute bottom-5 left-5 rounded-full bg-black/45 px-4 py-2 backdrop-blur-md"
          >
            <p className="text-[12px] font-[400] uppercase leading-[100%] tracking-[-0.045em] text-white">
              Ver proyecto
            </p>
          </motion.div>
        </div>

        <div className="pl-[2px]">
          <h3
            className="mb-[5px] text-[16px] font-[400] uppercase leading-[100%] tracking-[-0.055em] text-white md:text-[17px]"
            style={{ fontFamily }}
          >
            {project.name}
          </h3>

          <p
            className="text-[10px] font-[300] uppercase leading-[120%] tracking-[-0.045em] text-white/68"
            style={{ fontFamily }}
          >
            {project.category}
          </p>
        </div>
      </motion.div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="w-full bg-black px-4 py-[96px] text-white md:px-0 md:py-[120px]"
      style={{ fontFamily }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.12,
        }}
        className="mx-auto w-full max-w-[1050px]"
      >
        <motion.div
          variants={itemVariants}
          className="mb-[64px] md:mb-[76px]"
        >
          <TypingTitle text="PROYECTOS" />
        </motion.div>

        <div className="flex w-full flex-col gap-x-[48px] gap-y-[54px] md:flex-row md:flex-wrap md:gap-y-[68px]">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}