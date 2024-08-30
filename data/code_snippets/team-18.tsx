import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
type ImageProps = {
  src: string;
  alt?: string;
};
type SocialLink = {
  href: string;
  icon: React.ReactNode;
};
type TeamMember = {
  image: ImageProps;
  name: string;
  jobTitle: string;
  description: string;
  socialLinks: SocialLink[];
};
type Props = {
  tagline: string;
  heading: string;
  description: string;
  button: ButtonProps;
  teamMembers: TeamMember[];
};
export type Team18Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Team18 = (props: Team18Props) => {
  const { tagline, heading, description, button, teamMembers } = {
    ...Team18Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container grid grid-cols-1 items-start md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
<div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
<p className="mb-3 font-semibold md:mb-4">{tagline}</p>
<h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
<p className="md:text-md">{description}</p>
<div className="mt-6 flex gap-x-4 md:mt-8">
<Button {...button}>{button.title}</Button>
</div>
</div>
<div className="grid grid-cols-1 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
</div>
</section>
  );
};
const TeamMember = ({ member }: { member: TeamMember }) => {
  return (
    <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
<div className="w-full overflow-hidden">
<img
src={member.image.src}
alt={member.image.alt}
className="aspect-square size-full object-cover"
        />
</div>
<div className="flex flex-col items-stretch justify-center">
<div className="mb-3 md:mb-4">
<h5 className="text-md font-semibold md:text-lg">{member.name}</h5>
<h6 className="md:text-md">{member.jobTitle}</h6>
</div>
<p>{member.description}</p>
<div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-[0.875rem] self-start">
          {member.socialLinks.map((link, index) => (
            <a key={index} href={link.href}>
              {link.icon}
            </a>
          ))}
        </div>
</div>
</div>
  );
};
export const Team18Defaults: Team18Props = {
  tagline: "Tagline",
  heading: "Our team",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  button: { title: "Open positions", variant: "secondary" },
  teamMembers: [
    {
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 1",
      },
      name: "Full name",
      jobTitle: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
        { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
        { href: "#", icon: <BiLogoDribbble className="size-6" /> },
      ],
    },
    {
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 2",
      },
      name: "Full name",
      jobTitle: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
        { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
        { href: "#", icon: <BiLogoDribbble className="size-6" /> },
      ],
    },
    {
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 3",
      },
      name: "Full name",
      jobTitle: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      socialLinks: [
        { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
        { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
        { href: "#", icon: <BiLogoDribbble className="size-6" /> },
      ],
    },
  ],
};