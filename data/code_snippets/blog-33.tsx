import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
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
};
type Props = {
  tagline: string;
  heading: string;
  description: string;
  button: ButtonProps;
  blogPosts: BlogPost[];
};
export type Blog33Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Blog33 = (props: Blog33Props) => {
  const { tagline, heading, description, button, blogPosts } = {
    ...Blog33Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container">
<div className="container mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
<p className="mb-3 font-semibold md:mb-4">{tagline}</p>
<h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
<p className="md:text-md">{description}</p>
</div>
<div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
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
<div className="flex items-center justify-center">
<Button {...button} className="mt-10 md:mt-14 lg:mt-16">
            {button.title}
          </Button>
</div>
</div>
</section>
  );
};
export const Blog33Defaults: Blog33Props = {
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
    },
  ],
};