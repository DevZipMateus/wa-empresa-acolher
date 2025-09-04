
import React from 'react';
import { CheckCircle, Phone, Shield, Users, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Planos = () => {
  return (
    <>
      <title>Planos de Assistência Familiar - WA Empresa Funerária | Desde R$ 50/mês</title>
      <meta name="description" content="Conheça os planos de assistência familiar da WA Empresa Funerária. Plano Gérbera R$ 50/mês e Plano Lotus R$ 80/mês. Cobertura até 9 dependentes. Assistência 24h." />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Planos de Assistência Familiar
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Proteção e tranquilidade para sua família com valores acessíveis
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-primary/10 px-3 sm:px-4 py-2 rounded-full">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-xs sm:text-sm">Carência de 90 dias</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary/10 px-3 sm:px-4 py-2 rounded-full">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-xs sm:text-sm">Até 9 dependentes</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary/10 px-3 sm:px-4 py-2 rounded-full">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-xs sm:text-sm">Assistência 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Plano Gérbera */}
            <Card className="relative border-border hover:border-primary/50 transition-all hover:shadow-xl">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl sm:text-3xl">🌼</span>
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">Plano Gérbera</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl sm:text-4xl font-bold text-primary">R$ 50</span>
                  <span className="text-muted-foreground text-base sm:text-lg">/mês</span>
                </div>
                <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                  Ideal para famílias que desejam proteção com custo acessível
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-semibold text-foreground text-base sm:text-lg">O que está incluído:</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Cobertura para até 9 dependentes (sem limite de grau de parentesco direto)",
                      "Atendimento funerário 24h",
                      "Urna padrão",
                      "Higienização e ornamentação do corpo (flores artificiais, véu, par de castiçais)",
                      "Carro fúnebre para translado (até 100km)",
                      "Velório",
                      "Sepultamento",
                      "Kit café",
                      "Suporte à família durante todo o processo"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start space-x-2 sm:space-x-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    <strong>Taxa de adesão:</strong> R$ 70,00<br/>
                    <strong>Carência:</strong> 90 dias a partir do pagamento da primeira parcela
                  </p>
                </div>

                <Button className="w-full" size="lg" asChild>
                  <a href="https://wa.me/5511995600235" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                    Contratar Plano Gérbera
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Plano Lotus */}
            <Card className="relative border-primary hover:border-primary transition-all hover:shadow-xl">
              <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-accent-foreground px-3 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                  Mais Procurado
                </span>
              </div>
              
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl sm:text-3xl">🪷</span>
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">Plano Lotus</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl sm:text-4xl font-bold text-primary">R$ 80</span>
                  <span className="text-muted-foreground text-base sm:text-lg">/mês</span>
                </div>
                <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                  Mais conforto, opções ampliadas e diferenciais para a despedida
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-semibold text-foreground text-base sm:text-lg">Inclui todos os itens do Plano Gérbera, além de:</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Urna modelo superior (varão e visor)",
                      "Ornamentação com flores naturais",
                      "Translado até 100 km",
                      "1 Coroa de Flores",
                      "Cobertura para até 9 dependentes",
                      "Serviço mais completo e acolhedor",
                      "Atendimento diferenciado",
                      "Material para convalescentes (muletas, bengalas, andador, cadeira de rodas e banho)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start space-x-2 sm:space-x-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/10 p-3 sm:p-4 rounded-lg">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    <strong>Taxa de adesão:</strong> R$ 70,00<br/>
                    <strong>Carência:</strong> 90 dias a partir do pagamento da primeira parcela
                  </p>
                </div>

                <Button className="w-full" size="lg" asChild>
                  <a href="https://wa.me/5511995600235" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                    Contratar Plano Lotus
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Informações Importantes */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Informações Importantes
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Tudo que você precisa saber sobre nossos planos
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">Cobertura</h3>
                  </div>
                  <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                    <li>• Santa Gertrudes e Rio Claro</li>
                    <li>• Até 9 dependentes por plano</li>
                    <li>• Sem limite de grau de parentesco direto</li>
                    <li>• Carência de 90 dias</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">Atendimento</h3>
                  </div>
                  <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                    <li>• Atendimento humanizado 24h</li>
                    <li>• Equipe especializada</li>
                    <li>• Suporte integral à família</li>
                    <li>• Assistência em todos os processos</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">Benefícios Extras</h3>
                  </div>
                  <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                    <li>• Empréstimo de material para convalescentes</li>
                    <li>• Muletas, bengalas, andador</li>
                    <li>• Cadeira de rodas e banho</li>
                    <li>• Período pré-definido</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">Pagamento</h3>
                  </div>
                  <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                    <li>• Pagamento por boleto ou PIX</li>
                    <li>• Taxa de adesão R$ 70,00</li>
                    <li>• Emissão de segunda via</li>
                    <li>• Atualização de cadastro</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Proteja Sua Família Hoje Mesmo
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/90">
              Entre em contato conosco e escolha o plano ideal para sua família. 
              Nossa equipe está pronta para esclarecer todas as suas dúvidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
                <a href="https://wa.me/5511995600235" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Falar com Consultor
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto">
                <a href="/contato">
                  Outros Contatos
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

export default Planos;
