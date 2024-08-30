"use client";
import { useState } from "react";
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
type ImageProps = {
  src: string;
  alt?: string;
};
type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  video: string;
  image: ImageProps;
};
export type Header13Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Header13 = (props: Header13Props) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const { heading, description, buttons, video, image } = {
    ...Header13Defaults,
    ...props,
  } as Props;
  return (
    <section className="flex h-svh min-h-svh flex-col">
<div className="relative flex-1">
<Dialog>
<DialogTrigger>
<div className="absolute inset-0 flex size-full items-center justify-center object-cover">
<img
src={image.src}
alt={image.alt}
className="inline-block size-full max-w-full object-cover align-middle"
              />
<Play className="absolute z-20 text-white" />
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
</div>
<div className="px-[5%]">
<div className="container">
<div className="grid grid-rows-1 items-start gap-2 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:py-18 lg:gap-x-20 lg:gap-y-16 lg:py-20">
<h1 className="mb-5 text-6xl font-bold text-text-primary md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
<div>
<p className="text-base text-text-primary md:text-md">{description}</p>
<div className="mt-6 flex gap-x-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ))}
              </div>
</div>
</div>
</div>
</div>
</section>
  );
};
export const Header13Defaults: Header13Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  video: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-video-thumbnail.svg",
    alt: "Placeholder image",
  },
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