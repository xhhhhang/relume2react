"use client";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import type { CarouselApi } from "@relume_io/relume-ui";
import clsx from "clsx";
type ImageProps = {
  src: string;
  alt?: string;
};
type Props = {
  heading: string;
  description: string;
  images: ImageProps[];
};
export type Gallery21Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Gallery21 = (props: Gallery21Props) => {
  const { heading, description, images } = {
    ...Gallery21Defaults,
    ...props,
  } as Props;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
<div className="container">
<div className="mb-12 md:mb-18 lg:mb-20">
<h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
<p className="md:text-md">{description}</p>
</div>
        {/* for all available options: https://www.embla-carousel.com/api/options/ */}
        <Carousel
setApi={setApi}
opts={{
loop: true,
            align: "start",
          }}
        >
<CarouselContent className="ml-0">
            {images.map((image, index) => (
              <CarouselItem key={index} className="basis-full pl-0 pr-6 md:basis-1/2 md:pr-8">
<img
src={image.src}
alt={image.alt}
className="aspect-square size-full object-cover"
                />
</CarouselItem>
            ))}
          </CarouselContent>
<div className="mt-8 flex items-center justify-between">
<div className="mt-5 flex w-full items-start justify-start">
              {images.map((_, index) => (
                <button
key={index}
onClick={() => api?.scrollTo(index)}
                  className={clsx("mx-[3px] inline-block size-2 rounded-full", {
                    "bg-black": current === index + 1,
                    "bg-neutral-light": current !== index + 1,
                  })}
                />
              ))}
            </div>
<div className="flex items-end justify-end gap-2 md:gap-4">
<CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
<CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
</div>
</div>
</Carousel>
</div>
</section>
  );
};
export const Gallery21Defaults: Gallery21Props = {
  heading: "Image Gallery",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  images: [
    {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 1",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 2",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 3",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 4",
    },
  ],
};