import { motion } from "framer-motion";
import { Clock, Award, DollarSign, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Atendimento 24 Horas",
    description: "Pronto para emergencias a qualquer hora do dia ou da noite. Ligue agora e resolva seu problema hoje.",
  },
  {
    icon: Award,
    title: "Garantia do Servico",
    description: "Profissionalismo que assegura a durabilidade do reparo. Servico garantido conforme depoimentos de clientes.",
  },
  {
    icon: Sparkles,
    title: "Pontualidade e Organizacao",
    description: "Local de trabalho deixado sempre limpo e organizado apos o servico. Compromisso com o respeito ao seu espaco.",
  },
  {
    icon: DollarSign,
    title: "Preco Justo e Transparencia",
    description: "Orcamentos claros e execucao rapida, muitas vezes antes do prazo. Sem surpresas na hora do pagamento.",
  },
];

const BeneficiosSection = () => (
  <section className="py-20 bg-gradient-to-br from-blue-950 to-cyan-950 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </div>

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-400/15 text-cyan-300 border border-cyan-400/20">
          Por que escolher Cleones Bispo?
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Diferenciais que <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">fazem a diferenca</span>
        </h2>
        <p className="text-lg text-blue-200/70 max-w-2xl mx-auto">
          Qualidade, confianca e agilidade no atendimento em Aracaju e regiao
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-blue-200/70 leading-relaxed">{benefit.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default BeneficiosSection;