"use client";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import clsx from "clsx";
import { useState } from "react";
import { RxChevronRight } from "react-icons/rx";
type ImageProps = {
  src: string;
  alt?: string;
};
type FeaturesProps = {
  icon: ImageProps;
  heading: string;
  description: string;
};
type Props = {
  features: FeaturesProps[];
  video: string;
  image: ImageProps;
  buttons: ButtonProps[];
};
export type Layout221Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Layout221 = (props: Layout221Props) => {
  const { features, video, image, buttons } = {
    ...Layout221Defaults,
    ...props,
  } as Props;
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container">
<div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
<Dialog>
<DialogTrigger className="order-2 lg:order-1">
<div className="relative flex w-full max-w-full items-center justify-center">
<img src={image.src} className="w-full object-cover" alt={image.alt} />
<Play className="absolute z-20 size-20 text-white" />
<span className="absolute inset-0 z-10 bg-black/50" />
</div>
</DialogTrigger>
<DialogPortal>
<DialogOverlay className="bg-black/90" />
<DialogContent>
                {!isIframeLoaded && <Loading className="mx-auto size-16 text-white" />}
                <iframe
className={clsx(
                    "z-0 mx-auto aspect-video h-full w-full md:w-[738px] lg:w-[940px]",
                    {
                      visible: isIframeLoaded,
                      hidden: !isIframeLoaded,
                    },
                  )}
                  src={video}
allow="autoplay; encrypted-media; picture-in-picture"
allowFullScreen
onLoad={() => setIsIframeLoaded(true)}
                ></iframe>
</DialogContent>
</DialogPortal>
</Dialog>
<div className="order-1 lg:order-2">
<div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 md:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index}>
<div className="mb-3 md:mb-4">
<img src={feature.icon.src} className="size-12" alt={feature.icon.alt} />
</div>
<h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{feature.heading}</h1>
<p>{feature.description}</p>
</div>
              ))}
            </div>
<div className="mt-6 flex items-center gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
</div>
</div>
</div>
</section>
  );
};
export const Layout221Defaults: Layout221Props = {
  features: [
    {
      icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 1" },
      heading: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 2" },
      heading: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 3" },
      heading: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 4" },
      heading: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ],
  video: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-video-thumbnail.svg",
    alt: "Placeholder image",
  },
  buttons: [
    {
      title: "Button",
      variant: "secondary",
    },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
};
const Play = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
xmlns="http://www.w3.org/2000/svg"
width={64}
height={64}
viewBox="0 0 64 64"
fill="none"
      {...props}
    >
<path
fill="currentColor"
d="M5.333 32C5.333 17.272 17.273 5.333 32 5.333A26.667 26.667 0 0 1 58.666 32c0 14.728-11.939 26.667-26.666 26.667-14.728 0-26.667-11.94-26.667-26.667ZM27.12 43.413l15.546-9.706a2.027 2.027 0 0 0 0-3.414l-15.6-9.706A2 2 0 0 0 24 22.267v19.466a2 2 0 0 0 3.12 1.68Z"
      />
</svg>
  );
};
const Loading = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
<g fill="none" stroke="currentColor">
<path
strokeDasharray={60}
strokeDashoffset={60}
strokeOpacity={0.3}
d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z"
        >
<animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0" />
</path>
<path strokeDasharray={15} strokeDashoffset={15} d="M12 3a9 9 0 0 1 9 9">
<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" />
<animateTransform
attributeName="transform"
dur="1.5s"
repeatCount="indefinite"
type="rotate"
values="0 12 12;360 12 12"
          />
</path>
</g>
</svg>
  );
};