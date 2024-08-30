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
  avatar: ImageProps;
  fullName: string;
  date: string;
  button: ButtonProps;
};
type Props = {
  tagline: string;
  heading: string;
  description: string;
  button: ButtonProps;
  blogPosts: BlogPost[];
};
export type Blog41Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Blog41 = (props: Blog41Props) => {
  const { tagline, heading, description, button, blogPosts } = {
    ...Blog41Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container">
<div className="mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
<div className="md:mr-12 lg:mr-0">
<div className="w-full max-w-lg">
<p className="mb-3 font-semibold md:mb-4">{tagline}</p>
<h2 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">{heading}</h2>
<p className="md:text-md">{description}</p>
</div>
</div>
<div className="hidden md:flex">
<Button {...button}>{button.title}</Button>
</div>
</div>
<div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index}>
<a href={post.url} className="mb-6 inline-block w-full max-w-full">
<div className="w-full overflow-hidden">
<img
src={post.image.src}
alt={post.image.alt}
className="aspect-[3/2] size-full object-cover"
                  />
</div>
</a>
<a
href={post.url}
className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
              >
                {post.category}
              </a>
<a href={post.url} className="mb-2 block max-w-full">
<h5 className="text-xl font-bold md:text-2xl">{post.title}</h5>
</a>
<p>{post.description}</p>
<div className="mt-6 flex items-center">
<div className="mr-4 shrink-0">
<img
src={post.avatar.src}
alt={post.avatar.alt}
className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
</div>
<div>
<h6 className="text-sm font-semibold">{post.fullName}</h6>
<div className="flex items-center">
<p className="text-sm">{post.date}</p>
<span className="mx-2">•</span>
<p className="text-sm">{post.readTime}</p>
</div>
</div>
</div>
</div>
          ))}
        </div>
<Button {...button} className="mt-10 md:hidden">
          {button.title}
        </Button>
</div>
</section>
  );
};
export const Blog41Defaults: Blog41Props = {
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
      title: "Blog title heading will go here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      avatar: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder avatar 3",
      },
      fullName: "Full name",
      date: "11 Jan 2022",
      readTime: "5 min read",
      button: {
        title: "Read more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "#",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
        alt: "Placeholder image 2",
      },
      category: "Category",
      title: "Blog title heading will go here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      avatar: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder avatar 3",
      },
      fullName: "Full name",
      date: "11 Jan 2022",
      readTime: "5 min read",
      button: {
        title: "Read more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "#",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
        alt: "Placeholder image 3",
      },
      category: "Category",
      title: "Blog title heading will go here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      avatar: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder avatar 3",
      },
      fullName: "Full name",
      date: "11 Jan 2022",
      readTime: "5 min read",
      button: {
        title: "Read more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};