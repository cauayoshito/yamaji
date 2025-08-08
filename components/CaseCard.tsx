"use client";

import { motion } from "framer-motion";

interface CaseCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
}

export default function CaseCard({
  title,
  description,
  image,
  link,
  delay = 0,
}: CaseCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-white/10 rounded-xl overflow-hidden group hover:shadow-2xl transition"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4 text-left bg-[#111]">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
    </motion.a>
  );
}
