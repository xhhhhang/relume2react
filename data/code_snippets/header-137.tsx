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
  firstImage: ImageProps;
  secondImage: ImageProps;
};
export type Header137Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Header137 = (props: Header137Props) => {
  const { heading, description, buttons, firstImage, secondImage } = {
    ...Header137Defaults,
    ...props,
  } as Props;
  return (
    <section className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0">
<div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
<h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
<p className="md:text-md">{description}</p>
<div className="mt-6 flex gap-x-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
</div>
<div className="relative flex items-center">
<div className="absolute w-[45%] pl-[5%] lg:pl-0">
<img
src={firstImage.src}
alt={firstImage.alt}
className="aspect-[2/3] w-full object-cover lg:h-full"
          />
</div>
<div className="ml-[10%]">
<img
src={secondImage.src}
alt={secondImage.alt}
className="w-full object-cover lg:h-screen lg:max-h-[60rem]"
          />
</div>
</div>
</section>
  );
};
export const Header137Defaults: Header137Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  firstImage: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image-portrait-dim.png",
    alt: "Placeholder image 1",
  },
  secondImage: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image 2",
  },
};