"use client";
import clsx from "clsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
type ImageProps = {
  src: string;
  alt?: string;
};
type VideoProps = {
  image: ImageProps;
  url: string;
};
type TabProps = {
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
  buttons: ButtonProps[];
};
export type Layout493Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Layout493 = (props: Layout493Props) => {
  const { tagline, heading, description, tabs, buttons } = {
    ...Layout493Defaults,
    ...props,
  } as Props;
  const [activeTab, setActiveTab] = useState(0);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container">
<div className="relative">
<div className="w-full pr-0 md:w-1/2 md:pr-6 lg:pr-10">
<div className="mb-8 w-full md:w-auto">
<p className="mb-3 font-semibold md:mb-4">{tagline}</p>
<h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
<p className="md:text-md">{description}</p>
</div>
<div className="static flex flex-col flex-wrap justify-stretch md:block ">
<div className="relative mb-8 grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:mb-0 md:items-stretch">
                {tabs.map((tab, index) => (
                  <div
key={index}
onClick={() => setActiveTab(index)}
                    className={clsx("cursor-pointer border-b border-border-primary py-4", {
                      "opacity-100": activeTab === index,
                      "opacity-25": activeTab !== index,
                    })}
                  >
                    <h2 className="text-xl font-bold md:text-2xl">{tab.heading}</h2>
<motion.div
initial={false}
animate={{
height: activeTab === index ? "auto" : 0,
                        opacity: activeTab === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
<p className="mt-2">{tab.description}</p>
</motion.div>
</div>
                ))}
              </div>
<AnimatePresence mode="wait" initial={false}>
                {tabs.map((tab, index) => {
                  if (activeTab !== index) return null;
                  return (
                    <motion.div
key={index}
initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="relative bottom-0 left-auto right-0 top-0 flex h-full w-full items-center justify-center md:absolute md:w-1/2 md:pl-6 lg:pl-10"
                    >
                      {tab.image && (
                        <img src={tab.image.src} alt={tab.image.alt} className="size-full" />
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
                              {!isIframeLoaded && (
                                <Loading className="mx-auto size-16 text-white" />
                              )}
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
</div>
</section>
  );
};
export const Layout493Defaults: Layout493Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  tabs: [
    {
      heading: "Short heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 1",
      },
    },
    {
      heading: "Short heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      video: {
        image: {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-video-thumbnail.svg",
          alt: "Placeholder image 2",
        },
        url: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
      },
    },
    {
      heading: "Short heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 3",
      },
    },
  ],
  buttons: [
    { title: "Button", variant: "secondary" },
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