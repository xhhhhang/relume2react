import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
type ImageProps = {
  src: string;
  alt?: string;
};
type SectionProps = {
  image: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
};
type Props = {
  sections: SectionProps[];
};
export type Layout132Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Layout132 = (props: Layout132Props) => {
  const { sections } = { ...props, ...Layout132Defaults } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-16">
        {sections.map((section, index) => (
          <div key={index}>
<div className="mb-6 md:mb-8">
<img src={section.image.src} alt={section.image.alt} />
</div>
<h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              {section.heading}
            </h3>
<p className="mt-5 md:mt-6">{section.description}</p>
<div className="mt-6 flex items-center gap-4 md:mt-8">
<Button
variant={section.button.variant}
size={section.button.size}
iconRight={section.button.iconRight}
iconLeft={section.button.iconLeft}
              >
                {section.button.title}
              </Button>
</div>
</div>
        ))}
      </div>
</section>
  );
};
export const Layout132Defaults: Layout132Props = {
  sections: [
    {
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
        alt: "Placeholder image 1",
      },
      heading: "Long heading is what you see here in this feature section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
        alt: "Placeholder image 2",
      },
      heading: "Long heading is what you see here in this feature section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};