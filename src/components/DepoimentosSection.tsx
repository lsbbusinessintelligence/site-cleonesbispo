import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Suelly Dantas",
    text: "Resolveu o problema em 2 dias quando o prazo era uma semana! Servico impecavel, profissional e muito atencioso.",
    rating: 5,
  },
  {
    name: "Virginia Barroso",
    text: "Deu garantia e resolveu o vazamento de forma definitiva. Recomendo muito, profissional de confianca!",
    rating: 5,
  },
  {
    name: "Phiamma",
    text: "Pontual, educado e deixou o local organizado apos o servico. Trabalho de altissima qualidade.",
    rating: 5,
  },
  {
    name: "Cliente Google",
    text: "Atendimento rapido e preciso. Resolveu o problema de esgoto que outros nao conseguiram. Excelente profissional!",
    rating: 5,
  },
];

const avaliacaoImages = [
  "/images/cleonesbispo/CLEONESBISPO-AVALIACAO01.jpeg",
  "/images/cleonesbispo/CLEONESBISPO-AVALIACAO02.jpeg",
  "/images/cleonesbispo/CLEONESBISPO-AVALIACAO03.jpeg",
  "/images/cleonesbispo/CLEONESBISPO-AVALIACAO04.jpeg",
  "/images/cleonesbispo/CLEONESBISPO-AVALIACAO05.jpeg",
  "/images/cleonesbispo/CLEONESBISPO-AVALIACAO06.jpeg",
];

const DepoimentosSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-blue-50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-yellow-50 border border-yellow-200">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="font-bold text-gray-900 text-lg">4.8</span>
          <span className="text-gray-600 text-sm">99 avaliacoes no Google</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          O que nossos <span className="text-cyan-600">clientes dizem</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Depoimentos reais de clientes satisfeitos com o servico de Cleones Bispo
        </p>
      </motion.div>

      {/* Text testimonials */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col gap-4"
          >
            <Quote className="w-8 h-8 text-cyan-400 flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed flex-1 italic">"{t.text}"</p>
            <div>
              <div className="flex gap-1 mb-2">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
              <p className="text-gray-400 text-xs">via Google Meu Negocio</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Avaliacao screenshots */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-2">Prints reais das avaliacoes no Google</h3>
        <p className="text-gray-500 text-sm">Transparencia total - veja o que os clientes escrevem</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {avaliacaoImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={src}
              alt={`Avaliacao Google ${index + 1}`}
              className="w-full h-auto object-cover"
              onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = "none"; }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DepoimentosSection;