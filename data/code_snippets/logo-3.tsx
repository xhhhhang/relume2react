type ImageProps = {
  src: string;
  alt?: string;
};
type Props = {
  heading: string;
  logos: ImageProps[];
};
export type Logo3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Logo3 = (props: Logo3Props) => {
  const { heading, logos } = {
    ...Logo3Defaults,
    ...props,
  } as Props;
  return (
    <section className="overflow-hidden py-12 md:py-16 lg:py-20">
<div className="container mx-auto mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
<h1 className="text-center text-base font-bold leading-[1.2] md:text-md md:leading-[1.2]">
          {heading}
        </h1>
</div>
<div className="flex items-center pt-7 md:pt-0">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="flex shrink-0 animate-loop-horizontally items-center">
              {logos.map((logo, index) => (
                <img
key={index}
className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14"
src={logo.src}
alt={logo.alt}
                />
              ))}
            </div>
          ))}
      </div>
</section>
  );
};
export const Logo3Defaults: Logo3Props = {
  heading: "Used by the world's most average companies",
  logos: [
    { src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg", alt: "Webflow logo 1" },
    { src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg", alt: "Relume logo 1" },
    { src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg", alt: "Webflow logo 2" },
    { src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg", alt: "Relume logo 2" },
    { src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg", alt: "Webflow logo 3" },
    { src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg", alt: "Relume logo 3" },
    { src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg", alt: "Webflow logo 4" },
    { src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg", alt: "Relume logo 4" },
  ],
};