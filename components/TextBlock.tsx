'use client';
import { motion } from 'framer-motion';

export default function TextBlock({ title, children }:{ title:string; children:React.ReactNode }) {
  return (
    <section className="section">
      <div className="container">
        <motion.h2 initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }} className="text-2xl md:text-3xl font-semibold">
          {title}
        </motion.h2>
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }} className="prose prose-invert max-w-3xl mt-4 text-muted">
          {children}
        </motion.div>
      </div>
    </section>
  )
}
