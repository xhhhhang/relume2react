"use client";
import { useState } from "react";
import clsx from "clsx";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
} from "@relume_io/relume-ui";
type Content = {
  heading: string;
  description: string;
};
type Props = {
  leftContent: Content[];
  rightContent: Content[];
  video: string;
  videoType: string;
  videoDialog: string;
};
export type Layout355Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Layout355 = (props: Layout355Props) => {
  const { leftContent, rightContent, video, videoType, videoDialog } = {
    ...Layout355Defaults,
    ...props,
  } as Props;
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  return (
    <section className="relative">
<div className="px-[5%]">
<div className="container">
<div className="grid auto-cols-fr grid-cols-1 pb-8 md:grid-cols-[1fr_10rem_1fr] md:pb-0 lg:grid-cols-[1fr_12rem_1fr]">
<div className="relative md:mt-[100vh]">
              {leftContent.map((content, index) => (
                <div key={index} className="flex flex-col justify-center py-8 md:h-screen md:py-0">
<div className="w-full max-w-sm">
<h1 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                      {content.heading}
                    </h1>
<p className="text-text-alternative md:text-md">{content.description}</p>
</div>
</div>
              ))}
            </div>
<div className="static top-0 order-first flex h-[50vh] items-center justify-center md:sticky md:order-none md:h-screen">
<Dialog>
<DialogTrigger asChild className="cursor-pointer">
<button className="absolute z-20 flex items-center justify-center text-white">
<span className="flex size-20 flex-col items-center justify-center">
<Play />
</span>
</button>
</DialogTrigger>
<DialogPortal>
<DialogOverlay className="bg-black/90" />
<DialogContent>
                    {!isIframeLoaded && <Loading className="mx-auto size-16 text-white" />}
                    <iframe
className={clsx(
                        "z-0 mx-auto aspect-video size-full md:w-[738px] lg:w-[940px]",
                        {
                          visible: isIframeLoaded,
                          hidden: !isIframeLoaded,
                        },
                      )}
                      src={videoDialog}
allow="autoplay; encrypted-media; picture-in-picture"
allowFullScreen
onLoad={() => setIsIframeLoaded(true)}
                    ></iframe>
</DialogContent>
</DialogPortal>
</Dialog>
</div>
<div className="relative md:pt-[150vh]">
              {rightContent.map((content, index) => (
                <div key={index} className="flex flex-col justify-center py-8 md:h-screen md:py-0">
<div className="w-full max-w-sm">
<h1 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                      {content.heading}
                    </h1>
<p className="text-text-alternative md:text-md">{content.description}</p>
</div>
</div>
              ))}
            </div>
</div>
<div className="mb-[-100vh]" />
</div>
</div>
<div className="sticky bottom-0 -z-10 h-screen w-screen">
<div className="absolute inset-0 z-10 bg-black/50" />
<div className="sticky bottom-0 z-0 h-screen w-screen overflow-hidden object-cover">
<video
autoPlay
loop
muted
playsInline
className="absolute -bottom-full -left-full -right-full -top-full z-[-100] m-auto size-full bg-cover object-cover [background-position:50%]"
          >
<source src={video} type={videoType} />
</video>
</div>
</div>
</section>
  );
};
export const Layout355Defaults: Layout355Props = {
  leftContent: [
    {
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
  ],
  rightContent: [
    {
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
  ],
  video: "https://relume-assets.s3.amazonaws.com/placeholder-video.mp4",
  videoType: "video/mp4",
  videoDialog: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
};
const Play = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
xmlns="http://www.w3.org/2000/svg"
width={80}
height={80}
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