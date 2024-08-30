type ImageProps = {
  src: string;
  alt?: string;
};
type FeaturesProps = {
  icon: ImageProps;
  description: string;
};
type Props = {
  heading: string;
  description: string;
  features: FeaturesProps[];
};
export type Layout66Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Layout66 = (props: Layout66Props) => {
  const { heading, description, features } = {
    ...Layout66Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
<h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">{heading}</h3>
<div>
<p className="mb-5 md:mb-6 md:text-md">{description}</p>
<div className="grid grid-cols-1 gap-4 py-2">
            {features.map((feature, index) => (
              <div key={index} className="flex self-start">
<div className="mr-4 flex-none self-start">
<img
className="inline-block size-6"
src={feature.icon.src}
alt={feature.icon.alt}
                  />
</div>
<p>{feature.description}</p>
</div>
            ))}
          </div>
</div>
</div>
</section>
  );
};
export const Layout66Defaults: Layout66Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  features: [
    {
      icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 1" },
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 2" },
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 3" },
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};