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
type ListProps = {
  url: string;
  title: string;
  date: string;
  badge: string;
  button: ButtonProps;
};
type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  options: string[];
  lists: ListProps[];
};
export type StackedList2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const StackedList2 = (props: StackedList2Props) => {
  const { heading, description, buttons, options, lists } = {
    ...StackedList2Defaults,
    ...props,
  } as Props;
  return (
    <section>
<div className="pb-5 md:pb-6">
<div className="grid grid-cols-1 items-end gap-4 md:grid-cols-[1fr_max-content] md:gap-6">
<div className="w-full max-w-lg">
<h2 className="text-2xl font-bold">{heading}</h2>
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
                {options.map((option, index) => (
                  <DropdownMenuItem key={index}>{option}</DropdownMenuItem>
                ))}
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
<div className="w-full max-w-lg">
<h3 className="font-semibold">{list.title}</h3>
<p className="text-sm">{list.date}</p>
</div>
<div className="flex items-center justify-between gap-4">
<h4 className="flex items-center justify-center bg-background-secondary px-3 py-0.5 text-sm font-medium">
                {list.badge}
              </h4>
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
export const StackedList2Defaults: StackedList2Props = {
  heading: "Recent Tasks",
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
      title: "Task name",
      date: "Created on June 20, 2023",
      badge: "Complete",
      button: {
        variant: "tertiary",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "#",
      title: "Task name",
      date: "Created on June 20, 2023",
      badge: "Complete",
      button: {
        variant: "tertiary",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "#",
      title: "Task name",
      date: "Created on June 20, 2023",
      badge: "Complete",
      button: {
        variant: "tertiary",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "#",
      title: "Task name",
      date: "Created on June 20, 2023",
      badge: "Complete",
      button: {
        variant: "tertiary",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};