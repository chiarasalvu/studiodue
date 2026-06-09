"use client";

import React from "react";
import { motion } from "framer-motion";

const phoneNumber = "5491112345678";
const message = "Hola Studio Due, quiero consultar por un proyecto.";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ opacity: 0, scale: 0.7, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.08,
        y: -3,
      }}
      whileTap={{
        scale: 0.94,
      }}
      className="fixed bottom-[10px] right-[14px] z-[9998] flex h-[48px] w-[48px] items-center justify-center rounded-full border border-white/15 bg-white text-black shadow-[0_14px_34px_rgba(0,0,0,0.35)] backdrop-blur-md transition-colors duration-300 hover:bg-white/90 md:bottom-[16px] md:right-[32px] md:h-[52px] md:w-[52px]"
    >
      <motion.span
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full border border-white/25"
      />

      <svg
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 h-[24px] w-[24px] md:h-[25px] md:w-[25px]"
      >
        <path
          d="M16.001 3C8.833 3 3.001 8.712 3.001 15.733C3.001 18.236 3.763 20.579 5.075 22.551L3.714 28.867L10.224 27.393C12.003 28.275 13.964 28.733 16.001 28.733C23.169 28.733 29.001 23.021 29.001 16C29.001 8.979 23.169 3 16.001 3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M11.096 10.096C10.804 10.388 10.272 11.044 10.272 12.288C10.272 13.532 11.136 15.944 13.072 17.88C15.008 19.816 17.488 21.032 19.424 21.032C20.668 21.032 21.324 20.5 21.616 20.208C21.908 19.916 22.216 19.356 22.076 18.964C21.936 18.572 21.14 18.208 20.568 17.936C19.996 17.664 19.424 17.348 18.976 17.852C18.528 18.356 18.248 18.88 17.872 18.964C17.496 19.048 16.38 18.572 15.064 17.256C13.748 15.94 13.272 14.824 13.356 14.448C13.44 14.072 13.964 13.792 14.468 13.344C14.972 12.896 14.656 12.324 14.384 11.752C14.112 11.18 13.748 10.384 13.356 10.244C12.964 10.104 11.388 9.804 11.096 10.096Z"
          fill="currentColor"
        />
      </svg>
    </motion.a>
  );
}