"use client";
import clsx from "clsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
} from "@relume_io/relume-ui";
type ImageProps = {
  src: string;
  alt?: string;
};
type VideoProps = {
  image: ImageProps;
  url: string;
};
type TabProps = {
  percentage: string;
  heading: string;
  description: string;
  image?: ImageProps;
  video?: VideoProps;
};
type Props = {
  tagline: string;
  heading: string;
  description: string;
  tabs: TabProps[];
};
export type Stats23Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Stats23 = (props: Stats23Props) => {
  const { tagline, heading, description, tabs } = {
    ...Stats23Defaults,
    ...props,
  } as Props;
  const [activeTab, setActiveTab] = useState(0);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container flex flex-col items-start">
<div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
<p className="mb-3 font-semibold md:mb-4">{tagline}</p>
<h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
<p className="md:text-md">{description}</p>
</div>
<div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
<div className="flex max-h-full w-full items-center justify-center overflow-hidden">
<AnimatePresence mode="wait" initial={false}>
              {tabs.map((tab, index) => {
                if (activeTab !== index) return null;
                return (
                  <motion.div
key={index}
initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0 }}
                  >
                    {tab.image && (
                      <img
src={tab.image.src}
alt={tab.image.alt}
className="size-full object-cover"
                      />
                    )}
                    {tab.video && (
                      <Dialog>
<DialogTrigger>
<div className="relative flex w-full items-center justify-center">
<img
src={tab.video.image.src}
alt={tab.video.image.alt}
className="size-full object-cover"
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
                              src={tab.video.url}
allow="autoplay; encrypted-media; picture-in-picture"
allowFullScreen
onLoad={() => setIsIframeLoaded(true)}
                            ></iframe>
</DialogContent>
</DialogPortal>
</Dialog>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
</div>
<div className="grid grid-cols-1 items-center gap-x-4 gap-y-10">
            {tabs.map((tab, index) => (
              <div
key={index}
onClick={() => setActiveTab(index)}
                className={clsx("cursor-pointer pl-8", {
                  "border-l-2 border-black": activeTab === index,
                  "border-l-2 border-transparent": activeTab !== index,
                })}
              >
                <h2 className="mb-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                  {tab.percentage}
                </h2>
<h3 className="text-md font-bold leading-[1.4] md:text-xl">{tab.heading}</h3>
<p className="mt-2">{tab.description}</p>
</div>
            ))}
          </div>
</div>
</div>
</section>
  );
};
export const Stats23Defaults: Stats23Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  tabs: [
    {
      percentage: "50%",
      heading: "Short heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 1",
      },
    },
    {
      percentage: "50%",
      heading: "Short heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      video: {
        image: {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-video-thumbnail.svg",
          alt: "Placeholder image 2",
        },
        url: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
      },
    },
    {
      percentage: "50%",
      heading: "Short heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 3",
      },
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