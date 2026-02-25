"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const StickyCard = ({
  i,
  children,
  progress,
  range,
  targetScale,
}: {
  i: number;
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center w-full"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 40 + 100}px)`,
        }}
        className="w-full relative origin-top flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  );
};
