
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Planos', href: '/planos' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Contato', href: '/contato' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background shadow-lg`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/fd866535-ad06-4645-8412-5fb9c247e28d.png" 
              alt="WA Empresa Funerária - Funerária Santa Gertrudes"
              className="h-8 sm:h-10 lg:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-3 2xl:space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">(19) 9 8125-3074</span>
            </div>
            <Button asChild variant="default" size="sm">
              <a href="https://wa.me/5519981253074" target="_blank" rel="noopener noreferrer">
                Plantão 24h
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-10 w-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 sm:pt-4 border-t border-border space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">(19) 9 8125-3074</span>
                </div>
                <Button asChild variant="default" className="w-full sm:w-auto">
                  <a href="https://wa.me/5519981253074" target="_blank" rel="noopener noreferrer">
                    Plantão 24h
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
