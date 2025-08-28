
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

const ServicesCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/9d3eac24-f9c1-401c-8b7a-a96794dbacd5.png",
      alt: "Coroa de flores funerária com flores brancas, vermelhas e amarelas"
    },
    {
      src: "/lovable-uploads/f714b613-c486-40f3-ae54-84eb762fc46a.png",
      alt: "Coroa de flores em formato circular com flores brancas, roxas e amarelas"
    },
    {
      src: "/lovable-uploads/404cdbc7-e700-4592-a5a8-07887b145cfb.png",
      alt: "Fachada da WA Empresa Funerária em Santa Gertrudes"
    },
    {
      src: "/lovable-uploads/bf000d07-1c94-4b20-9248-984e5574ee6f.png",
      alt: "Sede da WA Empresa Funerária com portão e placa de identificação"
    },
    {
      src: "/lovable-uploads/2c70831b-8a49-4727-befd-adf24e5e5653.png",
      alt: "Cartões de visita e materiais promocionais da WA Empresa Funerária"
    },
    {
      src: "/lovable-uploads/411a053f-ef43-4eb6-b63f-7ddb399cb013.png",
      alt: "Showroom com diferentes modelos de urnas funerárias"
    },
    {
      src: "/lovable-uploads/684eceb1-e54c-46a0-85d1-a3035fab06f2.png",
      alt: "Placas memoriais personalizadas com fotos"
    },
    {
      src: "/lovable-uploads/a99467e9-2882-499b-abc9-87f9777c0e5d.png",
      alt: "Veículo funerário da WA Empresa com iluminação azul"
    }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços e Instalações
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa estrutura completa e os serviços que oferecemos com qualidade e dignidade
          </p>
        </div>

        <div className="flex justify-center">
          <Carousel 
            className="w-full max-w-2xl"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                            />
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl w-full max-h-[90vh]">
                            <div className="flex items-center justify-center">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            As imagens mudam automaticamente a cada 3 segundos. Passe o mouse sobre o carrossel para pausar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
