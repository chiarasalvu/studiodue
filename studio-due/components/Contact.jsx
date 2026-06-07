"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

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
        className="h-[42px] w-full border-0 border-b border-white/55 bg-transparent px-0 pb-[18px] text-[16px] font-[300] leading-[100%] tracking-[-0.045em] text-white outline-none transition-colors duration-300 placeholder:text-white/35 focus:border-white"
      />
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
      className="relative w-full overflow-hidden bg-black px-4 py-[96px] text-white md:px-0 md:py-[120px]"
      style={{ fontFamily }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="mx-auto w-full max-w-[1050px]"
      >
        <motion.h2
          variants={fadeUpVariants}
          className="mb-[64px] text-center text-[44px] font-[700] lowercase leading-[92%] tracking-[-0.075em] text-white md:mb-[76px] md:text-[72px]"
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
            <label
              htmlFor="service"
              className="mb-[24px] block text-[17px] font-[400] uppercase leading-[100%] tracking-[-0.055em] text-white/68 md:text-[18px]"
            >
              Servicio
            </label>

            <div className="relative w-full">
              <select
                id="service"
                name="service"
                value={selectedService}
                onChange={(event) => setSelectedService(event.target.value)}
                className="h-[42px] w-full appearance-none border-0 border-b border-white/55 bg-transparent px-0 pb-[18px] pr-10 text-[16px] font-[300] leading-[100%] tracking-[-0.045em] text-white outline-none transition-colors duration-300 focus:border-white"
              >
                <option value="" disabled className="bg-black text-white/50">
                  Seleccione un servicio
                </option>

                {services.map((service) => (
                  <option
                    key={service}
                    value={service}
                    className="bg-black text-white"
                  >
                    {service}
                  </option>
                ))}
              </select>

              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute right-[18px] top-[2px] text-[18px] font-[300] leading-[100%] text-white/55"
              >
                ˅
              </motion.span>
            </div>
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
              className="h-[120px] w-full resize-none border-0 border-b border-white/55 bg-transparent px-0 pb-[18px] text-[16px] font-[300] leading-[135%] tracking-[-0.045em] text-white outline-none transition-colors duration-300 placeholder:text-white/35 focus:border-white md:h-[126px]"
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
              className="h-[64px] w-full max-w-[248px] rounded-full bg-white px-8 text-[13px] font-[400] uppercase leading-[100%] tracking-[-0.055em] text-black"
            >
              Enviar consulta
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
}