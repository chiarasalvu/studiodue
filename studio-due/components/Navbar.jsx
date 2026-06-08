"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "SERVICIOS", href: "#servicios" },
  { label: "NOSOTRAS", href: "#nosotras" },
  { label: "CONTACTO", href: "#contacto" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    y: "-100%",
    filter: "blur(10px)",
  },
  open: {
    opacity: 1,
    y: "0%",
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.18,
    },
  },
};

const linkVariants = {
  closed: {
    opacity: 0,
    y: 18,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fontFamily = '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-0 top-0 z-50 w-full bg-transparent px-4 pt-5 text-white md:px-[75px] md:pt-0"
        style={{ fontFamily }}
      >
        <nav className="flex h-[82px] w-full items-center justify-between md:h-[96px]">
          <motion.a
            href="#home"
            onClick={closeMenu}
            whileHover={{ opacity: 0.75 }}
            whileTap={{ scale: 0.98 }}
            className="text-[25px] font-[700] leading-[100%] tracking-[-0.055em] text-white"
          >
            studio due
          </motion.a>

          <div className="hidden items-center gap-[78px] md:flex">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.12 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -2,
                  opacity: 0.65,
                }}
                whileTap={{ scale: 0.98 }}
                className="text-[15px] font-[400] uppercase leading-[100%] tracking-[-0.07em] text-white"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="relative h-[14px] w-[24px]">
              <span className="absolute left-0 top-0 h-[2px] w-full bg-white" />
              <span className="absolute left-0 top-[6px] h-[2px] w-full bg-white" />
              <span className="absolute left-0 top-[12px] h-[2px] w-full bg-white" />
            </span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit={{
              opacity: 0,
              y: "-100%",
              filter: "blur(10px)",
              transition: {
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="fixed inset-0 z-[999] flex min-h-screen w-full flex-col bg-black px-4 text-white md:hidden"
            style={{ fontFamily }}
          >
            <div className="flex h-[82px] w-full items-center justify-between">
              <motion.a
                href="#home"
                onClick={closeMenu}
                variants={linkVariants}
                className="text-[25px] font-[700] lowercase leading-[100%] tracking-[-0.055em] text-white"
              >
                studio due
              </motion.a>

              <motion.button
                type="button"
                aria-label="Cerrar menú"
                onClick={closeMenu}
                variants={linkVariants}
                whileTap={{ scale: 0.92 }}
                className="flex h-10 w-10 items-center justify-center text-white"
              >
                <span className="relative h-[24px] w-[24px]">
                  <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rotate-45 bg-white" />
                  <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 -rotate-45 bg-white" />
                </span>
              </motion.button>
            </div>

            <nav className="flex flex-1 flex-col items-center justify-center gap-[36px] pb-[82px]">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  variants={linkVariants}
                  whileHover={{ opacity: 0.65 }}
                  whileTap={{ scale: 0.97 }}
                  className="text-center text-[20px] font-[400] uppercase leading-[100%] tracking-[-0.065em] text-white"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}