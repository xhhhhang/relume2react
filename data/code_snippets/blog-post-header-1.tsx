import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BiLinkAlt, BiLogoLinkedinSquare, BiLogoFacebookCircle } from "react-icons/bi";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@relume_io/relume-ui";
type ImageProps = {
  src: string;
  alt?: string;
};
type BreadcrumbProps = {
  url: string;
  title: string;
};
type SocialMediaLinksProps = {
  icon: React.ReactNode;
  url: string;
};
type AuthorDetailsProps = {
  avatar: ImageProps;
  fullName: string;
  date: string;
  readTime: string;
};
type Props = {
  breadcrumbs: BreadcrumbProps[];
  heading: string;
  image: ImageProps;
  author: AuthorDetailsProps;
  socialMediaLinks: SocialMediaLinksProps[];
};
export type BlogPostHeader1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const BlogPostHeader1 = (props: BlogPostHeader1Props) => {
  const { breadcrumbs, heading, author, image, socialMediaLinks } = {
    ...BlogPostHeader1Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container">
<div className="mx-auto mb-12 flex w-full max-w-lg flex-col items-start justify-start md:mb-16 lg:mb-20">
<Breadcrumb className="mb-6 flex w-full items-center">
<BreadcrumbList>
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
<BreadcrumbItem>
<BreadcrumbLink href={item.url}>{item.title}</BreadcrumbLink>
</BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
</Breadcrumb>
<h1 className="mb-8 text-5xl font-bold md:mb-10 md:text-7xl lg:mb-12 lg:text-8xl">
            {heading}
          </h1>
<div className="flex w-full flex-col items-start justify-between sm:flex-row sm:items-end">
<div className="mb-4 flex items-center sm:mb-0">
<div className="mr-4 shrink-0">
<img
src={author.avatar.src}
alt={author.avatar.alt}
className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
</div>
<div>
<h6 className="font-semibold">{author.fullName}</h6>
<div className="mt-1 flex">
<p className="text-sm">{author.date}</p>
<span className="mx-2">•</span>
<p className="text-sm">{author.readTime}</p>
</div>
</div>
</div>
<div className="mt-4 grid grid-flow-col grid-cols-[max-content] items-start gap-2">
              {socialMediaLinks.map((link, index) => (
                <a
key={index}
href={link.url}
className="rounded-[1.25rem] bg-background-secondary p-1"
                >
                  {link.icon}
                </a>
              ))}
            </div>
</div>
</div>
<div className="mx-auto w-full overflow-hidden">
<img src={image.src} className="aspect-[2] size-full object-cover" alt={image.alt} />
</div>
</div>
</section>
  );
};
export const BlogPostHeader1Defaults: BlogPostHeader1Props = {
  breadcrumbs: [
    { url: "#", title: "Blog" },
    { url: "#", title: "Category" },
  ],
  heading: "Blog title heading will go here",
  author: {
    avatar: {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder avatar",
    },
    fullName: "Full name",
    date: "11 Jan 2022",
    readTime: "5 min read",
  },
  socialMediaLinks: [
    { url: "#", icon: <BiLinkAlt className="size-6" /> },
    { url: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
    { url: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
    { url: "#", icon: <BiLogoFacebookCircle className="size-6" /> },
  ],
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
};