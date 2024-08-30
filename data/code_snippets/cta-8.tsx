import { Button, Input } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
type Props = {
  heading: string;
  description: string;
  button: ButtonProps;
  inputPlaceholder: string;
  termsAndConditions: string;
};
export type Cta8Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Cta8 = (props: Cta8Props) => {
  const { heading, description, inputPlaceholder, button, termsAndConditions } = {
    ...Cta8Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container grid w-full grid-cols-1 items-start justify-between gap-6 md:gap-x-12 md:gap-y-8 lg:grid-cols-[1fr_max-content] lg:gap-x-20">
<div className="w-full max-w-lg">
<h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
            {heading}
          </h2>
<p className="md:text-md">{description}</p>
</div>
<div>
<div className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
<Input type="email" placeholder={inputPlaceholder} />
<Button {...button}>{button.title}</Button>
</div>
<div dangerouslySetInnerHTML={{ __html: termsAndConditions }} />
</div>
</div>
</section>
  );
};
export const Cta8Defaults: Cta8Props = {
  heading: "Medium length heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  inputPlaceholder: "Enter your email",
  button: { title: "Sign up" },
  termsAndConditions: `
  <p class='text-xs'>
    By clicking Sign Up you're confirming that you agree with our
    <a href='#' class='underline'>Terms and Conditions</a>.
  </p>
  `,
};