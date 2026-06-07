"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

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
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
          style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: "blur(12px)" }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 1.08,
              filter: "blur(12px)",
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center gap-6"
          >
            <motion.p
              animate={{
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-[32px] font-[700] lowercase leading-[100%] tracking-[-0.06em] text-white md:text-[42px]"
            >
              studio due
            </motion.p>

            <div className="h-px w-[180px] overflow-hidden bg-white/15">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full w-[70px] bg-white"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}