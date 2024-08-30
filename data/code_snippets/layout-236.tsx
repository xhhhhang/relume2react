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
export type Layout236Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Layout236 = (props: Layout236Props) => {
  const { sections } = { ...props, ...Layout236Defaults } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
        {sections.map((section, index) => (
          <div key={index}>
<div className="mb-6 md:mb-8">
<img src={section.image.src} alt={section.image.alt} />
</div>
<h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{section.heading}</h3>
<p>{section.description}</p>
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
export const Layout236Defaults: Layout236Props = {
  sections: [
    {
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
        alt: "Placeholder image 1",
      },
      heading: "Long heading is what you see here in this feature section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
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
        alt: "Placeholder image 3",
      },
      heading: "Long heading is what you see here in this feature section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};