"use client";

import {
  motion,
  MotionConfig,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useCallback } from "react";

export default function HoverCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduce) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      x.set((px - 0.5) * 100);
      y.set((py - 0.5) * 100);
    },
    [x, y, shouldReduce]
  );

  return (
    <MotionConfig transition={{ duration: 0.6, ease: "easeOut" }}>
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        style={shouldReduce ? {} : { rotateX, rotateY }}
        whileHover={shouldReduce ? {} : { scale: 1.02 }}
        className={`relative rounded-2xl border border-white/10 bg-[rgb(3,14,24)]/70 p-6 will-change-transform ${className}`}
      >
        {!shouldReduce && (
          <motion.div
            style={{ x, y, translateX: "-50%", translateY: "-50%" }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 rounded-full bg-accent/20 blur-3xl"
          />
        )}
        {children}
      </motion.div>
    </MotionConfig>
  );
}
