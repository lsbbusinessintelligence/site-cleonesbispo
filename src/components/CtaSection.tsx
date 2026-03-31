import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5579988492409?text=Ol%C3%A1!%20Vi%20seu%20site%20e%20preciso%20de%20ajuda%20com%20um%20servi%C3%A7o%20hidr%C3%A1ulico.";

const CtaSection = () => {
  const handleClick = (label: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click_whatsapp", {
        event_category: "lead",
        event_label: label,
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-cyan-400/15 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 text-cyan-200 text-sm font-semibold border border-white/20">
            Emergencia Hidraulica? Ligue Agora!
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Nao deixe o problema aumentar!
          </h2>
          <p className="text-lg md:text-xl text-blue-100/80 mb-4 max-w-3xl mx-auto leading-relaxed">
            Para vazamentos ou entupimentos,{" "}
            <span className="font-bold text-cyan-300">Cleones Bispo e a solucao imediata.</span>{" "}
            Atendimento 24 horas em Aracaju e regiao metropolitana.
          </p>
          <p className="text-blue-200/60 text-sm mb-10">
            4.8 estrelas em 99 avaliacoes no Google - Servico Garantido
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick("botao_whatsapp_cta")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-green-500 text-white font-bold text-lg hover:bg-green-400 transition-all duration-200 shadow-2xl shadow-green-500/40"
            >
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp Agora
            </motion.a>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+5579988492409"
                onClick={() => handleClick("telefone_cta_1")}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/15 text-white font-semibold hover:bg-white/25 transition-all duration-200 border border-white/20 backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 text-cyan-300" />
                (79) 9 8849-2409
              </a>
              <a
                href="tel:+5579991353797"
                onClick={() => handleClick("telefone_cta_2")}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/15 text-white font-semibold hover:bg-white/25 transition-all duration-200 border border-white/20 backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 text-cyan-300" />
                (79) 9 9135-3797
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;