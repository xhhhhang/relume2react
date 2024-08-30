type ImageProps = {
  src: string;
  alt?: string;
};
type Props = {
  heading: string;
  image: ImageProps;
  children: React.ReactNode;
};
export type Content2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Content2 = (props: Content2Props) => {
  const { heading, children, image } = {
    ...Content2Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container">
<div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
<div>
<img src={image.src} className="w-full object-cover" alt={image.alt} />
</div>
<div>
<h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
<div className="prose">{children}</div>
</div>
</div>
</div>
</section>
  );
};
export const Content2Defaults: Content2Props = {
  heading: "Short heading goes here",
  children: (
    <div>
<p>
        Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est
        ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique
        consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
      </p>
<p>
        Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In
        tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis
        lobortis at sit dictum eget nibh tortor commodo cursus.
      </p>
<p>
        Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna
        nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget
        consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla
        adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.
      </p>
</div>
  ),
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
};