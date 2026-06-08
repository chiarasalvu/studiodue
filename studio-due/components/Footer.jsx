"use client";

import { motion } from "framer-motion";

const footerLinks = [
  {
    label: "info@studiodue.com.ar",
    href: "mailto:info@studiodue.com.ar",
  },
  {
    label: "IG studiodue___",
    href: "https://www.instagram.com/studiodue___",
  },
];

const fontFamily = '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif';

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(6px)",
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

export default function Footer() {
  return (
    <footer
      className="w-full bg-black px-4 pb-[46px] pt-[44px] text-white md:px-[75px] md:pb-[52px] md:pt-[50px]"
      style={{ fontFamily }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.35,
        }}
        className="flex w-full flex-col gap-[42px] md:flex-row md:items-start md:justify-between md:gap-0"
      >
        <motion.a
          href="#home"
          variants={fadeUpVariants}
          whileHover={{
            opacity: 0.7,
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="text-[31px] font-[700] lowercase leading-[100%] tracking-[-0.065em] text-white"
        >
          studio due
        </motion.a>

        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col items-start gap-[14px] md:items-end"
        >
          {footerLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              initial={{
                opacity: 0,
                x: 16,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: 0.12 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                opacity: 0.65,
                x: -4,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className={[
                "text-[18px] font-[700] leading-[100%] tracking-[-0.065em] text-white",
                index === 0
                  ? "underline decoration-white underline-offset-[4px]"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </footer>
  );
}