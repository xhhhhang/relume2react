"use client";
import { useEffect, useState } from "react";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronDown } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};
type SubMenuLink = {
  url: string;
  image: ImageProps;
  title: string;
  description: string;
};
type LinkGroup = {
  title: string;
  subMenuLinks: SubMenuLink[];
};
type DropdownFooter = {
  title: string;
  link: string;
  url: string;
  buttons: ButtonProps[];
};
type MegaMenuProps = {
  linkGroups: LinkGroup[];
  dropdownFooter: DropdownFooter;
};
type NavLink = {
  url: string;
  title: string;
  megaMenu?: MegaMenuProps;
};
type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: ButtonProps[];
};
export type Navbar7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Navbar7 = (props: Navbar7Props) => {
  const { logo, navLinks, buttons } = {
    ...Navbar7Defaults,
    ...props,
  } as Props;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  return (
    <nav className="relative z-[999] flex min-h-16 w-full items-center border-b border-border-primary bg-background-primary px-[5%] md:min-h-18">
<div className="mx-auto flex size-full max-w-full items-center justify-between">
<a href={logo.url}>
<img src={logo.src} alt={logo.alt} />
</a>
<div className="absolute hidden h-screen overflow-auto border-b border-border-primary bg-background-primary px-[5%] pb-24 pt-4 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0">
<div className="flex flex-col items-center lg:flex-row">
            {navLinks.map((navLink, index) => (
              <div key={index}>
                {navLink.megaMenu ? (
                  <SubMenu megaMenu={navLink.megaMenu} title={navLink.title} isMobile={isMobile} />
                ) : (
                  <a
href={navLink.url}
className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
                  >
                    {navLink.title}
                  </a>
                )}
              </div>
            ))}
          </div>
<div className="flex items-center gap-4">
            {buttons.map((button, index) => (
              <Button key={index} variant={button.variant} size={button.size}>
                {button.title}
              </Button>
            ))}
          </div>
</div>
<button
className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.span
className="my-[3px] h-0.5 w-6 bg-black"
animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
            variants={topLineVariants}
          />
<motion.span
className="my-[3px] h-0.5 w-6 bg-black"
animate={isMobileMenuOpen ? "open" : "closed"}
            variants={middleLineVariants}
          />
<motion.span
className="my-[3px] h-0.5 w-6 bg-black"
animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
            variants={bottomLineVariants}
          />
</button>
</div>
<AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
variants={{
open: { height: "100dvh" },
              close: { height: "auto" },
            }}
            animate={isMobileMenuOpen ? "open" : "close"}
            initial="close"
exit="close"
className="absolute left-0 right-0 top-full w-full overflow-hidden lg:hidden"
transition={{ duration: 0.4 }}
          >
<motion.div
variants={{
open: { y: 0 },
                close: { y: "-100%" },
              }}
              animate={isMobileMenuOpen ? "open" : "close"}
              initial="close"
exit="close"
transition={{ duration: 0.4 }}
              className="absolute left-0 right-0 top-0 block h-[100dvh] overflow-auto border-b border-border-primary bg-background-primary px-[5%] pb-8 pt-4"
            >
<div className="flex flex-col">
                {navLinks.map((navLink, index) => (
                  <div key={index}>
                    {navLink.megaMenu ? (
                      <SubMenu
megaMenu={navLink.megaMenu}
title={navLink.title}
isMobile={isMobile}
                      />
                    ) : (
                      <a href={navLink.url} className="block py-3 text-md">
                        {navLink.title}
                      </a>
                    )}
                  </div>
                ))}
                <div className="mt-6 flex flex-col items-stretch gap-4">
                  {buttons.map((button, index) => (
                    <Button key={index} variant={button.variant} size={button.size}>
                      {button.title}
                    </Button>
                  ))}
                </div>
</div>
</motion.div>
</motion.div>
        )}
      </AnimatePresence>
</nav>
  );
};
const SubMenu = ({
  title,
  megaMenu,
  isMobile,
}: {
  title: string;
  megaMenu: MegaMenuProps;
  isMobile: boolean;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div
onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
className="relative flex w-full items-center justify-between whitespace-nowrap py-3 text-md lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{title}</span>
<motion.span
animate={isDropdownOpen ? "rotated" : "initial"}
          variants={{
rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
<RxChevronDown />
</motion.span>
</button>
<AnimatePresence>
        {isDropdownOpen && (
          <motion.nav
variants={{
open: {
                opacity: 1,
                height: "var(--height-open, auto)",
              },
              close: {
                opacity: 0,
                height: "var(--height-close, 0)",
              },
            }}
            animate={isDropdownOpen ? "open" : "close"}
            initial="close"
exit="close"
transition={{ duration: 0.2 }}
            className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-background-primary lg:absolute lg:w-screen lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
          >
<div className="mx-auto flex size-full max-w-full items-center justify-between">
<div className="flex w-full flex-col lg:flex-row">
<div className="grid flex-1 grid-cols-1 content-start items-start gap-x-8 gap-y-6 py-4 sm:py-0 md:grid-cols-2 md:py-8 lg:auto-cols-fr lg:grid-cols-4 lg:content-stretch lg:items-stretch lg:gap-y-0">
                  {megaMenu.linkGroups.map((linkGroup, index) => (
                    <div
key={index}
className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4"
                    >
<h4 className="text-sm font-semibold leading-[1.3]">{linkGroup.title}</h4>
                      {linkGroup.subMenuLinks.map((subMenuLink, index) => (
                        <a
key={index}
href={subMenuLink.url}
className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
<div className="flex size-6 flex-col items-center justify-center">
<img
src={subMenuLink.image.src}
alt={subMenuLink.image.alt}
className="shrink-0"
                            />
</div>
<div className="flex flex-col items-start justify-center">
<h5 className="font-semibold">{subMenuLink.title}</h5>
<p className="hidden text-sm md:block">{subMenuLink.description}</p>
</div>
</a>
                      ))}
                    </div>
                  ))}
                </div>
</div>
</div>
<div className="relative mb-6 flex w-full flex-col items-start justify-between p-6 sm:items-center lg:mb-0 lg:flex-row lg:px-0 lg:py-4">
<div className="absolute -left-[50vw] -right-[50vw] bottom-0 top-0 w-[200vw] bg-background-secondary" />
<div className="relative mb-4 grid auto-cols-fr grid-cols-[max-content] grid-rows-[auto_auto] items-center gap-x-2 gap-y-4 lg:mb-0 lg:flex lg:items-center">
<p>
                  {megaMenu.dropdownFooter.title}
                  <a href={megaMenu.dropdownFooter.url} className="ml-1 underline">
                    {megaMenu.dropdownFooter.link}
                  </a>
</p>
</div>
<div className="relative flex w-full flex-col gap-6 sm:w-auto sm:flex-row">
                {megaMenu.dropdownFooter.buttons.map((button, index) => (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ))}
              </div>
</div>
</motion.nav>
        )}
      </AnimatePresence>
</div>
  );
};
const RelumeLogo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
width="currentWidth"
height="currentHeight"
viewBox="0 0 24 24"
fill="none"
xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
<path
fill-rule="evenodd"
clip-rule="evenodd"
d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
fill="currentColor"
      ></path>
</svg>
  );
};
export const Navbar7Defaults: Navbar7Props = {
  logo: {
    url: "#",
    src: "https://relume-assets.s3.amazonaws.com/logo-image.svg",
    alt: "Logo image",
  },
  navLinks: [
    { title: "Link One", url: "#" },
    { title: "Link Two", url: "#" },
    { title: "Link Three", url: "#" },
    {
      title: "Link Four",
      url: "#",
      megaMenu: {
        linkGroups: [
          {
            title: "Page group one",
            subMenuLinks: [
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 1",
                },
                title: "Page One",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 2",
                },
                title: "Page Two",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 3",
                },
                title: "Page Three",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 4",
                },
                title: "Page Four",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
            ],
          },
          {
            title: "Page group two",
            subMenuLinks: [
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 5",
                },
                title: "Page Five",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 6",
                },
                title: "Page Six",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 7",
                },
                title: "Page Seven",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 8",
                },
                title: "Page Eight",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
            ],
          },
          {
            title: "Page group three",
            subMenuLinks: [
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 9",
                },
                title: "Page Nine",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 10",
                },
                title: "Page Ten",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 11",
                },
                title: "Page Eleven",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 12",
                },
                title: "Page Twelve",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
            ],
          },
          {
            title: "Page group four",
            subMenuLinks: [
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 13",
                },
                title: "Page Thirteen",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 14",
                },
                title: "Page Fourteen",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 15",
                },
                title: "Page Fifteen",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 16",
                },
                title: "Page Sixteen",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
            ],
          },
        ],
        dropdownFooter: {
          title: "Ready to get started?",
          link: "Sign up for free",
          url: "#",
          buttons: [
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconLeft: <RelumeLogo className="size-6" />,
            },
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconLeft: <RelumeLogo className="size-6" />,
            },
          ],
        },
      },
    },
  ],
  buttons: [
    {
      title: "Button",
      variant: "secondary",
      size: "sm",
    },
    {
      title: "Button",
      size: "sm",
    },
  ],
};
const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};
const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};