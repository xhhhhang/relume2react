import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
type ImageProps = {
  src: string;
  alt?: string;
};
type BlogPost = {
  url: string;
  image: ImageProps;
  category: string;
  readTime: string;
  title: string;
  description: string;
  button: ButtonProps;
};
type Props = {
  tagline: string;
  heading: string;
  description: string;
  blogPosts: BlogPost[];
  button: ButtonProps;
};
export type Blog52Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Blog52 = (props: Blog52Props) => {
  const { tagline, heading, description, button, blogPosts } = {
    ...Blog52Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container">
<div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
<p className="mb-3 font-semibold md:mb-4">{tagline}</p>
<h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
<p className="md:text-md">{description}</p>
</div>
<div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2 lg:gap-x-12">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex size-full flex-col items-center justify-start">
<a href={post.url} className="mb-6 w-full">
<img
src={post.image.src}
alt={post.image.alt}
className="aspect-video size-full object-cover"
                />
</a>
<div className="mb-4 flex w-full items-center justify-start">
<p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  {post.category}
                </p>
<p className="inline text-sm font-semibold">{post.readTime}</p>
</div>
<div className="flex w-full flex-col items-start justify-start">
<a className="mb-2" href={post.url}>
<h2 className="text-xl font-bold md:text-2xl">{post.title}</h2>
</a>
<p>{post.description}</p>
<Button
variant={post.button.variant}
size={post.button.size}
iconRight={post.button.iconRight}
iconLeft={post.button.iconLeft}
className="mt-6 flex items-center justify-center gap-x-2"
                >
                  {post.button.title}
                </Button>
</div>
</div>
          ))}
        </div>
<div className="flex items-center justify-end">
<Button {...button} className="mt-10 md:mt-14 lg:mt-16">
            {button.title}
          </Button>
</div>
</div>
</section>
  );
};
export const Blog52Defaults: Blog52Props = {
  tagline: "Blog",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  button: { title: "View all", variant: "secondary" },
  blogPosts: [
    {
      url: "#",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
        alt: "Placeholder image 1",
      },
      category: "Category",
      readTime: "5 min read",
      title: "Blog title heading will go here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      button: { title: "Read more", variant: "link", size: "link", iconRight: <RxChevronRight /> },
    },
    {
      url: "#",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
        alt: "Placeholder image 1",
      },
      category: "Category",
      readTime: "5 min read",
      title: "Blog title heading will go here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      button: { title: "Read more", variant: "link", size: "link", iconRight: <RxChevronRight /> },
    },
  ],
};