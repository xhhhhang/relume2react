import { BiSolidStar } from "react-icons/bi";
type ImageProps = {
  src: string;
  alt?: string;
};
type Testimonial = {
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
  numberOfStars: number;
};
type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};
export type Testimonial21Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Testimonial21 = (props: Testimonial21Props) => {
  const { heading, description, testimonials } = {
    ...Testimonial21Defaults,
    ...props,
  } as Props;
  return (
    <section className="overflow-hidden py-16 md:py-24 lg:py-28">
<div className="container mb-12 max-w-lg px-[5%] text-center md:mb-18 lg:mb-20">
<h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
<p className="md:text-md">{description}</p>
</div>
<div className="flex animate-loop-testimonials items-stretch">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="flex">
            {testimonials.map((testimonial, index) => (
              <div
key={index}
className="mr-8 flex w-[25rem] min-w-[25rem] flex-col items-start justify-between border border-border-primary p-6 md:p-8"
              >
<div className="mb-6 flex">
                  {Array(testimonial.numberOfStars)
                    .fill(null)
                    .map((_, starIndex) => (
                      <BiSolidStar key={starIndex} className="mr-1 size-6" />
                    ))}
                </div>
<blockquote className="mb-5 md:mb-6 md:text-md">{testimonial.quote}</blockquote>
<div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
<img
src={testimonial.avatar.src}
alt={testimonial.avatar.alt}
className="mb-4 mr-0 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
<div>
<p className="font-semibold">{testimonial.name}</p>
<p>
                      {testimonial.position}, {testimonial.companyName}
                    </p>
</div>
</div>
</div>
            ))}
          </div>
        ))}
      </div>
</section>
  );
};
export const Testimonial21Defaults: Testimonial21Props = {
  heading: "Customer testimonials",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  testimonials: [
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Testimonial avatar 1",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Testimonial avatar 2",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Testimonial avatar 3",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Testimonial avatar 4",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Testimonial avatar 5",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
  ],
};