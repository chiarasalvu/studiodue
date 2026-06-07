"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MeltingLogo() {
  const [isMelting, setIsMelting] = useState(false);

  return (
    <>
      {/* filtro gooey para unir el logo con las gotas */}
      <svg
        width="0"
        height="0"
        className="pointer-events-none absolute"
        aria-hidden="true"
      >
        <defs>
          <filter id="gooey-melt">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 22 -10
              "
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <motion.div
        onMouseEnter={() => setIsMelting(true)}
        onMouseLeave={() => setIsMelting(false)}
        initial={{ opacity: 0, scale: 0.82, y: 34, filter: "blur(14px)" }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative w-[68vw] max-w-[396px] cursor-pointer select-none md:w-[396px]"
        style={{
          filter: "url(#gooey-melt)",
        }}
      >
        {/* sombra / eco */}
        <motion.div
          animate={{
            opacity: [0.08, 0.16, 0.08],
            scale: [1.01, 1.04, 1.01],
            y: [0, 6, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 z-0 blur-[16px]"
        >
          <Image
            src="/img/logo.svg"
            alt=""
            width={564}
            height={317}
            draggable={false}
            className="h-auto w-full object-contain opacity-50"
          />
        </motion.div>

        {/* logo principal */}
        <motion.div
          animate={
            isMelting
              ? {
                  y: [0, 8, 16, 10],
                  scaleX: [1, 1.015, 1.03, 1.02],
                  scaleY: [1, 0.98, 0.94, 0.96],
                  skewX: [0, -1.5, 1.2, 0],
                }
              : {
                  y: 0,
                  scaleX: 1,
                  scaleY: 1,
                  skewX: 0,
                }
          }
          transition={{
            duration: isMelting ? 0.9 : 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-20"
        >
          <Image
            src="/img/logo.svg"
            alt="due"
            width={564}
            height={317}
            priority
            draggable={false}
            className="h-auto w-full object-contain"
          />
        </motion.div>

        {/* drips / gotas */}
        <motion.span
          animate={
            isMelting
              ? { height: 52, y: 28, opacity: 1, scaleY: 1.15 }
              : { height: 18, y: 0, opacity: 0.9, scaleY: 1 }
          }
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[24%] top-[84%] z-10 w-[26px] -translate-x-1/2 rounded-b-[999px] rounded-t-full bg-white"
        />

        <motion.span
          animate={
            isMelting
              ? { height: 68, y: 34, opacity: 1, scaleY: 1.22 }
              : { height: 22, y: 0, opacity: 0.9, scaleY: 1 }
          }
          transition={{
            duration: 0.85,
            delay: isMelting ? 0.04 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-[43%] top-[86%] z-10 w-[30px] -translate-x-1/2 rounded-b-[999px] rounded-t-full bg-white"
        />

        <motion.span
          animate={
            isMelting
              ? { height: 48, y: 24, opacity: 1, scaleY: 1.08 }
              : { height: 14, y: 0, opacity: 0.9, scaleY: 1 }
          }
          transition={{
            duration: 0.72,
            delay: isMelting ? 0.08 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-[61%] top-[85%] z-10 w-[24px] -translate-x-1/2 rounded-b-[999px] rounded-t-full bg-white"
        />

        <motion.span
          animate={
            isMelting
              ? { height: 58, y: 30, opacity: 1, scaleY: 1.18 }
              : { height: 16, y: 0, opacity: 0.9, scaleY: 1 }
          }
          transition={{
            duration: 0.82,
            delay: isMelting ? 0.12 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-[78%] top-[86%] z-10 w-[28px] -translate-x-1/2 rounded-b-[999px] rounded-t-full bg-white"
        />

        {/* gotas que se desprenden */}
        <motion.span
          animate={
            isMelting
              ? { y: 78, opacity: 1, scale: [1, 1.08, 1] }
              : { y: 18, opacity: 0, scale: 0.7 }
          }
          transition={{
            duration: 0.9,
            delay: isMelting ? 0.18 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-[43%] top-[100%] z-0 h-[18px] w-[18px] -translate-x-1/2 rounded-full bg-white"
        />

        <motion.span
          animate={
            isMelting
              ? { y: 62, opacity: 1, scale: [1, 1.06, 1] }
              : { y: 16, opacity: 0, scale: 0.7 }
          }
          transition={{
            duration: 0.82,
            delay: isMelting ? 0.24 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-[79%] top-[99%] z-0 h-[14px] w-[14px] -translate-x-1/2 rounded-full bg-white"
        />
      </motion.div>
    </>
  );
}