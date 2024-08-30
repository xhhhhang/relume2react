import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
type ImageProps = {
  src: string;
  alt?: string;
};
type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};
export type Header9Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Header9 = (props: Header9Props) => {
  const { heading, description, buttons, image } = {
    ...Header9Defaults,
    ...props,
  } as Props;
  return (
    <section className="flex h-svh min-h-svh flex-col">
<div className="relative flex-1">
<div className="absolute inset-0 -z-10">
<img
src={image.src}
alt={image.alt}
className="absolute inset-0 size-full object-cover"
          />
</div>
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
export const Header9Defaults: Header9Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
};