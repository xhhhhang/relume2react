import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiCheck } from "react-icons/bi";
type ImageProps = {
  src: string;
  alt?: string;
};
type PricingPlan = {
  icon: ImageProps;
  planName: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  button: ButtonProps;
};
type Props = {
  tagline: string;
  heading: string;
  description: string;
  plan: PricingPlan;
};
export type Pricing2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Pricing2 = (props: Pricing2Props) => {
  const { tagline, heading, description, plan } = {
    ...Pricing2Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container max-w-lg">
<div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
<p className="mb-3 font-semibold md:mb-4">{tagline}</p>
<h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
<p className="md:text-md">{description}</p>
</div>
<div className="container max-w-md">
<PricingPlan plan={plan} />
</div>
</div>
</section>
  );
};
const PricingPlan = ({ plan }: { plan: PricingPlan }) => (
  <div className="h-full border border-border-primary px-6 py-8 md:p-8">
<div className="mb-4 flex flex-col items-end justify-end">
<img src={plan.icon.src} alt={plan.icon.alt} className="size-12" />
</div>
<h3 className="text-md font-bold leading-[1.4] md:text-xl">{plan.planName}</h3>
<h4 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
<span>$</span>
      {plan.monthlyPrice}
      <span className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">/mo</span>
</h4>
<p>
<span>or</span> <span>$</span>
      {plan.yearlyPrice} <span>yearly</span>
</p>
<div className="my-8 h-px w-full shrink-0 bg-border" />
<div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
<p className="mb-2">Includes:</p>
      {plan.features.map((feature, index) => (
        <div key={index} className="flex self-start">
<div className="mr-4 flex-none self-start">
<BiCheck className="size-6" />
</div>
<p>{feature}</p>
</div>
      ))}
    </div>
<div>
<Button
variant={plan.button.variant}
size={plan.button.size}
iconRight={plan.button.iconRight}
iconLeft={plan.button.iconLeft}
className="w-full"
      >
        {plan.button.title}
      </Button>
</div>
</div>
);
export const Pricing2Defaults: Pricing2Props = {
  tagline: "Tagline",
  heading: "Pricing plan",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  plan: {
    icon: {
      src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
      alt: "Relume icon 1",
    },
    planName: "Basic plan",
    monthlyPrice: 19,
    yearlyPrice: 199,
    features: [
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here",
    ],
    button: { title: "Get started" },
  },
};