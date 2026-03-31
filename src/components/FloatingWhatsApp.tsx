import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/5579988492409?text=Ol%C3%A1!%20Vi%20seu%20site%20e%20preciso%20de%20ajuda%20com%20um%20servi%C3%A7o%20hidr%C3%A1ulico.";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click_whatsapp", {
        event_category: "lead",
        event_label: "botao_flutuante",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl shadow-green-500/50 hover:bg-green-400 hover:shadow-green-400/60 transition-all duration-300"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-bold hidden sm:inline">WhatsApp 24h</span>
    </motion.a>
  );
};

export default FloatingWhatsApp;