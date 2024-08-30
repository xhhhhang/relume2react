"use client";
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Input,
  SheetClose,
  SheetOverlay,
  SheetPortal,
} from "@relume_io/relume-ui";
import {
  BiArchive,
  BiBarChartAlt2,
  BiCog,
  BiDotsHorizontalRounded,
  BiFile,
  BiHelpCircle,
  BiHome,
  BiLayer,
  BiPieChartAlt2,
  BiSearch,
  BiStar,
} from "react-icons/bi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Sheet,
  SheetContent,
  SheetTrigger,
  useMediaQuery,
} from "@relume_io/relume-ui";
import { MdTrendingUp } from "react-icons/md";
import { RxChevronDown, RxCross2, RxHamburgerMenu } from "react-icons/rx";
export const ApplicationShell2 = () => {
  const isMobile = useMediaQuery("(max-width: 991px)");
  return (
    <section className="flex min-h-screen flex-col lg:flex-row">
<div className="sticky top-0 flex min-h-16 flex-col border-b border-border-primary bg-white px-6 md:min-h-18 md:px-8 lg:h-screen lg:min-h-[auto] lg:w-[19.5rem] lg:min-w-[19.5rem] lg:border-r lg:px-0 lg:py-6">
<div className="flex flex-1 flex-row items-center justify-between lg:flex-col lg:items-stretch lg:justify-normal">
<a href="#" className="self-center lg:mb-6 lg:ml-6 lg:self-start">
<img src="https://relume-assets.s3.amazonaws.com/logo-image.svg" alt="Relume logo" />
</a>
          {isMobile ? (
            <Sheet>
<SheetTrigger>
<RxHamburgerMenu className="size-7" />
</SheetTrigger>
<SheetOverlay className="bg-black/60" />
<SheetPortal>
<SheetContent
side="left"
className="w-[80vw] overflow-hidden md:w-full md:max-w-[19.5rem]"
                >
<SheetClose className="right-7 top-5">
<RxCross2 className="size-6" />
</SheetClose>
<Navigation />
</SheetContent>
</SheetPortal>
</Sheet>
          ) : (
            <Navigation />
          )}
        </div>
</div>
<main className="flex-1 bg-background-secondary">
<div className="border-b-2 border-dashed border-[#d3d3d3] py-6 text-center text-black/50">
<h1>Click and paste Page Header</h1>
</div>
<div className="container px-6 py-8 md:px-8 md:py-10 lg:py-12">
<div className="grid grid-cols-1 gap-12">
<div className="flex h-screen items-center justify-center border-2 border-dashed border-[#d3d3d3] py-6 text-center text-black/50">
<h2>Click and paste Main Content</h2>
</div>
</div>
</div>
</main>
</section>
  );
};
const Navigation = () => {
  return (
    <nav className="absolute left-0 right-auto top-0 float-right h-full w-[80vw] max-w-[none] md:w-full md:max-w-[19.5rem] lg:relative lg:inset-auto lg:w-auto lg:max-w-[auto]">
<div className="absolute flex h-screen w-full flex-col border-r border-border-primary bg-white pb-6 lg:h-full lg:border-none lg:pb-0">
<div className="flex min-h-16 items-center justify-between border-b border-border-alternative px-6 md:min-h-18 lg:hidden">
<a href="#" className="flex">
<img src="https://relume-assets.s3.amazonaws.com/logo-image.svg" alt="Relume logo" />
</a>
</div>
<div className="z-[999] mx-6 mb-4 lg:z-auto lg:mb-6">
<Input placeholder="Search" icon={<BiSearch className="size-6" />} />
        </div>
<div className="flex size-full flex-col overflow-auto px-4">
<a className="flex items-center gap-x-2 p-2 text-center">
<div className="flex w-full items-center gap-3">
<BiHome className="size-6 shrink-0" />
<p>Home</p>
</div>
</a>
<a className="flex items-center gap-x-2 p-2 text-center">
<div className="flex w-full gap-3">
<BiStar className="size-6 shrink-0" />
<p>Saved</p>
</div>
<div className="rounded-[5rem] border border-border-primary px-2">
<p className="text-sm">24</p>
</div>
</a>
<Accordion type="single" collapsible>
<AccordionItem value="item-1" className="border-none">
<AccordionTrigger
className="p-2 font-normal"
icon={
                  <RxChevronDown className="shrink-0 text-text-primary transition-transform duration-300" />
                }
              >
                <span className="flex items-center gap-3">
<BiPieChartAlt2 className="size-6 shrink-0" />
<p>Dashboard</p>
</span>
</AccordionTrigger>
<AccordionContent className="flex items-center gap-x-2 p-2 pl-[2.75rem] text-center">
<a href="#" className="flex w-full items-center gap-3">
<MdTrendingUp className="size-6 shrink-0" />
<p>Trends</p>
</a>
</AccordionContent>
<AccordionContent className="flex items-center gap-x-2 p-2 pl-[2.75rem] text-center">
<a href="#" className="flex w-full items-center gap-3">
<BiBarChartAlt2 className="size-6 shrink-0" />
<p>Analytics</p>
</a>
</AccordionContent>
<AccordionContent className="flex items-center gap-x-2 p-2 pl-[2.75rem] text-center">
<a href="#" className="flex w-full items-center gap-3">
<BiArchive className="size-6 shrink-0" />
<p>Historical</p>
</a>
</AccordionContent>
</AccordionItem>
</Accordion>
<a href="#" className="flex items-center gap-x-2 p-2 text-center">
<span className="flex w-full items-center gap-3">
<BiLayer className="size-6 shrink-0" />
<p>Projects</p>
</span>
</a>
<a href="#" className="flex items-center gap-x-2 p-2 text-center">
<span className="flex w-full items-center gap-3">
<BiFile className="size-6 shrink-0" />
<p>Documents</p>
</span>
</a>
</div>
<div className="flex flex-col gap-4 px-4 lg:gap-6">
<div className="h-px w-full bg-black" />
<div className="flex flex-col">
<a href="#" className="flex items-center gap-x-2 p-2 text-center">
<span className="flex w-full items-center gap-3">
<BiHelpCircle className="size-6 shrink-0" />
<p>Support</p>
</span>
</a>
<a href="#" className="flex items-center gap-x-2 p-2 text-center">
<span className="flex w-full items-center gap-3">
<BiCog className="size-6 shrink-0" />
<p>Settings</p>
</span>
</a>
</div>
<div className="h-px w-full bg-black" />
<div className="flex items-center justify-between">
<div className="grid grid-cols-[max-content_1fr] items-center gap-3">
<div>
<img
src="https://relume-assets.s3.amazonaws.com/avatar-image.svg"
alt="Avatar"
className="size-10 rounded-full object-cover"
                />
</div>
<div>
<p className="text-sm font-medium">Name Surname</p>
<p className="text-sm">hello@relume.io</p>
</div>
</div>
<DropdownMenu>
<DropdownMenuTrigger>
<BiDotsHorizontalRounded className="size-6" />
</DropdownMenuTrigger>
<DropdownMenuContent className="z-[1000]" align="end" sideOffset={0}>
<DropdownMenuLabel>My Profile</DropdownMenuLabel>
<DropdownMenuLabel>Profile Settings</DropdownMenuLabel>
<DropdownMenuSeparator />
<DropdownMenuItem>Log Out</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
</div>
</div>
</div>
</nav>
  );
};
export const ApplicationShell2Defaults = {};