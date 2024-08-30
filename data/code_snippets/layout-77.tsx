import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
type ImageProps = {
  src: string;
  alt?: string;
};
type Props = {
  icon: ImageProps;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};
export type Layout77Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Layout77 = (props: Layout77Props) => {
  const { icon, heading, description, buttons } = {
    ...Layout77Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
<div>
<div className="mb-5 md:mb-6">
<img src={icon.src} className="size-12" alt={icon.alt} />
</div>
<h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">{heading}</h2>
</div>
<div>
<div>
<p className="md:text-md">{description}</p>
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
export const Layout77Defaults: Layout77Props = {
  icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo" },
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
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