import { Button, Input } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
type ImageProps = {
  src: string;
  alt?: string;
};
type Props = {
  heading: string;
  description: string;
  inputPlaceholder?: string;
  button: ButtonProps;
  image: ImageProps;
  termsAndConditions: string;
};
export type Header20Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Header20 = (props: Header20Props) => {
  const { heading, description, button, inputPlaceholder, image, termsAndConditions } = {
    ...Header20Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container">
<div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
<div className="order-2 lg:order-1">
<img src={image.src} className="w-full object-cover" alt={image.alt} />
</div>
<div className="order-1 lg:order-2">
<h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
<p className="md:text-md">{description}</p>
<div className="mb-0 mt-6 max-w-sm md:mt-8">
<div className="mb-4 grid grid-cols-1 items-center gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:mt-8">
<Input type="email" placeholder={inputPlaceholder} />
<Button {...button}>{button.title}</Button>
</div>
<div dangerouslySetInnerHTML={{ __html: termsAndConditions }} />
</div>
</div>
</div>
</div>
</section>
  );
};
export const Header20Defaults: Header20Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  inputPlaceholder: "Enter your email",
  button: { title: "Sign up" },
  termsAndConditions: `
  <p class='text-xs'>
    By clicking Sign Up you're confirming that you agree with our
    <a href='#' class='underline'>Terms and Conditions</a>.
  </p>
  `,
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
};