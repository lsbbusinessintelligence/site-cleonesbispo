import { motion } from "framer-motion";
import { MessageCircle, Phone, Star } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5579988492409?text=Ol%C3%A1!%20Vi%20seu%20site%20e%20preciso%20de%20ajuda%20com%20um%20servi%C3%A7o%20hidr%C3%A1ulico.";

const trackWhatsApp = (label: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "click_whatsapp", {
      event_category: "lead",
      event_label: label,
    });
  }
};

const HeroSection = () => (
  <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900">
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-16 right-16 w-[28rem] h-[28rem] rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-24 left-8 w-72 h-72 rounded-full bg-blue-400/15 blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
    </div>

    <div className="container relative z-10 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex items-center gap-4"
      >
        <img
          src="/images/cleonesbispo/CLEONESBISPO-LOGO01.jpeg"
          alt="CBS Encanamentos Hidraulicos"
          className="h-14 w-auto object-contain drop-shadow-lg"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div className="h-8 w-px bg-cyan-400/40 hidden sm:block" />
        <span className="hidden sm:block text-cyan-300 text-sm font-medium tracking-wide">
          CBS Encanamentos Hidraulicos
        </span>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-semibold bg-red-500/20 text-red-300 border border-red-400/30">
            <span className="w-2 h-2 rounded-full bg-red-400 inline-block animate-pulse" />
            Emergencia 24 Horas - Aracaju
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Encanador e{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              Bombeiro Hidraulico 24 Horas
            </span>{" "}
            em Aracaju
          </h1>

          <p className="text-lg md:text-xl text-blue-100/80 mb-8 max-w-2xl leading-relaxed">
            Especialista em localizacao de vazamentos, limpeza de tanques e
            instalacoes hidraulicas. Atendimento agil, limpo e com garantia
            para sua residencia ou empresa.
          </p>

          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">4.8</span>
            <span className="text-blue-200/70 text-sm">(99 avaliacoes no Google)</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("botao_whatsapp_hero")}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-green-500 text-white font-bold text-lg hover:bg-green-400 transition-all duration-200 shadow-xl shadow-green-500/40 hover:shadow-green-400/50 hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp (Emergencia 24h)
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-5">
            <a
              href="tel:+5579988492409"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-cyan-300" />
              (79) 9 8849-2409
            </a>
            <a
              href="tel:+5579991353797"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-cyan-300" />
              (79) 9 9135-3797
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center gap-6 mt-12 lg:mt-0"
        >
          <div className="relative max-w-[290px]">
            <div className="bg-white/95 backdrop-blur-sm border-2 border-cyan-400/40 rounded-xl p-4 shadow-xl relative">
              <p className="text-gray-800 text-sm text-center leading-relaxed">
                "Resolveu o problema em 2 dias quando o prazo era{" "}
                <span className="font-bold text-blue-700">uma semana</span>! Servico impecavel."
              </p>
              <p className="text-gray-500 text-xs text-center mt-2">- Suelly Dantas, via Google</p>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-white/95" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl shadow-2xl shadow-blue-900/40 p-6 max-w-sm w-full border border-blue-200/50">
            <div className="relative overflow-hidden rounded-2xl bg-white ring-4 ring-cyan-300/30">
              <img
                src="/images/cleonesbispo/CLEONESBISPO-AVATAR01.png"
                alt="Cleones Bispo - Bombeiro Hidraulico"
                className="w-full h-auto"
                style={{ filter: "brightness(1.1) saturate(0.88)" }}
              />
            </div>
            <div className="mt-5 text-center">
              <p className="text-gray-900 font-bold text-lg">Cleones Bispo</p>
              <p className="text-blue-600 text-sm font-medium mb-3">Bombeiro Hidraulico Profissional</p>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-500 text-sm">4.8 - 99 avaliacoes no Google</p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-slate-200 via-white to-slate-200 rounded-lg py-2 px-4 shadow-inner border border-slate-300/60">
              <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
                Atendimento Aracaju e Regiao
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;