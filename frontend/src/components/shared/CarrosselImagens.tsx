import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

export interface CarrosselImagensProps {
  imagens: string[]; // Array de URLs das imagens
}

export default function CarrosselImagens(props: CarrosselImagensProps) {
  return (
    <Carousel opts={{ loop: true }} className=" w-7/10 xl:w-full md:w-11/12">
      <CarouselContent>
        {props.imagens.map((imagem) => (
          <CarouselItem key={imagem} className="relative h-96 w-full">
            <Image src={imagem} alt="imagem" fill className="object-cover" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
