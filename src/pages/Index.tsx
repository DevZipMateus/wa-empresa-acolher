import React from 'react';
import { Heart, Shield, Clock, Users, Phone, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServicesCarousel from '@/components/ServicesCarousel';

const Index = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>WA Empresa Funerária - Serviços Funerários em Santa Gertrudes/SP | Assistência 24h</title>
      <meta name="description" content="WA Empresa Funerária oferece serviços funerários com dignidade e respeito em Santa Gertrudes e Rio Claro. Assistência 24h, planos acessíveis desde R$ 50. Atendimento humanizado." />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/95 to-primary text-primary-foreground">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Cuidado e Dignidade em <br className="hidden sm:block" />
                <span className="text-accent">Momentos Difíceis</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto px-4">
                Prestamos serviços funerários com respeito, humanização e profissionalismo desde 1999
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
                <a href="https://wa.me/5511995600235" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Assistência 24h
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild className="bg-background text-foreground hover:bg-background/90 border-2 border-background text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
                <a href="/planos">
                  Conhecer Planos
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 px-4">
              <div className="text-center space-y-2">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-accent" />
                <h3 className="font-semibold text-base sm:text-lg">24 Horas</h3>
                <p className="text-sm sm:text-base text-primary-foreground/80">Atendimento disponível todos os dias</p>
              </div>
              <div className="text-center space-y-2">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-accent" />
                <h3 className="font-semibold text-base sm:text-lg">25 Anos</h3>
                <p className="text-sm sm:text-base text-primary-foreground/80">De experiência e confiança</p>
              </div>
              <div className="text-center space-y-2">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-accent" />
                <h3 className="font-semibold text-base sm:text-lg">Até 9 Dependentes</h3>
                <p className="text-sm sm:text-base text-primary-foreground/80">Cobertura para toda família</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Princípios que norteiam nosso atendimento há mais de duas décadas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Heart,
                title: "Respeito à Vida e à Morte",
                description: "Tratamos cada história com reverência, valorizando a individualidade de cada ser humano."
              },
              {
                icon: Users,
                title: "Empatia",
                description: "Atendemos com sensibilidade e escuta ativa, colocando-nos no lugar das famílias enlutadas."
              },
              {
                icon: Shield,
                title: "Ética",
                description: "Agimos com transparência, responsabilidade e compromisso em todos os nossos serviços."
              },
              {
                icon: Star,
                title: "Excelência",
                description: "Buscamos continuamente a qualidade em cada etapa do atendimento."
              },
              {
                icon: Heart,
                title: "Humanização",
                description: "Promovemos um atendimento acolhedor, caloroso e atencioso."
              },
              {
                icon: CheckCircle,
                title: "Discrição e Sigilo",
                description: "Garantimos confidencialidade e respeito às informações e processos envolvidos."
              }
            ].map((value, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <ServicesCarousel />

      {/* Planos Preview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Planos de Assistência Familiar
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Proteção e tranquilidade para sua família com valores acessíveis
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Plano Gérbera */}
            <Card className="relative border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl sm:text-2xl">🌼</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Plano Gérbera</h3>
                  <div className="mt-2">
                    <span className="text-2xl sm:text-3xl font-bold text-primary">R$ 50</span>
                    <span className="text-muted-foreground text-sm sm:text-base">/mês</span>
                  </div>
                  <p className="text-muted-foreground mt-2 text-sm sm:text-base">Proteção com custo acessível</p>
                </div>
                
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {[
                    "Cobertura para até 9 dependentes",
                    "Atendimento funerário 24h",
                    "Urna padrão",
                    "Higienização e ornamentação",
                    "Translado até 100km",
                    "Velório e sepultamento",
                    "Kit café",
                    "Suporte integral à família"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full" asChild>
                  <a href="https://wa.me/5511995600235" target="_blank" rel="noopener noreferrer">
                    Contratar Plano
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Plano Lotus */}
            <Card className="relative border-primary/50 hover:border-primary transition-all hover:shadow-lg">
              <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-accent-foreground px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Mais Procurado
                </span>
              </div>
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl sm:text-2xl">🪷</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Plano Lotus</h3>
                  <div className="mt-2">
                    <span className="text-2xl sm:text-3xl font-bold text-primary">R$ 80</span>
                    <span className="text-muted-foreground text-sm sm:text-base">/mês</span>
                  </div>
                  <p className="text-muted-foreground mt-2 text-sm sm:text-base">Mais conforto e opções ampliadas</p>
                </div>
                
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {[
                    "Tudo do Plano Gérbera",
                    "Urna modelo superior (varão e visor)",
                    "Ornamentação com flores naturais",
                    "1 Coroa de Flores",
                    "Cobertura para até 9 dependentes",
                    "Serviço mais completo",
                    "Atendimento diferenciado",
                    "Materiais para convalescentes"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full" asChild>
                  <a href="https://wa.me/5511995600235" target="_blank" rel="noopener noreferrer">
                    Contratar Plano
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="/planos">
                Ver Todos os Detalhes
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Estamos Aqui Quando Você Mais Precisa
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/90">
              Atendimento 24 horas, 7 dias por semana. Nossa equipe está sempre pronta para oferecer o suporte necessário.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
                <a href="https://wa.me/5511995600235" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Falar Conosco Agora
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

export default Index;
