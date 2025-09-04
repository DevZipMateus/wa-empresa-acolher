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
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Cuidado e Dignidade em <br />
                <span className="text-accent">Momentos Difíceis</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
                Prestamos serviços funerários com respeito, humanização e profissionalismo desde 1999
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
                <a href="https://wa.me/5511995600235" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-5 h-5" />
                  Assistência 24h
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild className="bg-background text-foreground hover:bg-background/90 border-2 border-background text-lg px-8 py-6">
                <a href="/planos">
                  Conhecer Planos
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center space-y-2">
                <Clock className="w-8 h-8 mx-auto text-accent" />
                <h3 className="font-semibold text-lg">24 Horas</h3>
                <p className="text-primary-foreground/80">Atendimento disponível todos os dias</p>
              </div>
              <div className="text-center space-y-2">
                <Shield className="w-8 h-8 mx-auto text-accent" />
                <h3 className="font-semibold text-lg">25 Anos</h3>
                <p className="text-primary-foreground/80">De experiência e confiança</p>
              </div>
              <div className="text-center space-y-2">
                <Users className="w-8 h-8 mx-auto text-accent" />
                <h3 className="font-semibold text-lg">Até 9 Dependentes</h3>
                <p className="text-primary-foreground/80">Cobertura para toda família</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Princípios que norteiam nosso atendimento há mais de duas décadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <ServicesCarousel />

      {/* Planos Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Planos de Assistência Familiar
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proteção e tranquilidade para sua família com valores acessíveis
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Plano Gérbera */}
            <Card className="relative border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌼</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Plano Gérbera</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-primary">R$ 50</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                  <p className="text-muted-foreground mt-2">Proteção com custo acessível</p>
                </div>
                
                <ul className="space-y-3 mb-8">
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
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
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
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Mais Procurado
                </span>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🪷</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Plano Lotus</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-primary">R$ 80</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                  <p className="text-muted-foreground mt-2">Mais conforto e opções ampliadas</p>
                </div>
                
                <ul className="space-y-3 mb-8">
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
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
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

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="/planos">
                Ver Todos os Detalhes
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Estamos Aqui Quando Você Mais Precisa
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Atendimento 24 horas, 7 dias por semana. Nossa equipe está sempre pronta para oferecer o suporte necessário.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/5511995600235" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-5 h-5" />
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
