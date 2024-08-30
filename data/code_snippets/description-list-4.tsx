type ListItem = {
  title: string;
  content: string;
  linkText: string;
};
type Props = {
  sectionTitle: string;
  sectionDescription: string;
  listItems: ListItem[];
};
export type DescriptionList4Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const DescriptionList4 = (props: DescriptionList4Props) => {
  const { sectionTitle, sectionDescription, listItems } = {
    ...DescriptionList4Defaults,
    ...props,
  } as Props;
  return (
    <section className="border border-border-primary p-8">
<div className="pb-5 md:pb-6">
<h1 className="text-lg font-bold leading-[1.4] md:text-2xl">{sectionTitle}</h1>
<p className="mt-2">{sectionDescription}</p>
</div>
<div className="grid grid-cols-1 border-t border-border-primary">
        {listItems.map((item, index) => (
          <div
key={index}
className="grid auto-cols-fr grid-cols-[1fr_min-content] items-end gap-6 border-b border-border-primary py-6 md:items-start"
          >
<div className="grid auto-cols-fr grid-cols-1 items-start gap-y-2 md:grid-cols-[0.5fr_1fr] md:gap-6">
<p className="font-semibold">{item.title}</p>
<p className="w-full max-w-lg">{item.content}</p>
</div>
<a href="#">{item.linkText}</a>
</div>
        ))}
      </div>
</section>
  );
};
export const DescriptionList4Defaults: DescriptionList4Props = {
  sectionTitle: "Account",
  sectionDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  listItems: [
    { title: "Full name", content: "Name Surname", linkText: "Change" },
    { title: "Website", content: "www.relume.io", linkText: "Change" },
    {
      title: "About",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      linkText: "Change",
    },
    { title: "Email address", content: "hello@relume.io", linkText: "Change" },
    { title: "Password", content: "*******", linkText: "Change" },
    { title: "Language", content: "English", linkText: "Change" },
  ],
};