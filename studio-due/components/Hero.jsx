"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const HERO_TEXT = "based in buenos aires_";

export default function Hero() {
  const heroRef = useRef(null);
  const [isMelting, setIsMelting] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 85,
    damping: 20,
    mass: 0.35,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 85,
    damping: 20,
    mass: 0.35,
  });

  const logoX = useTransform(smoothX, [-0.5, 0.5], [-34, 34]);
  const logoY = useTransform(smoothY, [-0.5, 0.5], [-24, 24]);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [9, -9]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  const haloX = useTransform(smoothX, [-0.5, 0.5], [-80, 80]);
  const haloY = useTransform(smoothY, [-0.5, 0.5], [-60, 60]);

  const shadowX = useTransform(smoothX, [-0.5, 0.5], [30, -30]);
  const shadowY = useTransform(smoothY, [-0.5, 0.5], [26, -26]);

  const handleMouseMove = (event) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsMelting(false);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen w-full overflow-hidden bg-black px-4 text-white"
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',
      }}
    >
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

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{
            x: haloX,
            y: haloY,
          }}
          animate={{
            scale: [1, 1.16, 1],
            opacity: [0.14, 0.32, 0.14],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.055] blur-[95px] md:h-[620px] md:w-[620px]"
        />

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.028] md:h-[760px] md:w-[760px]"
        />

        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 36,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.022] md:h-[610px] md:w-[610px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_38%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1050px] flex-col">
        <div className="flex flex-1 items-center justify-center pt-[70px] md:pt-[65px]">
          <motion.div
            onMouseEnter={() => setIsMelting(true)}
            onMouseLeave={() => setIsMelting(false)}
            style={{
              x: logoX,
              y: logoY,
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              filter: "url(#gooey-melt)",
            }}
            initial={{
              opacity: 0,
              scale: 0.74,
              y: 55,
              filter: "blur(18px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "url(#gooey-melt)",
            }}
            transition={{
              duration: 1.05,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative h-auto w-[68vw] max-w-[396px] cursor-pointer select-none will-change-transform md:w-[396px]"
          >
            <motion.div
              style={{
                x: shadowX,
                y: shadowY,
                transform: "translateZ(-90px)",
              }}
              animate={{
                opacity: [0.07, 0.16, 0.07],
                scale: [1.02, 1.08, 1.02],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 z-0 blur-[18px]"
            >
              <Image
                src="/img/logo.svg"
                alt=""
                width={564}
                height={317}
                draggable={false}
                className="h-auto w-full select-none object-contain opacity-70"
              />
            </motion.div>

            <motion.div
              animate={
                isMelting
                  ? {
                      y: [0, 8, 16, 10],
                      scaleX: [1, 1.015, 1.035, 1.02],
                      scaleY: [1, 0.985, 0.94, 0.965],
                      skewX: [0, -1.4, 1.1, 0],
                    }
                  : {
                      y: [0, -8, 0],
                      scaleX: 1,
                      scaleY: 1,
                      skewX: 0,
                    }
              }
              transition={
                isMelting
                  ? {
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }
                  : {
                      duration: 4.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              className="relative z-20"
            >
              <Image
                src="/img/logo.svg"
                alt="due"
                width={564}
                height={317}
                priority
                draggable={false}
                className="h-auto w-full select-none object-contain"
              />
            </motion.div>

            <motion.span
              animate={
                isMelting
                  ? {
                      height: 54,
                      y: 28,
                      opacity: 1,
                      scaleY: 1.15,
                    }
                  : {
                      height: 10,
                      y: 0,
                      opacity: 0,
                      scaleY: 1,
                    }
              }
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-[23%] top-[83%] z-10 w-[26px] -translate-x-1/2 rounded-b-[999px] rounded-t-full bg-white"
            />

            <motion.span
              animate={
                isMelting
                  ? {
                      height: 72,
                      y: 34,
                      opacity: 1,
                      scaleY: 1.22,
                    }
                  : {
                      height: 12,
                      y: 0,
                      opacity: 0,
                      scaleY: 1,
                    }
              }
              transition={{
                duration: 0.85,
                delay: isMelting ? 0.04 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-[42%] top-[84%] z-10 w-[30px] -translate-x-1/2 rounded-b-[999px] rounded-t-full bg-white"
            />

            <motion.span
              animate={
                isMelting
                  ? {
                      height: 48,
                      y: 24,
                      opacity: 1,
                      scaleY: 1.08,
                    }
                  : {
                      height: 10,
                      y: 0,
                      opacity: 0,
                      scaleY: 1,
                    }
              }
              transition={{
                duration: 0.72,
                delay: isMelting ? 0.08 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-[61%] top-[84%] z-10 w-[24px] -translate-x-1/2 rounded-b-[999px] rounded-t-full bg-white"
            />

            <motion.span
              animate={
                isMelting
                  ? {
                      height: 60,
                      y: 30,
                      opacity: 1,
                      scaleY: 1.18,
                    }
                  : {
                      height: 10,
                      y: 0,
                      opacity: 0,
                      scaleY: 1,
                    }
              }
              transition={{
                duration: 0.82,
                delay: isMelting ? 0.12 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-[78%] top-[85%] z-10 w-[28px] -translate-x-1/2 rounded-b-[999px] rounded-t-full bg-white"
            />

            <motion.span
              animate={
                isMelting
                  ? {
                      y: 82,
                      opacity: 1,
                      scale: [0.8, 1.08, 1],
                    }
                  : {
                      y: 18,
                      opacity: 0,
                      scale: 0.55,
                    }
              }
              transition={{
                duration: 0.9,
                delay: isMelting ? 0.18 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-[42%] top-[100%] z-0 h-[18px] w-[18px] -translate-x-1/2 rounded-full bg-white"
            />

            <motion.span
              animate={
                isMelting
                  ? {
                      y: 66,
                      opacity: 1,
                      scale: [0.8, 1.06, 1],
                    }
                  : {
                      y: 16,
                      opacity: 0,
                      scale: 0.55,
                    }
              }
              transition={{
                duration: 0.82,
                delay: isMelting ? 0.24 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-[79%] top-[99%] z-0 h-[14px] w-[14px] -translate-x-1/2 rounded-full bg-white"
            />

            <motion.span
              animate={
                isMelting
                  ? {
                      y: 56,
                      opacity: 0.85,
                      scale: [0.7, 1, 0.9],
                    }
                  : {
                      y: 12,
                      opacity: 0,
                      scale: 0.5,
                    }
              }
              transition={{
                duration: 0.72,
                delay: isMelting ? 0.28 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-[24%] top-[98%] z-0 h-[12px] w-[12px] -translate-x-1/2 rounded-full bg-white"
            />
          </motion.div>
        </div>

        <div className="flex w-full justify-start pb-[72px] md:justify-end md:pb-[86px] md:pr-[14px]">
          <motion.p
            initial="hidden"
            animate="visible"
            className="text-[22px] font-[700] lowercase leading-[100%] tracking-[-0.065em] text-white md:text-[25px]"
            aria-label={HERO_TEXT}
          >
            {HERO_TEXT.split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      delay: 1.05 + index * 0.045,
                      duration: 0.01,
                    },
                  },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}

            <motion.span
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="ml-[1px] inline-block h-[24px] w-[2px] translate-y-[4px] bg-white md:h-[27px]"
            />
          </motion.p>
        </div>
      </div>
    </section>
  );
}