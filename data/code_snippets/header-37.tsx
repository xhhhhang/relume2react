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
export type Header37Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Header37 = (props: Header37Props) => {
  const { heading, description, buttons, image } = {
    ...Header37Defaults,
    ...props,
  } as Props;
  return (
    <section className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0">
<div className="order-2 lg:order-1">
<img
src={image.src}
alt={image.alt}
className="w-full object-cover lg:h-screen lg:max-h-[60rem]"
        />
</div>
<div className="order-1 mx-[5%] sm:max-w-md md:justify-self-start lg:order-2 lg:ml-20 lg:mr-[5vw]">
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
</section>
  );
};
export const Header37Defaults: Header37Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
};