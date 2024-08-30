type ImageProps = {
  src: string;
  alt?: string;
};
type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};
export type Layout3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Layout3 = (props: Layout3Props) => {
  const { heading, description, image } = {
    ...Layout3Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container">
<div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
<div>
<h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">{heading}</h2>
<p className="md:text-md">{description}</p>
</div>
<div>
<img src={image.src} className="w-full object-cover" alt={image.alt} />
</div>
</div>
</div>
</section>
  );
};
export const Layout3Defaults: Layout3Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
};