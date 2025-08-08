"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dieisson Vasques",
    role: "Personal Trainer — Método DV",
    text: "O site ficou fora da curva. Trouxe mais autoridade, facilitou o atendimento e deixou tudo mais profissional. A galera elogia direto.",
    avatar: "/images/dieissonfoto.jpg",
  },
  {
    name: "Robert Emanuel",
    role: "Personal Trainer — Robert",
    text: "Foi além das minhas expectativas. O site ficou com minha identidade, ajudou a captar alunos e mostrar os resultados reais do meu trabalho.",
    avatar: "/images/robert.jpg",
  },
  {
    name: "Paulo Henrique",
    role: "Fundador — AniPet",
    text: "A loja ficou incrível. Visual moderno, carrinho funcional e muito mais confiança pro cliente. Já impactou nas vendas.",
    avatar: "/images/avatars/paulo.jpg",
  },
  {
    name: "Ricardo Monteiro",
    role: "CEO — Proprium Investimentos",
    text: "Transpareceu credibilidade e clareza. O projeto da Proprium ficou exatamente como a gente precisava pra atrair novos investidores.",
    avatar: "/images/avatars/ricardo.jpg",
  },
  {
    name: "Juliana Toshiko",
    role: "Diretora Criativa — Trevo Modas",
    text: "O site e os materiais deram uma nova cara à marca. Trouxe mais confiança, estilo e ajudou a Trevo a crescer nas redes.",
    avatar: "/images/avatars/juliana.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-[#031C32] to-[#00111E] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              className="p-6 border border-slate-700 rounded-xl bg-[#021828]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="italic text-slate-300 mb-4">“{t.text}”</p>
              <div className="flex items-center space-x-4">
                <img
                  src={t.avatar}
                  alt={`Foto de ${t.name}`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
