type ImageProps = {
  src: string;
  alt?: string;
};
type Props = {
  heading: string;
  logos: ImageProps[];
};
export type Logo1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Logo1 = (props: Logo1Props) => {
  const { heading, logos } = {
    ...Logo1Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-12 md:py-16 lg:py-20">
<div className="container">
<h1 className="mx-auto mb-6 w-full max-w-lg text-center text-base font-bold leading-[1.2] md:mb-8 md:text-md md:leading-[1.2]">
          {heading}
        </h1>
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pb-2 pt-4 md:pt-2">
          {logos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="max-h-12 md:max-h-14" />
          ))}
        </div>
</div>
</section>
  );
};
export const Logo1Defaults: Logo1Props = {
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
    { src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg", alt: "Webflow logo 5" },
    { src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg", alt: "Relume logo 5" },
    { src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg", alt: "Webflow logo 6" },
  ],
};