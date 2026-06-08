"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const logoPath = "/img/logo.svg";

export default function Preloader({ isLoading }) {
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
          style={{
            fontFamily:
              '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              filter: "blur(14px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 1.06,
              filter: "blur(14px)",
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative h-auto w-[62vw] max-w-[360px] select-none md:w-[360px]"
          >
            {/* Logo apagado de fondo */}
            <Image
              src={logoPath}
              alt="due"
              width={564}
              height={317}
              priority
              draggable={false}
              className="h-auto w-full object-contain opacity-[0.12]"
            />

            {/* Máscara del logo */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                WebkitMaskImage: `url(${logoPath})`,
                maskImage: `url(${logoPath})`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            >
              {/* Capa blanca con borde de ola, sube completa */}
              <motion.div
                initial={{
                  y: "100%",
                }}
                animate={{
                  y: "-18%",
                }}
                transition={{
                  duration: 2.8,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="absolute left-0 top-0 h-[135%] w-full"
              >
                {/* Ola principal: esta es la parte que hace que NO suba recto */}
                <motion.div
                  aria-hidden="true"
                  animate={{
                    x: ["-38%", "0%", "-38%"],
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 top-0 h-[92px] w-[180%]"
                >
                  <svg
                    viewBox="0 0 1200 180"
                    preserveAspectRatio="none"
                    className="h-full w-full"
                  >
                    <path
                      d="M0,105 C120,38 240,172 360,105 C480,38 600,172 720,105 C840,38 960,172 1080,105 C1140,72 1170,58 1200,50 L1200,180 L0,180 Z"
                      fill="white"
                    />
                  </svg>
                </motion.div>

                {/* Ola secundaria, un poco más lenta */}
                <motion.div
                  aria-hidden="true"
                  animate={{
                    x: ["0%", "-32%", "0%"],
                    y: [5, -5, 5],
                  }}
                  transition={{
                    duration: 4.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 top-[12px] h-[78px] w-[170%] opacity-80"
                >
                  <svg
                    viewBox="0 0 1200 160"
                    preserveAspectRatio="none"
                    className="h-full w-full"
                  >
                    <path
                      d="M0,88 C140,140 260,38 400,88 C540,140 660,38 800,88 C940,140 1060,38 1200,88 L1200,160 L0,160 Z"
                      fill="white"
                    />
                  </svg>
                </motion.div>

                {/* Blanco sólido debajo de las olas */}
                <div className="absolute left-0 top-[72px] h-full w-full bg-white" />
              </motion.div>
            </div>

            {/* Brillo que acompaña la carga */}
            <motion.div
              initial={{
                opacity: 0,
                y: "80%",
              }}
              animate={{
                opacity: [0, 0.22, 0],
                y: ["80%", "-40%"],
              }}
              transition={{
                duration: 2.8,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="pointer-events-none absolute left-0 top-0 h-full w-full bg-gradient-to-t from-transparent via-white/20 to-transparent blur-[18px]"
            />

            {/* Glow suave */}
            <motion.div
              aria-hidden="true"
              animate={{
                opacity: [0.08, 0.16, 0.08],
                scale: [0.95, 1.08, 0.95],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-[60px]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}