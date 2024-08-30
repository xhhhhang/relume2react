type ImageProps = {
  src: string;
  alt?: string;
};
type MetaDataSection = {
  url?: string;
  title: string;
  description: string;
};
type Tag = {
  url: string;
  label: string;
};
type Props = {
  heading: string;
  description: string;
  tags: Tag[];
  metaDataSections: MetaDataSection[];
  image: ImageProps;
};
export type PortfolioHeader6Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const PortfolioHeader6 = (props: PortfolioHeader6Props) => {
  const { heading, description, tags, metaDataSections, image } = {
    ...PortfolioHeader6Defaults,
    ...props,
  } as Props;
  return (
    <section className="flex h-svh min-h-svh flex-col">
<div className="relative flex-1">
<img src={image.src} className="absolute inset-0 size-full object-cover" alt={image.alt} />
</div>
<div className="px-[5%] py-12 md:py-16 lg:py-20">
<div className="container grid grid-cols-1 items-start gap-12 md:grid-cols-[1.5fr_1fr] lg:gap-x-20 lg:gap-y-16">
<div>
<h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
<p className="md:text-md">{description}</p>
<div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <a
key={index}
href={tag.url}
className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >
                  {tag.label}
                </a>
              ))}
            </div>
</div>
<div className="grid auto-cols-fr grid-cols-2 gap-8">
            {metaDataSections.map((metaDataSection, index) => (
              <div key={index}>
<h2 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                  {metaDataSection.title}
                </h2>
                {metaDataSection.url ? (
                  <a href={metaDataSection.url} className="underline">
                    {metaDataSection.description}
                  </a>
                ) : (
                  <p>{metaDataSection.description}</p>
                )}
              </div>
            ))}
          </div>
</div>
</div>
</section>
  );
};
export const PortfolioHeader6Defaults: PortfolioHeader6Props = {
  heading: "Project name here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
  tags: [
    {
      url: "#",
      label: "Tag one",
    },
    {
      url: "#",
      label: "Tag two",
    },
    {
      url: "#",
      label: "Tag three",
    },
  ],
  metaDataSections: [
    {
      title: "Client",
      description: "Full name",
    },
    {
      title: "Date",
      description: "March 2023",
    },
    {
      title: "Role",
      description: "Role name",
    },
    {
      url: "#",
      title: "Website",
      description: "www.relume.io",
    },
  ],
};