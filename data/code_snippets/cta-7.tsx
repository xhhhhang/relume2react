import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
};
export type Cta7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Cta7 = (props: Cta7Props) => {
  const { heading, description, buttons } = {
    ...Cta7Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container grid w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
<div className="md:mr-12 lg:mr-0">
<div className="w-full max-w-lg">
<h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
<p className="md:text-md">{description}</p>
</div>
</div>
<div className="flex items-start justify-start gap-4">
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
export const Cta7Defaults: Cta7Props = {
  heading: "Medium length heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
};