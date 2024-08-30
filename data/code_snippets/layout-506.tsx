"use client";
import React, { useState } from "react";
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";
type ImageProps = {
  src: string;
  alt?: string;
};
type Feature = {
  icon: ImageProps;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};
type Tab = {
  value: string;
  trigger: string;
  content: Feature;
};
type Props = {
  tagline: string;
  heading: string;
  description: string;
  defaultValue?: string;
  tabs: Tab[];
};
export type Layout506Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Layout506 = (props: Layout506Props) => {
  const { tagline, heading, description, defaultValue, tabs } = {
    ...Layout506Defaults,
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
<Tabs
value={activeTab}
onValueChange={setActiveTab}
orientation="vertical"
className="relative grid auto-cols-fr grid-cols-1 border border-border-primary md:grid-cols-[1.5fr_1fr]"
        >
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
<FeatureCard tab={tab} />
</MotionTabsContent>
            ))}
          </AnimatePresence>
<TabsList className="relative grid h-full auto-cols-fr grid-cols-1 border-t border-border-primary md:border-l md:border-t-0">
            {tabs.map((tab, index) => (
              <TabsTrigger
key={index}
value={tab.value}
className="items-start justify-start border-0 border-b border-border-primary px-6 py-6 text-xl font-bold last-of-type:border-0 data-[state=active]:bg-background-primary data-[state=active]:text-text-primary md:px-8 md:text-2xl"
              >
                {tab.trigger}
              </TabsTrigger>
            ))}
          </TabsList>
</Tabs>
</div>
</section>
  );
};
const FeatureCard = ({ tab }: { tab: Tab }) => {
  return (
    <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
<div className="mb-5 md:mb-6">
<img src={tab.content.icon.src} className="size-12" alt={tab.content.icon.alt} />
</div>
<h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
        {tab.content.heading}
      </h2>
<p>{tab.content.description}</p>
<div className="mt-6 flex items-center gap-4 md:mt-8">
        {tab.content.buttons.map((button, index) => (
          <Button key={index} {...button}>
            {button.title}
          </Button>
        ))}
      </div>
</div>
  );
};
export const Layout506Defaults: Layout506Props = {
  tagline: "Tagline",
  heading: "Short heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  defaultValue: "tab-1",
  tabs: [
    {
      value: "tab-1",
      trigger: "Tab one",
      content: {
        icon: {
          src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
          alt: "Relume logo 1",
        },
        heading: "Medium length section heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        buttons: [
          { title: "Button", variant: "secondary" },
          {
            title: "Button",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
          },
        ],
      },
    },
    {
      value: "tab-2",
      trigger: "Tab two",
      content: {
        icon: {
          src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
          alt: "Relume logo 2",
        },
        heading: "Medium length section heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        buttons: [
          { title: "Button", variant: "secondary" },
          {
            title: "Button",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
          },
        ],
      },
    },
    {
      value: "tab-3",
      trigger: "Tab three",
      content: {
        icon: {
          src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
          alt: "Relume logo 3",
        },
        heading: "Medium length section heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        buttons: [
          { title: "Button", variant: "secondary" },
          {
            title: "Button",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
          },
        ],
      },
    },
    {
      value: "tab-4",
      trigger: "Tab four",
      content: {
        icon: {
          src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
          alt: "Relume logo 4",
        },
        heading: "Medium length section heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        buttons: [
          { title: "Button", variant: "secondary" },
          {
            title: "Button",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
          },
        ],
      },
    },
    {
      value: "tab-5",
      trigger: "Tab five",
      content: {
        icon: {
          src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
          alt: "Relume logo 5",
        },
        heading: "Medium length section heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        buttons: [
          { title: "Button", variant: "secondary" },
          {
            title: "Button",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
          },
        ],
      },
    },
    {
      value: "tab-6",
      trigger: "Tab six",
      content: {
        icon: {
          src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
          alt: "Relume logo 6",
        },
        heading: "Medium length section heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        buttons: [
          { title: "Button", variant: "secondary" },
          {
            title: "Button",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
          },
        ],
      },
    },
  ],
};