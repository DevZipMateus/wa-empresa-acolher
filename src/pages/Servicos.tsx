
import React from 'react';
import { Heart, Clock, Users, Shield, Phone, CheckCircle, Car, Flower, Home, HeadphonesIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Servicos = () => {
  const services = [
    {
      icon: Clock,
      title: "Atendimento 24 Horas",
      description: "Assistência disponível todos os dias da semana, incluindo feriados e madrugadas.",
      details: ["Plantão 24h", "Atendimento imediato", "Equipe sempre disponível", "Resposta rápida em emergências"]
    },
    {
      icon: Car,
      title: "Translado e Remoção",
      description: "Serviço de translado com veículos próprios e equipe especializada.",
      details: ["Veículos próprios", "Translado nacional", "Translado internacional", "Remoção domiciliar", "Transporte inter-hospitalar"]
    },
    {
      icon: Home,
      title: "Velório Completo",
      description: "Organização completa do velório com toda estrutura necessária.",
      details: ["Preparação do ambiente", "Decoração floral", "Kit café", "Acompanhamento familiar"]
    },
    {
      icon: Flower,
      title: "Ornamentação",
      description: "Decoração com flores naturais e artificiais para homenagear o ente querido.",
      details: ["Flores naturais", "Arranjos personalizados", "Coroas de flores", "Ornamentação do ambiente"]
    },
    {
      icon: Users,
      title: "Sepultamento",
      description: "Organização completa do sepultamento com acompanhamento integral.",
      details: ["Documentação necessária", "Acompanhamento no cemitério", "Coordenação da cerimônia", "Suporte à família"]
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Psicológico",
      description: "Apoio emocional e orientação para as famílias em momento de luto.",
      details: ["Orientação familiar", "Suporte emocional", "Acompanhamento do luto", "Atendimento humanizado"]
    }
  ];

  const infrastructure = [
    {
      title: "Veículos Próprios",
      description: "Frota completa para atendimento em toda a região"
    },
    {
      title: "Equipe Especializada",
      description: "Profissionais capacitados e experientes"
    },
    {
      title: "Estrutura Completa",
      description: "Instalações modernas e adequadas"
    },
    {
      title: "Materiais de Qualidade",
      description: "Urnas, ornamentação e acessórios de primeira linha"
    }
  ];

  return (
    <>
      <title>Serviços Funerários WA - Atendimento 24h em Santa Gertrudes/SP</title>
      <meta name="description" content="Conheça todos os serviços da WA Empresa Funerária: atendimento 24h, translado, velório, sepultamento, ornamentação e suporte familiar em Santa Gertrudes e Rio Claro." />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Nossos Serviços
            </h1>
            <p className="text-xl text-muted-foreground">
              Atendimento completo e humanizado para cuidar de sua família em momentos difíceis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <a href="https://wa.me/5511995600235" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-5 h-5" />
                  Atendimento 24h
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serviços Completos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos assistência integral com qualidade, dignidade e respeito
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossa Infraestrutura
              </h2>
              <p className="text-xl text-muted-foreground">
                Estrutura completa para oferecer o melhor atendimento
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {infrastructure.map((item, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 24h Availability */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-10 h-10 text-accent-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Atendimento 24 Horas
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Nossa equipe está sempre disponível para atender sua família quando mais precisa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold">Todos os Dias</h3>
                <p className="text-primary-foreground/80">365 dias por ano</p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold">Resposta Rápida</h3>
                <p className="text-primary-foreground/80">Atendimento imediato</p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold">Emergências</h3>
                <p className="text-primary-foreground/80">Suporte em momentos críticos</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/5511995600235" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-5 h-5" />
                  Escritório: (11) 9 9560-0235
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="/planos">
                  Ver Planos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Precisa de Nossos Serviços?
            </h2>
            <p className="text-xl text-muted-foreground">
              Estamos aqui para oferecer todo o suporte necessário para sua família. 
              Entre em contato conosco a qualquer momento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://wa.me/5511995600235" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:1998125-3074">
                  <Phone className="mr-2 w-5 h-5" />
                  (19) 9 8125-3074
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Servicos;
