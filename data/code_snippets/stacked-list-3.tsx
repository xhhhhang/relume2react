import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
type ImageProps = {
  src: string;
  alt?: string;
};
type ListProps = {
  url: string;
  icon: ImageProps;
  title: string;
  date: string;
  category: string;
  avatars: ImageProps[];
  button: ButtonProps;
};
type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  options: string[];
  lists: ListProps[];
};
export type StackedList3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const StackedList3 = (props: StackedList3Props) => {
  const { heading, description, buttons, options, lists } = {
    ...StackedList3Defaults,
    ...props,
  } as Props;
  return (
    <section>
<div className="pb-5 md:pb-6">
<div className="grid grid-cols-1 items-end gap-4 md:grid-cols-[1fr_max-content] md:gap-6">
<div className="w-full max-w-lg">
<h2 className="text-xl font-bold md:text-2xl">{heading}</h2>
<p className="mt-2">{description}</p>
</div>
<div className="flex items-center justify-between gap-4">
<div className="flex gap-x-4">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
<DropdownMenu>
<DropdownMenuTrigger>
<BiDotsHorizontalRounded className="size-6" />
</DropdownMenuTrigger>
<DropdownMenuContent>
<DropdownMenuContent>
                  {options.map((option, index) => (
                    <DropdownMenuItem key={index}>{option}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
</DropdownMenuContent>
</DropdownMenu>
</div>
</div>
</div>
<div className="border-t border-border-primary">
        {lists.map((list, index) => (
          <a
key={index}
href={list.url}
className="grid max-w-full grid-cols-1 gap-6 border-b border-border-primary py-4 md:grid-cols-[1fr_max-content]"
          >
<div className="grid grid-cols-[max-content_1fr] items-center gap-3">
<div className="bg-background-secondary p-2">
<img src={list.icon.src} alt={list.icon.alt} className="size-8" />
</div>
<div className="w-full max-w-lg">
<h3 className="font-semibold">{list.title}</h3>
<div className="flex items-center">
<p className="text-sm">{list.date}</p>
<p className="mx-2">•</p>
<p className="text-sm">{list.category}</p>
</div>
</div>
</div>
<div className="flex items-center justify-between gap-4">
<div className="relative flex pl-2">
                {list.avatars.map((avatar, index) => (
                  <div key={index} className="-ml-2">
<img
src={avatar.src}
alt={avatar.alt}
className="size-10 rounded-full border-2 border-border-alternative object-cover"
                    />
</div>
                ))}
              </div>
<Button
variant={list.button.variant}
size={list.button.size}
iconRight={list.button.iconRight}
iconLeft={list.button.iconLeft}
className="border border-border-alternative p-2"
              />
</div>
</a>
        ))}
      </div>
</section>
  );
};
export const StackedList3Defaults: StackedList3Props = {
  heading: "Recent Projects",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
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
  options: ["Option One", "Option Two", "Option Three"],
  lists: [
    {
      url: "#",
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume icon 1",
      },
      title: "Project name",
      date: "11 Jan 2022",
      category: "Category",
      avatars: [
        {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image-small.svg",
          alt: "Relume avatar 1",
        },
        {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image-small.svg",
          alt: "Relume avatar 2",
        },
        {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image-small.svg",
          alt: "Relume avatar 3",
        },
        {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image-small.svg",
          alt: "Relume avatar 4",
        },
      ],
      button: {
        variant: "tertiary",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "#",
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume icon 1",
      },
      title: "Project name",
      date: "11 Jan 2022",
      category: "Category",
      avatars: [
        {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image-small.svg",
          alt: "Relume avatar 1",
        },
        {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image-small.svg",
          alt: "Relume avatar 2",
        },
        {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image-small.svg",
          alt: "Relume avatar 3",
        },
        {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image-small.svg",
          alt: "Relume avatar 4",
        },
      ],
      button: {
        variant: "tertiary",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "#",
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume icon 1",
      },
      title: "Project name",
      date: "11 Jan 2022",
      category: "Category",
      avatars: [
        {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image-small.svg",
          alt: "Relume avatar 1",
        },
        {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image-small.svg",
          alt: "Relume avatar 2",
        },
        {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image-small.svg",
          alt: "Relume avatar 3",
        },
        {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image-small.svg",
          alt: "Relume avatar 4",
        },
      ],
      button: {
        variant: "tertiary",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "#",
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume icon 1",
      },
      title: "Project name",
      date: "11 Jan 2022",
      category: "Category",
      avatars: [
        {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image-small.svg",
          alt: "Relume avatar 1",
        },
        {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image-small.svg",
          alt: "Relume avatar 2",
        },
        {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image-small.svg",
          alt: "Relume avatar 3",
        },
        {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image-small.svg",
          alt: "Relume avatar 4",
        },
      ],
      button: {
        variant: "tertiary",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};