"use client";
import { BiSolidStar } from "react-icons/bi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
type ImageProps = {
  src: string;
  alt?: string;
};
type Testimonial = {
  numberOfStars: number;
  quote: string;
  image: ImageProps;
  name: string;
  position: string;
  companyName: string;
};
type Tab = {
  value: string;
  trigger: ImageProps;
  content: Testimonial;
};
type Props = {
  tagline: string;
  heading: string;
  description: string;
  defaultValue?: string;
  tabs: Tab[];
};
export type Testimonial35Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Testimonial35 = (props: Testimonial35Props) => {
  const { tagline, heading, description, defaultValue, tabs } = {
    ...Testimonial35Defaults,
    ...props,
  } as Props;
  const [activeTab, setActiveTab] = useState(defaultValue);
  const MotionTabsContent = motion(TabsContent);
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container">
<div className="container mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
<p className="mb-3 font-semibold md:mb-4">{tagline}</p>
<h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
<p className="md:text-md">{description}</p>
</div>
<div className="relative grid auto-cols-fr grid-cols-1 items-stretch gap-x-12 border border-border-primary lg:gap-x-0">
<Tabs value={activeTab} onValueChange={setActiveTab}>
<AnimatePresence initial={false}>
              {tabs.map((tab) => (
                <MotionTabsContent
key={tab.value}
value={tab.value}
initial={{ opacity: 0 }}
                  animate={{ opacity: activeTab === tab.value ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
<TestimonialCard tab={tab} />
</MotionTabsContent>
              ))}
            </AnimatePresence>
<TabsList className="flex-col md:flex-row">
              {tabs.map((tab, index) => (
                <TabsTrigger
key={index}
value={tab.value}
className="flex w-full items-center justify-center gap-4 border-0 border-t px-6 py-4 duration-0 data-[state=active]:bg-background-primary md:border-r md:px-8 md:py-6 md:last-of-type:border-r-0 md:data-[state=active]:[border-top:1px_solid_#fff]"
                >
<img
src={tab.trigger.src}
alt={tab.trigger.alt}
className="max-h-10 md:max-h-14"
                  />
</TabsTrigger>
              ))}
            </TabsList>
</Tabs>
</div>
</div>
</section>
  );
};
const TestimonialCard = ({ tab }: { tab: Tab }) => {
  return (
    <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 p-6 md:grid-cols-2 md:p-8 lg:gap-x-20 lg:gap-y-16 lg:p-12">
<div className="order-last md:order-first">
<img src={tab.content.image.src} alt={tab.content.image.alt} className="object-cover" />
</div>
<div className="flex flex-col items-start">
<div>
<div className="flex items-center justify-start">
            {Array(tab.content.numberOfStars)
              .fill(null)
              .map((_, starIndex) => (
                <BiSolidStar key={starIndex} className="mr-1 size-6" />
              ))}
          </div>
<blockquote className="my-6 text-xl font-bold md:my-8 md:text-2xl">
            {tab.content.quote}
          </blockquote>
</div>
<div className="flex flex-col flex-nowrap">
<p className="font-semibold">{tab.content.name}</p>
<p>
            {tab.content.position}, {tab.content.companyName}
          </p>
</div>
</div>
</div>
  );
};
export const Testimonial35Defaults: Testimonial35Props = {
  tagline: "Tagline",
  heading: "Short heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  defaultValue: "tab-1",
  tabs: [
    {
      value: "tab-1",
      trigger: {
        src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
        alt: "Webflow logo 1",
      },
      content: {
        numberOfStars: 5,
        quote:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
        image: {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
          alt: "Testimonial image 1",
        },
        name: "Name Surname",
        position: "Position",
        companyName: "Company name",
      },
    },
    {
      value: "tab-2",
      trigger: {
        src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
        alt: "Relume logo 2",
      },
      content: {
        numberOfStars: 5,
        quote:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
        image: {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
          alt: "Testimonial image 2",
        },
        name: "Name Surname",
        position: "Position",
        companyName: "Company name",
      },
    },
    {
      value: "tab-3",
      trigger: {
        src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
        alt: "Webflow logo 3",
      },
      content: {
        numberOfStars: 5,
        quote:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
        image: {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
          alt: "Testimonial image 3",
        },
        name: "Name Surname",
        position: "Position",
        companyName: "Company name",
      },
    },
    {
      value: "tab-4",
      trigger: {
        src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
        alt: "Relume logo 4",
      },
      content: {
        numberOfStars: 5,
        quote:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
        image: {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
          alt: "Testimonial image 4",
        },
        name: "Name Surname",
        position: "Position",
        companyName: "Company name",
      },
    },
  ],
};