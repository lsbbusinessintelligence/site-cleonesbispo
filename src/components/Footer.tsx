import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";

const Footer = () => (
  <footer className="bg-gradient-to-br from-blue-950 to-slate-950 text-white py-16 border-t border-cyan-800/30">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <div className="mb-4">
            <img
              src="/images/cleonesbispo/CLEONESBISPO-LOGO01.jpeg"
              alt="CBS Encanamentos Hidraulicos"
              className="h-12 w-auto object-contain mb-3"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <h3 className="text-lg font-bold text-cyan-300">CBS Encanamentos Hidraulicos</h3>
          </div>
          <p className="text-blue-200/70 leading-relaxed text-sm">
            Cleones Bispo - Bombeiro Hidraulico profissional em Aracaju. Solucoes em encanamento, esgoto e limpeza de tanques para residencias e empresas.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span className="text-blue-200/60 text-xs">CNPJ: 42.271.678/0001-59</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-5 text-cyan-300 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Horario de Atendimento
          </h4>
          <div className="space-y-2 text-blue-200/70 text-sm">
            <p>Segunda a Sabado: 7h as 19h</p>
            <p>Domingos: 8h as 17h</p>
            <p className="text-red-300 font-semibold">Emergencias: 24 horas</p>
          </div>

          <h4 className="font-semibold mt-8 mb-4 text-cyan-300">Servicos</h4>
          <ul className="space-y-1 text-blue-200/70 text-sm">
            <li>Conserto de Vazamentos</li>
            <li>Desentupimento em Geral</li>
            <li>Limpeza de Caixas d'Agua</li>
            <li>Instalacao de Agua e Esgoto</li>
            <li>Individualizacao de Agua</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-5 text-cyan-300 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Contato e Localizacao
          </h4>
          <div className="space-y-3 text-blue-200/70 text-sm">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
              R. Sao Salvador, 65 - America, Aracaju - SE, 49080-590
            </p>
            <a href="tel:+5579988492409" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              (79) 9 8849-2409
            </a>
            <a href="tel:+5579991353797" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              (79) 9 9135-3797
            </a>
            <a href="mailto:cleonesbispo318@gmail.com" className="flex items-center gap-2 hover:text-cyan-300 transition-colors break-all">
              <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              cleonesbispo318@gmail.com
            </a>
            <p className="text-blue-300/60 mt-2">Atende: Aracaju e regiao metropolitana</p>
          </div>
        </div>
      </div>

      <div className="border-t border-cyan-800/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-blue-300/50">
          &copy; {new Date().getFullYear()} CBS Encanamentos Hidraulicos - Todos os direitos reservados
        </p>
        <p className="text-blue-300/50">
          Desenvolvido por{" "}
          <a
            href="https://lsbintelligence.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            LSB Business Intelligence
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;