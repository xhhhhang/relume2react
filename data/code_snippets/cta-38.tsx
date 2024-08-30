"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
type ImageProps = {
  src: string;
  alt?: string;
};
type HoverLinkProps = {
  url: string;
  listNumber: string;
  heading: string;
  image: ImageProps;
};
type Props = {
  tagline: string;
  hoverLinks: HoverLinkProps[];
};
export type Cta38Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
const getDirection = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>, obj: HTMLElement) => {
  const { width: w, height: h, left, top } = obj.getBoundingClientRect();
  const centerX = left + w / 2;
  const centerY = top + h / 2;
  const xOffset = ev.clientX - centerX;
  const yOffset = ev.clientY - centerY;
  const angleDegrees = Math.atan2(yOffset, xOffset) * (180 / Math.PI);
  const adjustedAngle = angleDegrees < 0 ? angleDegrees + 360 : angleDegrees;
  if (adjustedAngle >= 315 || adjustedAngle < 45) {
    return "right";
  } else if (adjustedAngle >= 45 && adjustedAngle < 135) {
    return "bottom";
  } else if (adjustedAngle >= 135 && adjustedAngle < 225) {
    return "left";
  } else {
    return "top";
  }
};
export const Cta38 = (props: Cta38Props) => {
  const { tagline, hoverLinks } = {
    ...Cta38Defaults,
    ...props,
  } as Props;
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const [direction, setDirection] = useState<"top" | "bottom" | "left" | "right" | string>(
    "initial",
  );
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    setDirection(getDirection(event, ref.current));
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const section = sectionRef.current;
    if (!section) return;
    const sectionRect = section.getBoundingClientRect();
    const leftBoundary = sectionRect.left + sectionRect.width / 2 - 100;
    const rightBoundary = sectionRect.right / 2 + 100;
    const clampedX = Math.max(leftBoundary, Math.min(rightBoundary, e.clientX));
    const smoothFactor = 0.1;
    setCursorPosition((prev) => ({
      x: prev.x + (clampedX - prev.x) * smoothFactor,
      y: prev.y + (e.clientY - prev.y) * smoothFactor,
    }));
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const imageVariants = {
    initial: {
      x: 0,
      y: 0,
    },
    top: {
      y: 25,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    bottom: {
      y: -25,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    left: {
      x: 25,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    right: {
      x: -25,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };
  const translateTopInverse = direction === "top" ? -25 : 0;
  const translateBottomInverse = direction === "bottom" ? 25 : 0;
  const translateLeftInverse = direction === "left" ? -25 : 0;
  const translateRightInverse = direction === "right" ? 25 : 0;
  return (
    <section
ref={sectionRef}
className="px-[5%] py-16 md:py-24 lg:py-28"
onMouseMove={handleMouseMove}
    >
<div className="container">
<p className="mb-6 font-semibold md:mb-8">{tagline}</p>
<motion.div
initial="initial"
whileHover={direction}
ref={ref}
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
        >
          {hoverLinks.map((link, index) => (
            <a
key={index}
href={link.url}
onMouseEnter={() => setHoveredIndex(index)}
              className={clsx(
                "relative flex items-center justify-start border-b border-border-primary py-5 transition-colors duration-300 md:py-6",
                {
                  "lg:text-black/20": hoveredIndex !== index && hoveredIndex !== null,
                  "lg:text-black": hoveredIndex === index || hoveredIndex === null,
                },
              )}
            >
              <p className="mr-6 whitespace-nowrap text-xl font-bold md:mr-8 md:text-2xl">
                {link.listNumber}
              </p>
<h3 className="text-5xl font-bold md:text-9xl lg:text-10xl">{link.heading}</h3>
<motion.div
className={`pointer-events-none fixed inset-0 z-10 ml-[300px] hidden size-[600px] lg:block
                ${hoveredIndex === index ? "opacity-100" : "opacity-0"}
              `}
                style={{
translateX: cursorPosition.x - 300 + translateLeftInverse + translateRightInverse,
                  translateY: cursorPosition.y - 300 + translateTopInverse + translateBottomInverse,
                }}
              >
<motion.img
className="size-full max-w-md"
variants={imageVariants}
src={link.image.src}
alt={link.image.alt}
                />
</motion.div>
</a>
          ))}
        </motion.div>
</div>
</section>
  );
};
export const Cta38Defaults: Cta38Props = {
  tagline: "Tagline",
  hoverLinks: [
    {
      url: "#",
      listNumber: "01",
      heading: "Hover over link one",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-1.svg",
        alt: "Placeholder image 1",
      },
    },
    {
      url: "#",
      listNumber: "02",
      heading: "Hover over link two",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-2.svg",
        alt: "Placeholder image 2",
      },
    },
    {
      url: "#",
      listNumber: "03",
      heading: "Hover over link three",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-3.svg",
        alt: "Placeholder image 3",
      },
    },
    {
      url: "#",
      listNumber: "04",
      heading: "Hover over link four",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-4.svg",
        alt: "Placeholder image 4",
      },
    },
  ],
};