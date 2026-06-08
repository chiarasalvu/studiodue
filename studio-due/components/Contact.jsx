"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  "Gestión de redes sociales",
  "Branding",
  "Email marketing",
  "Diseño y desarrollo web",
  "Otro",
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

function Field({ label, type = "text", name, placeholder }) {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="mb-[24px] block text-[17px] font-[400] uppercase leading-[100%] tracking-[-0.055em] text-white/68 md:text-[18px]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-[42px] w-full border-0 border-b border-white/55 bg-transparent px-0 pb-[18px] text-[16px] font-[300] leading-[100%] tracking-[1px] text-white outline-none transition-colors duration-300 placeholder:tracking-[1px] placeholder:text-white/35 focus:border-white"
      />
    </div>
  );
}

function ChevronIcon({ isOpen }) {
  return (
    <motion.span
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="ml-4 flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center text-white/60"
    >
      <svg
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <path
          d="M1.5 2L9 10L16.5 2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.span>
  );
}

function ServiceDropdown({ value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="w-full">
      <label
        htmlFor="service-button"
        className="mb-[24px] block text-[17px] font-[400] uppercase leading-[100%] tracking-[-0.055em] text-white/68 md:text-[18px]"
      >
        Servicio
      </label>

      <input type="hidden" name="service" value={value} />

      <motion.button
        id="service-button"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        whileTap={{ scale: 0.995 }}
        className={[
          "flex h-[42px] w-full items-center justify-between border-0 border-b bg-transparent px-0 pb-[18px] text-left outline-none transition-colors duration-300",
          isOpen ? "border-white" : "border-white/55",
        ].join(" ")}
      >
        <span
          className={[
            "text-[16px] font-[300] leading-[100%] tracking-[1px]",
            value ? "text-white" : "text-white/35",
          ].join(" ")}
        >
          {value || "Seleccione un servicio"}
        </span>

        <ChevronIcon isOpen={isOpen} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              y: -8,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              height: "auto",
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              height: 0,
              y: -8,
              filter: "blur(8px)",
            }}
            transition={{
              duration: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <div className="mt-[18px] overflow-hidden rounded-[22px] border border-white/14 bg-[#050505] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              {options.map((service, index) => {
                const isSelected = value === service;

                return (
                  <motion.button
                    key={service}
                    type="button"
                    onClick={() => {
                      onChange(service);
                      setIsOpen(false);
                    }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.24,
                      delay: index * 0.035,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      backgroundColor: "rgba(255,255,255,0.07)",
                    }}
                    whileTap={{ scale: 0.995 }}
                    className={[
                      "flex w-full items-center justify-between border-b border-white/10 px-[18px] py-[15px] text-left transition-colors duration-200 last:border-b-0 md:px-[22px]",
                      isSelected ? "bg-white/[0.06]" : "bg-transparent",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "text-[16px] font-[300] leading-[120%] tracking-[1px]",
                        isSelected ? "text-white" : "text-white/75",
                      ].join(" ")}
                    >
                      {service}
                    </span>

                    <motion.span
                      initial={false}
                      animate={{
                        opacity: isSelected ? 1 : 0,
                        scale: isSelected ? 1 : 0.75,
                      }}
                      transition={{ duration: 0.2 }}
                      className="text-[12px] text-white/70"
                    >
                      ●
                    </motion.span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    console.log("Consulta enviada:", data);
  };

  return (
    <section
      id="contacto"
      className="relative w-full overflow-hidden bg-black px-4 py-[86px] text-white md:px-[75px] md:py-[112px]"
      style={{ fontFamily }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="w-full"
      >
        <motion.h2
          variants={fadeUpVariants}
          className="mb-[56px] text-center text-[44px] font-[700] lowercase leading-[92%] tracking-[-0.075em] text-white md:mb-[70px] md:text-[72px]"
        >
          what’s the idea?
        </motion.h2>

        <motion.form
          variants={containerVariants}
          onSubmit={handleSubmit}
          className="mx-auto flex w-full max-w-[900px] flex-col"
        >
          <motion.div
            variants={fadeUpVariants}
            className="mb-[44px] flex w-full flex-col gap-[42px] md:flex-row md:gap-[48px]"
          >
            <Field
              label="Nombre"
              name="name"
              placeholder="Su nombre completo"
            />

            <Field
              label="Correo electrónico"
              name="email"
              type="email"
              placeholder="correo@ejemplo.com"
            />
          </motion.div>

          <motion.div variants={fadeUpVariants} className="mb-[44px] w-full">
            <ServiceDropdown
              value={selectedService}
              onChange={setSelectedService}
              options={services}
            />
          </motion.div>

          <motion.div variants={fadeUpVariants} className="mb-[68px] w-full">
            <label
              htmlFor="message"
              className="mb-[24px] block text-[17px] font-[400] uppercase leading-[100%] tracking-[-0.055em] text-white/68 md:text-[18px]"
            >
              Mensaje
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Cuéntenos sobre su proyecto"
              rows={4}
              className="h-[120px] w-full resize-none border-0 border-b border-white/55 bg-transparent px-0 pb-[18px] text-[16px] font-[300] leading-[135%] tracking-[1px] text-white outline-none transition-colors duration-300 placeholder:tracking-[1px] placeholder:text-white/35 focus:border-white md:h-[126px]"
            />
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="flex w-full justify-center"
          >
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.035,
                backgroundColor: "#ffffff",
                color: "#000000",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-[64px] w-full max-w-[248px] rounded-full bg-white px-8 text-[18px] font-[400] uppercase leading-[100%] tracking-[-0.055em] text-black"
            >
              Enviar consulta
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
}