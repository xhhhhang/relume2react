"use client";
import React from "react";
import { useState, useEffect } from "react";
import type { ButtonProps, CarouselApi } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
type ImageProps = {
  src: string;
  alt?: string;
};
type Testimonial = {
  logo: ImageProps;
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
  button: ButtonProps;
};
type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};
export type Testimonial30Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Testimonial30 = (props: Testimonial30Props) => {
  const { heading, description, testimonials } = {
    ...Testimonial30Defaults,
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
<div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
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
          className="overflow-hidden"
        >
<div className="relative">
<CarouselContent className="ml-0 md:mx-3.5">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-0 md:basis-1/2 md:px-4">
<TestimonialCard testimonial={testimonial} />
</CarouselItem>
              ))}
            </CarouselContent>
<CarouselPrevious className="hidden bg-white md:flex md:size-12 lg:size-14" />
<CarouselNext className="hidden bg-white md:flex md:size-12 lg:size-14" />
</div>
<div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
            {testimonials.map((_, index) => (
              <button
key={index}
onClick={() => api?.scrollTo(index)}
                className={clsx("relative mx-[3px] inline-block size-2 rounded-full", {
                  "bg-black": current === index + 1,
                  "bg-neutral-darker/40": current !== index + 1,
                })}
              />
            ))}
          </div>
</Carousel>
</div>
</section>
  );
};
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
<div className="mb-5 md:mb-6">
<div className="mb-12">
<img src={testimonial.logo.src} alt={testimonial.logo.alt} className="max-h-12" />
</div>
<blockquote className="md:text-md">{testimonial.quote}</blockquote>
</div>
<div className="flex w-full flex-col items-start gap-4 md:w-auto md:flex-row md:items-center">
<img
src={testimonial.avatar.src}
alt={testimonial.avatar.alt}
className="size-12 min-h-12 min-w-12 rounded-full object-cover"
        />
<div>
<p className="font-semibold">{testimonial.name}</p>
<p>
            {testimonial.position}, {testimonial.companyName}
          </p>
</div>
</div>
<div className="mt-6 md:mt-8">
<Button className="py-1" {...testimonial.button}>
          {testimonial.button.title}
        </Button>
</div>
</div>
  );
};
export const Testimonial30Defaults: Testimonial30Props = {
  heading: "Customer testimonials",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  testimonials: [
    {
      logo: {
        src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
        alt: "Webflow logo 1",
      },
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Testimonial avatar 1",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      button: {
        title: "Read case study",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      logo: {
        src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
        alt: "Relume logo 2",
      },
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Testimonial avatar 2",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      button: {
        title: "Read case study",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      logo: {
        src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
        alt: "Webflow logo 3",
      },
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Testimonial avatar 3",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      button: {
        title: "Read case study",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      logo: {
        src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
        alt: "Relume logo 4",
      },
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Testimonial avatar 4",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      button: {
        title: "Read case study",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};