import { Button, Input } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};
type Links = {
  title: string;
  url: string;
};
type ColumnLinks = {
  title: string;
  links: Links[];
};
type Props = {
  logo: ImageProps;
  newsletterHeading: string;
  newsletterDescription: string;
  inputPlaceholder?: string;
  button: ButtonProps;
  termsAndConditions: string;
  columnLinks: ColumnLinks[];
  footerText?: string;
};
export type Footer6Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Footer6 = (props: Footer6Props) => {
  const {
    logo,
    newsletterHeading,
    newsletterDescription,
    inputPlaceholder,
    button,
    termsAndConditions,
    columnLinks,
    footerText,
  } = {
    ...Footer6Defaults,
    ...props,
  } as Props;
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
<div className="container">
<div className="block items-start justify-between lg:flex">
<div className="mb-6 lg:mb-0">
<h1 className="font-semibold md:text-md">{newsletterHeading}</h1>
<p>{newsletterDescription}</p>
</div>
<div className="max-w-md lg:min-w-[25rem]">
<div className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4">
<Input type="email" placeholder={inputPlaceholder} />
<Button {...button}>{button.title}</Button>
</div>
<div dangerouslySetInnerHTML={{ __html: termsAndConditions }} />
</div>
</div>
<div className="py-12 md:py-18 lg:py-20">
<div className="h-px w-full bg-black" />
</div>
<div className="mb-12 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-6">
          {columnLinks.map((column, index) => (
            <div key={index} className="flex flex-col items-start justify-start">
<h2 className="mb-2 font-semibold">{column.title}</h2>
<ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="py-2 text-sm">
<a href={link.url} className="flex items-center gap-3">
                      {link.title}
                    </a>
</li>
                ))}
              </ul>
</div>
          ))}
        </div>
<div className="h-px w-full bg-black" />
<div className="flex flex-col items-start pb-4 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between md:pb-0 md:pt-8 ">
<a href={logo.url} className="mb-6 sm:mb-0">
<img src={logo.src} alt={logo.alt} />
</a>
<p className="text-sm">{footerText}</p>
</div>
</div>
</footer>
  );
};
export const Footer6Defaults: Footer6Props = {
  logo: {
    url: "#",
    src: "https://relume-assets.s3.amazonaws.com/logo-image.svg",
    alt: "Logo image",
  },
  newsletterHeading: "Join our newsletter",
  newsletterDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  inputPlaceholder: "Enter your email",
  button: {
    title: "Subscribe",
    variant: "secondary",
    size: "sm",
  },
  termsAndConditions: `
  <p class='text-xs'>
    By subscribing you agree to with our
    <a href='#' class='underline'>Privacy Policy</a>.
  </p>
  `,
  columnLinks: [
    {
      title: "Column One",
      links: [
        { title: "Link One", url: "#" },
        { title: "Link Two", url: "#" },
        { title: "Link Three", url: "#" },
        { title: "Link Four", url: "#" },
        { title: "Link Five", url: "#" },
      ],
    },
    {
      title: "Column Two",
      links: [
        { title: "Link Six", url: "#" },
        { title: "Link Seven", url: "#" },
        { title: "Link Eight", url: "#" },
        { title: "Link Nine", url: "#" },
        { title: "Link Ten", url: "#" },
      ],
    },
    {
      title: "Column Three",
      links: [
        { title: "Link Eleven", url: "#" },
        { title: "Link Twelve", url: "#" },
        { title: "Link Thirteen", url: "#" },
        { title: "Link Fourteen", url: "#" },
        { title: "Link Fifteen", url: "#" },
      ],
    },
    {
      title: "Column Four",
      links: [
        { title: "Link Sixteen", url: "#" },
        { title: "Link Seventeen", url: "#" },
        { title: "Link Eighteen", url: "#" },
        { title: "Link Nineteen", url: "#" },
        { title: "Link Twenty", url: "#" },
      ],
    },
    {
      title: "Column Five",
      links: [
        { title: "Link Twenty One", url: "#" },
        { title: "Link Twenty Two", url: "#" },
        { title: "Link Twenty Three", url: "#" },
        { title: "Link Twenty Four", url: "#" },
        { title: "Link Twenty Five", url: "#" },
      ],
    },
    {
      title: "Column Six",
      links: [
        { title: "Link Twenty Six", url: "#" },
        { title: "Link Twenty Seven", url: "#" },
        { title: "Link Twenty Eight", url: "#" },
        { title: "Link Twenty Nine", url: "#" },
        { title: "Link Thirty", url: "#" },
      ],
    },
  ],
  footerText: "© 2024 Relume. All rights reserved.",
};