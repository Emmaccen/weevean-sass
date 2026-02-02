"use client";

import { motion } from "framer-motion";

const companies = [
  { name: "Linkedin", logo: "LI" },
  { name: "Quantum", logo: "QT" },
  { name: "Flutterwave", logo: "FW" },
  { name: "Nebula", logo: "NB" },
  { name: "Global Tech", logo: "GT" },
  { name: "Cyber Systems", logo: "CS" },
  { name: "Paystack", logo: "PS" },
  { name: "Starlight", logo: "SL" },
];

export function LogoTicker() {
  return (
    <div className="w-full py-12 border-y border-white/5 bg-black/20 overflow-hidden">
      <div className="flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex shrink-0 gap-14 pr-14"
        >
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center font-bold text-white/50 group-hover:text-white group-hover:bg-white/20 transition-colors">
                {company.logo}
              </div>
              <span className="text-xl font-medium text-white/30 group-hover:text-white/80 transition-colors whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
