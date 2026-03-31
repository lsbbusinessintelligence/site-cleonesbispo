import { MessageCircle, Droplet } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511914693294?text=Olá!%20Vi%20o%20site%20de%20demonstração%20de%20encanador%20e%20gostaria%20de%20criar%20um%20site%20profissional%20para%20meu%20negócio.";

const DemoBanner = () => {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_demo_cta', {
        event_category: 'lead',
        event_label: 'banner_demo_encanador'
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 via-cyan-800 to-blue-900 border-b-4 border-cyan-400 py-3 px-4 shadow-xl">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-white">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
            <Droplet className="w-5 h-5 text-cyan-300" />
            <span className="font-semibold text-sm">Site de Demonstração</span>
          </div>
          <p className="text-sm md:text-base">
            Este é um exemplo de site para <span className="font-bold">encanadores</span>
          </p>
        </div>
        
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap text-sm md:text-base"
        >
          <MessageCircle className="w-4 h-4" />
          Podemos criar um igual para seu negócio em 7 dias
        </a>
      </div>
    </div>
  );
};

export default DemoBanner;