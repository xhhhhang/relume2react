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
  logos: ImageProps[];
};
export type Cta33Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Cta33 = (props: Cta33Props) => {
  const { heading, description, buttons, logos } = {
    ...Cta33Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container">
<div className="container mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
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
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
          {logos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="max-h-12 md:max-h-14" />
          ))}
        </div>
</div>
</section>
  );
};
export const Cta33Defaults: Cta33Props = {
  heading: "Medium length heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  logos: [
    { src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg", alt: "Webflow logo 1" },
    { src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg", alt: "Relume logo 1" },
    { src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg", alt: "Webflow logo 2" },
    { src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg", alt: "Relume logo 2" },
    { src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg", alt: "Webflow logo 3" },
    { src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg", alt: "Relume logo 3" },
  ],
};