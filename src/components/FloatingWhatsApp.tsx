import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_URL =
  "https://wa.me/5579988492409?text=Ol%C3%A1!%20Vi%20seu%20site%20e%20preciso%20de%20ajuda%20com%20um%20servi%C3%A7o%20hidr%C3%A1ulico.";

const trackEvent = (label: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "click_whatsapp", {
      event_category: "lead",
      event_label: label,
    });
  }
};

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Botao Ligar 1 */}
      <motion.a
        href="tel:+5579988492409"
        onClick={() => trackEvent("flutuante_tel1")}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="flex items-center gap-2 bg-blue-600 text-white pl-3 pr-4 py-2.5 rounded-full shadow-lg shadow-blue-600/40 hover:bg-blue-500 transition-colors text-sm font-semibold"
      >
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">(79) 9 8849-2409</span>
      </motion.a>

      {/* Botao Ligar 2 */}
      <motion.a
        href="tel:+5579991353797"
        onClick={() => trackEvent("flutuante_tel2")}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="flex items-center gap-2 bg-blue-600 text-white pl-3 pr-4 py-2.5 rounded-full shadow-lg shadow-blue-600/40 hover:bg-blue-500 transition-colors text-sm font-semibold"
      >
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">(79) 9 9135-3797</span>
      </motion.a>

      {/* Botao WhatsApp menor */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("botao_flutuante")}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="flex items-center gap-2 bg-green-500 text-white pl-3 pr-4 py-2.5 rounded-full shadow-lg shadow-green-500/40 hover:bg-green-400 transition-colors text-sm font-semibold"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;
