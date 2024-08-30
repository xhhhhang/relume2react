import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
type ImageProps = {
  src: string;
  alt?: string;
};
type CardBaseProps = {
  tagline: string;
  image: ImageProps;
  heading: string;
  description: string;
};
type CardsSmallProps = CardBaseProps & {
  button: ButtonProps;
};
type CardsBigProps = CardBaseProps & {
  buttons: ButtonProps[];
};
type Props = {
  tagline: string;
  heading: string;
  description: string;
  cardsSmall: CardsSmallProps[];
  cardsBig: CardsBigProps[];
};
export type Layout365Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Layout365 = (props: Layout365Props) => {
  const { tagline, heading, description, cardsSmall, cardsBig } = {
    ...Layout365Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container">
<div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
<p className="mb-3 font-semibold md:mb-4">{tagline}</p>
<h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
<p className="md:text-md">{description}</p>
</div>
<div className="grid grid-cols-1 gap-6 md:gap-8 ">
<div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
            {cardsSmall.map((card, index) => (
              <div
key={index}
className="flex flex-col items-stretch border border-border-primary md:grid md:grid-cols-2"
              >
<div className="block flex-col justify-center p-6 md:flex">
<div>
<p className="mb-2 font-semibold">{card.tagline}</p>
<h3 className="mb-2 text-xl font-bold md:text-2xl">{card.heading}</h3>
<p>{card.description}</p>
</div>
<div className="mt-5 flex items-center gap-4 md:mt-6">
<Button
variant={card.button.variant}
size={card.button.size}
iconRight={card.button.iconRight}
iconLeft={card.button.iconLeft}
                    >
                      {card.button.title}
                    </Button>
</div>
</div>
<div className="flex items-center justify-center">
<img src={card.image.src} alt={card.image.alt} className="w-full object-cover" />
</div>
</div>
            ))}
            {cardsBig.map((card, index) => (
              <div
key={index}
className="flex flex-col items-stretch border border-border-primary lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3"
              >
<div className="block flex-1 flex-col items-stretch justify-center p-6 md:flex md:p-8 lg:p-12">
<div>
<p className="mb-2 font-semibold">{card.tagline}</p>
<h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                      {card.heading}
                    </h3>
<p>{card.description}</p>
</div>
<div className="mt-6 flex items-center gap-4 md:mt-8">
                    {card.buttons.map((button, index) => (
                      <Button key={index} {...button}>
                        {button.title}
                      </Button>
                    ))}
                  </div>
</div>
<div>
<img src={card.image.src} alt={card.image.alt} className="w-full object-cover" />
</div>
</div>
            ))}
          </div>
</div>
</div>
</section>
  );
};
export const Layout365Defaults: Layout365Props = {
  tagline: "Tagline",
  heading: "Heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  cardsSmall: [
    {
      tagline: "Tagline",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-portrait.svg",
        alt: "Placeholder image 1",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      tagline: "Tagline",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-portrait.svg",
        alt: "Placeholder image 2",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
  cardsBig: [
    {
      tagline: "Tagline",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
        alt: "Placeholder image 3",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
  ],
};