import { Input, Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
type ImageProps = {
  src: string;
  alt?: string;
};
type Props = {
  heading: string;
  description: string;
  inputPlaceholder?: string;
  termsAndConditions: string;
  button: ButtonProps;
  image: ImageProps;
};
export type Header73Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Header73 = (props: Header73Props) => {
  const { heading, description, inputPlaceholder, termsAndConditions, button, image } = {
    ...Header73Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container">
<div className="flex flex-col">
<div className="mb-12 md:mb-18 lg:mb-20">
<div className="w-full max-w-lg">
<h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                {heading}
              </h1>
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
<div>
<img src={image.src} className="size-full object-cover" alt={image.alt} />
</div>
</div>
</div>
</section>
  );
};
export const Header73Defaults: Header73Props = {
  heading: "Long heading is what you see here in this header section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  inputPlaceholder: "Enter your email",
  button: { title: "Sign up" },
  termsAndConditions: `
  <p class='text-xs'>
    By clicking Sign Up you're confirming that you agree with our
    <a href='#' class='underline'>Terms and Conditions</a>.
  </p>
  `,
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
    alt: "Placeholder image",
  },
};