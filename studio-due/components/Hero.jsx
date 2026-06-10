"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const HERO_TEXT = "based in buenos aires_";

const fontFamily = '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif';

export default function Hero() {
  const heroRef = useRef(null);

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

  const logoX = useTransform(smoothX, [-0.5, 0.5], [-26, 26]);
  const logoY = useTransform(smoothY, [-0.5, 0.5], [-18, 18]);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-9, 9]);

  const haloX = useTransform(smoothX, [-0.5, 0.5], [-70, 70]);
  const haloY = useTransform(smoothY, [-0.5, 0.5], [-55, 55]);

  const shadowX = useTransform(smoothX, [-0.5, 0.5], [24, -24]);
  const shadowY = useTransform(smoothY, [-0.5, 0.5], [20, -20]);

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
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen w-full overflow-hidden bg-black px-4 text-white md:px-[75px]"
      style={{ fontFamily }}
    >
      <h1 className="sr-only">
        Studio Due - Estudio digital boutique de diseño web, branding, redes
        sociales y email marketing en Argentina
      </h1>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{ x: haloX, y: haloY }}
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
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.028] md:h-[760px] md:w-[760px]"
        />

        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{
            duration: 36,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.022] md:h-[610px] md:w-[610px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_38%)]" />
      </div>

      <div className="relative z-10 flex min-h-screen w-full flex-col">
        <div className="flex flex-1 items-center justify-center pt-[70px] md:pt-[65px]">
          <motion.div
            style={{
              x: logoX,
              y: logoY,
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
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
              filter: "blur(0px)",
            }}
            whileHover={{
              scale: 1.055,
              rotateZ: -1.4,
              transition: {
                duration: 0.42,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            whileTap={{ scale: 0.97 }}
            transition={{
              duration: 1.05,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative mx-auto h-auto w-[88vw] max-w-[420px] cursor-pointer select-none will-change-transform sm:w-[78vw] md:w-[396px] md:max-w-[396px]"
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
                className="h-auto w-full select-none object-contain object-center opacity-70"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-20"
            >
              <Image
                src="/img/logo.svg"
                alt="Studio Due"
                width={564}
                height={317}
                priority
                draggable={false}
                className="mx-auto h-auto w-full select-none object-contain object-center"
              />
            </motion.div>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileHover={{ scaleX: 1, opacity: 1 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -bottom-7 left-1/2 h-px w-[72%] origin-center -translate-x-1/2 bg-white/45"
            />
          </motion.div>
        </div>

        <div className="flex w-full justify-end pb-[72px] md:pb-[86px]">
          <motion.p
            initial="hidden"
            animate="visible"
            className="text-right text-[22px] font-[700] lowercase leading-[100%] tracking-[-0.065em] text-white md:text-[25px]"
            aria-label={HERO_TEXT}
          >
            {HERO_TEXT.split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                variants={{
                  hidden: { opacity: 0 },
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
              animate={{ opacity: [0, 1, 0] }}
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