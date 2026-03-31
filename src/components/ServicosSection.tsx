import { motion } from "framer-motion";
import { Droplets, Wrench, Waves, AlertCircle, Settings, Package, GaugeCircle } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Conserto de Vazamentos e Infiltracoes",
    description: "Localizacao precisa e reparo sem quebra-quebra desnecessario.",
    image: "/images/cleonesbispo/CLEONESBISPO-FOTOSITE01.jpeg",
  },
  {
    icon: Waves,
    title: "Instalacao de Agua e Esgoto",
    description: "Projetos completos e reparos em colunas, ramais e redes coletoras.",
    image: "/images/cleonesbispo/CLEONESBISPO-FOTOSITE02.jpeg",
  },
  {
    icon: Package,
    title: "Limpeza de Caixas d'Agua e Tanques",
    description: "Higienizacao profissional para garantir a qualidade da sua agua.",
    image: "/images/cleonesbispo/CLEONESBISPO-FOTOSITE03.jpeg",
  },
  {
    icon: GaugeCircle,
    title: "Dimensionamento de Tubulacao",
    description: "Calculos tecnicos para pressao e vazao ideais no sistema hidraulico.",
    image: "/images/cleonesbispo/CLEONESBISPO-FOTOSITE04.jpeg",
  },
  {
    icon: AlertCircle,
    title: "Desentupimento em Geral",
    description: "Pias, ralos, vasos sanitarios e redes de esgoto com eficiencia.",
    image: null,
  },
  {
    icon: Settings,
    title: "Individualizacao de Agua",
    description: "Instalacao de hidrometros individuais para condominios.",
    image: null,
  },
  {
    icon: Wrench,
    title: "Mudanca de Local de Hidrometro",
    description: "Remanejamento tecnico conforme as normas vigentes.",
    image: null,
  },
];

const ServicosSection = () => (
  <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700 border border-blue-200">
          Servicos Especializados
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Servicos de <span className="text-cyan-600">Encanador e Bombeiro Hidraulico</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Solucoes completas em hidraulica para residencias e comercios em Aracaju - SE
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 overflow-hidden"
            >
              {service.image && (
                <div className="overflow-hidden h-44">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = "none"; }}
                  />
                </div>
              )}
              <div className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicosSection;