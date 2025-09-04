
import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Logo e Informações */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/fd866535-ad06-4645-8412-5fb9c247e28d.png" 
                alt="WA Empresa Funerária - Funerária Santa Gertrudes"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Prestando serviços funerários com dignidade, respeito e humanização desde 1999.
            </p>
            <p className="text-primary-foreground/80 text-xs">
              CNPJ: 03.197.227/0001-67
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-base sm:text-lg">Contato</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">(19) 9 8125-3074</p>
                  <p className="text-primary-foreground/80 text-xs">Plantão 24h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="https://wa.me/5511995600235" className="text-sm hover:underline">
                    (11) 9 9560-0235
                  </a>
                  <p className="text-primary-foreground/80 text-xs">Escritório - 08:30 às 17:30</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:wafuneraria@gmail.com" className="text-sm hover:underline break-all">
                  wafuneraria@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Endereço e Horários */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-base sm:text-lg">Localização</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">Rua 1, 441 - Centro</p>
                  <p className="text-sm">Santa Gertrudes/SP</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">Seg à Sex: 08:30 às 18:30</p>
                  <p className="text-primary-foreground/80 text-xs">Assistência funeral 24hrs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-base sm:text-lg">Redes Sociais</h4>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://www.instagram.com/waempresafuneraria/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.facebook.com/wa.funeraria.2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
            <div className="space-y-2">
              <h5 className="font-medium text-sm">Cobertura</h5>
              <p className="text-primary-foreground/80 text-sm">
                Santa Gertrudes e Rio Claro
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0 gap-4">
            <p className="text-primary-foreground/80 text-sm order-2 sm:order-1">
              © 2024 WA Empresa Funerária. Todos os direitos reservados.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm order-1 sm:order-2">
              <a href="/politica-privacidade" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos-uso" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
