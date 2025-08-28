
import React from 'react';
import { Heart, Calendar, MapPin, Award, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Sobre = () => {
  return (
    <>
      <title>Sobre a WA Empresa Funerária - Nossa História e Missão | Santa Gertrudes/SP</title>
      <meta name="description" content="Conheça a história da WA Empresa Funerária, fundada em 1999. Nossa missão, valores e compromisso com o atendimento humanizado em Santa Gertrudes e Rio Claro." />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Nossa História
            </h1>
            <p className="text-xl text-muted-foreground">
              Mais de 25 anos cuidando de famílias com dignidade, respeito e humanização
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-12">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <Calendar className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">1999 - Nossa Fundação</h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A WA Empresa Funerária foi fundada em 1999 com o propósito de oferecer um atendimento digno, 
                  humanizado e respeitoso às famílias enlutadas. Desde o início, seus fundadores entenderam que, 
                  nos momentos de perda, o que mais importa é ter ao lado profissionais preparados para acolher 
                  com empatia e sensibilidade.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com dedicação e compromisso, a WA consolidou sua presença na cidade de Santa Gertrudes/SP e, 
                  com o passar dos anos, expandiu seus serviços para atender também o município de Rio Claro e 
                  toda a região. A empresa se tornou referência em serviços funerários pela qualidade no 
                  atendimento, pela seriedade com que conduz cada cerimônia e pelo respeito à memória de quem parte.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ao longo de sua trajetória, a WA investiu em estrutura, veículos próprios, planos acessíveis e 
                  uma equipe altamente capacitada, disponível 24 horas por dia, todos os dias do ano. Seu foco 
                  sempre foi – e continua sendo – oferecer suporte completo às famílias, desde os trâmites legais 
                  até a realização de velórios e sepultamentos ou cremações, com serenidade, ética e profissionalismo.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com mais de duas décadas de atuação, a WA Empresa Funerária segue firme em sua missão de prestar 
                  um serviço que valoriza a vida e respeita o luto, estando sempre presente quando mais se precisa.
                </p>
              </CardContent>
            </Card>

            {/* Missão */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">Nossa Missão</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Prestar serviços funerários com dignidade, respeito e humanização, acolhendo famílias em 
                  momentos de dor e proporcionando um atendimento ético, ágil e compassivo, com foco no 
                  cuidado integral e na preservação da memória de quem partiu.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossos Valores
              </h2>
              <p className="text-xl text-muted-foreground">
                Princípios que norteiam cada atendimento
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Respeito à Vida e à Morte",
                  description: "Tratamos cada história com reverência, valorizando a individualidade de cada ser humano.",
                  icon: Heart
                },
                {
                  title: "Empatia",
                  description: "Atendemos com sensibilidade e escuta ativa, colocando-nos no lugar das famílias enlutadas.",
                  icon: Users
                },
                {
                  title: "Ética",
                  description: "Agimos com transparência, responsabilidade e compromisso em todos os nossos serviços.",
                  icon: CheckCircle
                },
                {
                  title: "Excelência",
                  description: "Buscamos continuamente a qualidade em cada etapa do atendimento.",
                  icon: Award
                },
                {
                  title: "Humanização",
                  description: "Promovemos um atendimento acolhedor, caloroso e atencioso.",
                  icon: Heart
                },
                {
                  title: "Discrição e Sigilo",
                  description: "Garantimos confidencialidade e respeito às informações e processos envolvidos.",
                  icon: CheckCircle
                }
              ].map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Por que Escolher a WA?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">25 Anos de Experiência</h3>
                <p className="text-muted-foreground">
                  Fundada em 1999, acumulamos décadas de experiência no cuidado com famílias enlutadas.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Cobertura Regional</h3>
                <p className="text-muted-foreground">
                  Atendemos Santa Gertrudes, Rio Claro e toda a região com a mesma qualidade e dedicação.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Tradição e Inovação</h3>
                <p className="text-muted-foreground">
                  Unimos o cuidado tradicional com soluções modernas para oferecer serviços relevantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Sobre;
