import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  ButtonProps,
} from "@relume_io/relume-ui";
type TableData = {
  name: string;
  company: string;
  number: number;
  team: string;
  date: string;
  link: string;
};
type Props = {
  headerTitle: string;
  headerDescription: string;
  buttons: ButtonProps[];
  tableHeaders: string[];
  tableRows: TableData[];
  paginationItems: number[];
};
export type Table1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Table1 = (props: Table1Props) => {
  const { headerTitle, headerDescription, buttons, tableHeaders, tableRows, paginationItems } = {
    ...Table1Defaults,
    ...props,
  } as Props;
  const tableHeaderClasses = [
    "w-[245px] pr-4 xxl:w-[350px]",
    "w-[245px] pr-4 xxl:w-[250px]",
    "w-[128px] pr-4",
    "w-[245px] pr-4 xxl:w-[250px]",
    "w-[192px] pr-4",
    "w-[96px] pr-4 text-center",
  ];
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
<div className="container relative pb-20">
<div className="flex flex-col items-start justify-between gap-4 border border-b-0 border-border-primary p-6 sm:flex-row sm:items-center">
<div>
<h1 className="mb-1 text-md font-semibold md:text-lg">{headerTitle}</h1>
<p>{headerDescription}</p>
</div>
<div className="flex gap-4">
            {buttons.map((buttonProps, index) => (
              <Button key={index} {...buttonProps} />
            ))}
          </div>
</div>
<Table>
<TableHeader>
<TableRow>
              {tableHeaders.map((header, index) => (
                <TableHead key={index} className={tableHeaderClasses[index]}>
                  {header}
                </TableHead>
              ))}
            </TableRow>
</TableHeader>
<TableBody>
            {tableRows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
<TableCell className="font-medium">{row.name}</TableCell>
<TableCell>{row.company}</TableCell>
<TableCell>{row.number}</TableCell>
<TableCell>{row.team}</TableCell>
<TableCell>{row.date}</TableCell>
<TableCell className="py-6 text-center font-semibold">
<a href={row.link}>View</a>
</TableCell>
</TableRow>
            ))}
          </TableBody>
</Table>
<Pagination className="mt-8">
<PaginationContent>
<PaginationItem>
<PaginationPrevious href="#" size="sm" variant="secondary" />
</PaginationItem>
<PaginationItem className="hidden md:block">
              {paginationItems.map((item, index) => (
                <PaginationLink key={index} href="#" size="sm" variant="link" className="px-4 py-2">
                  {item}
                </PaginationLink>
              ))}
            </PaginationItem>
<PaginationItem>
<PaginationNext href="#" size="sm" variant="secondary" />
</PaginationItem>
</PaginationContent>
</Pagination>
</div>
</section>
  );
};
export const Table1Defaults: Table1Props = {
  headerTitle: "Table Header",
  headerDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  buttons: [
    { children: "Button", variant: "secondary", size: "sm" },
    { children: "Button", size: "sm" },
  ],
  tableHeaders: ["Name", "Company", "Number", "Team", "Date", ""],
  tableRows: [
    {
      name: "Full name",
      company: "Company name",
      number: 14,
      team: "Team name",
      date: "Jan 11, 2050",
      link: "#",
    },
    {
      name: "Full name",
      company: "Company name",
      number: 14,
      team: "Team name",
      date: "Jan 11, 2050",
      link: "#",
    },
    {
      name: "Full name",
      company: "Company name",
      number: 14,
      team: "Team name",
      date: "Jan 11, 2050",
      link: "#",
    },
    {
      name: "Full name",
      company: "Company name",
      number: 14,
      team: "Team name",
      date: "Jan 11, 2050",
      link: "#",
    },
    {
      name: "Full name",
      company: "Company name",
      number: 14,
      team: "Team name",
      date: "Jan 11, 2050",
      link: "#",
    },
    {
      name: "Full name",
      company: "Company name",
      number: 14,
      team: "Team name",
      date: "Jan 11, 2050",
      link: "#",
    },
  ],
  paginationItems: [1, 2, 3, 4, 5],
};