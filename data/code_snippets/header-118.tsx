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
  thirdImage: ImageProps;
};
export type Header118Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Header118 = (props: Header118Props) => {
  const { heading, description, buttons, firstImage, secondImage, thirdImage } = {
    ...Header118Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container">
<div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-12 lg:mb-20 lg:gap-20">
<h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">{heading}</h1>
<div className="mx-[7.5%] flex flex-col justify-end md:mt-48">
<p className="md:text-md">{description}</p>
<div className="mt-6 flex gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
</div>
</div>
<div className="grid grid-cols-[1fr_1.5fr_1fr] items-start gap-6 sm:gap-8">
<div className="mt-[70%] w-full">
<img
className="aspect-square size-full object-cover"
src={firstImage.src}
alt={firstImage.alt}
            />
</div>
<div className="w-full">
<img
className="aspect-[2/3] size-full object-cover"
src={secondImage.src}
alt={secondImage.alt}
            />
</div>
<div className="w-full">
<img
className="aspect-[2/3] size-full object-cover"
src={thirdImage.src}
alt={thirdImage.alt}
            />
</div>
</div>
</div>
</section>
  );
};
export const Header118Defaults: Header118Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  firstImage: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
    alt: "Placeholder image 1",
  },
  secondImage: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image 2",
  },
  thirdImage: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image 3",
  },
};