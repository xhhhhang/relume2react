"use client";
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
type ImageProps = {
  src: string;
  alt?: string;
};
type Feature = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};
type Tab = {
  value: string;
  trigger: string;
  content: Feature[];
};
type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  defaultTabValue: string;
  tabs: Tab[];
};
export type Layout501Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Layout501 = (props: Layout501Props) => {
  const { tagline, heading, description, buttons, defaultTabValue, tabs } = {
    ...Layout501Defaults,
    ...props,
  } as Props;
  const [activeTab, setActiveTab] = useState(defaultTabValue);
  const MotionTabsContent = motion(TabsContent);
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container">
<div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 md:w-auto lg:mb-20">
<p className="mb-3 font-semibold md:mb-4">{tagline}</p>
<h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
<p className="md:text-md">{description}</p>
<div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
</div>
<Tabs defaultValue={defaultTabValue}>
<TabsList className="mb-12 items-center gap-6 md:mb-16 md:justify-center">
            {tabs.map((tab, index) => (
              <TabsTrigger
key={index}
value={tab.value}
onClick={() => setActiveTab(tab.value)}
                className="border-0 border-b-[1.5px] border-border-alternative px-0 py-2 duration-0 data-[state=active]:border-b-[1.5px] data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
              >
                {tab.trigger}
              </TabsTrigger>
            ))}
          </TabsList>
<AnimatePresence initial={false}>
            {tabs.map(
              (tab, index) =>
                tab.value === activeTab && (
                  <MotionTabsContent
key={index}
value={tab.value}
initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {tab.content.map((feature, featureIndex) => (
                      <Feature key={featureIndex} {...feature} />
                    ))}
                  </MotionTabsContent>
                ),
            )}
          </AnimatePresence>
</Tabs>
</div>
</section>
  );
};
const Feature = (feature: Feature) => {
  return (
    <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
<div>
<p className="mb-3 font-semibold md:mb-4">{feature.tagline}</p>
<h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
          {feature.heading}
        </h2>
<p>{feature.description}</p>
<div className="mt-6 flex items-center gap-x-4 md:mt-8">
          {feature.buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
</div>
<div>
<img src={feature.image.src} className="w-full object-cover" alt={feature.image.alt} />
</div>
</div>
  );
};
export const Layout501Defaults: Layout501Props = {
  tagline: "Tagline",
  heading: "Short heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  defaultTabValue: "tab-one",
  tabs: [
    {
      value: "tab-one",
      trigger: "Tab One",
      content: [
        {
          tagline: "Tagline",
          heading: "Medium length section heading goes here",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "secondary" },
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
            alt: "Placeholder image 1",
          },
        },
      ],
    },
    {
      value: "tab-two",
      trigger: "Tab Two",
      content: [
        {
          tagline: "Tagline",
          heading: "Medium length section heading goes here",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "secondary" },
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
            alt: "Placeholder image 2",
          },
        },
      ],
    },
    {
      value: "tab-three",
      trigger: "Tab Three",
      content: [
        {
          tagline: "Tagline",
          heading: "Medium length section heading goes here",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "secondary" },
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
            alt: "Placeholder image 3",
          },
        },
      ],
    },
  ],
};