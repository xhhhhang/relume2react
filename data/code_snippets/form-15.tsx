"use client";
import { useState } from "react";
import { Button, Checkbox, Label, RadioGroup, RadioGroupItem, Switch } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
};
export type Form15Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Form15 = (props: Form15Props) => {
  const { heading, description, buttons } = {
    ...Form15Defaults,
    ...props,
  } as Props;
  const [emailNotification, setEmailNotification] = useState(false);
  const [desktopNotification, setDesktopNotification] = useState(false);
  const [mobileNotification, setMobileNotification] = useState(false);
  const [emailMarketing, setEmailMarketing] = useState<boolean | "indeterminate">(false);
  const [emailAnnouncements, setEmailAnnouncements] = useState<boolean | "indeterminate">(false);
  const [emailSupport, setEmailSupport] = useState<boolean | "indeterminate">(false);
  const [frequency, setFrequency] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      emailNotification,
      desktopNotification,
      mobileNotification,
      emailMarketing,
      emailAnnouncements,
      emailSupport,
      frequency,
    });
  };
  return (
    <section className="grid auto-cols-fr grid-cols-1 items-start gap-6 lg:grid-cols-[0.75fr_1fr] lg:gap-12">
<div>
<h1 className="text-xl font-bold md:text-2xl">{heading}</h1>
<p className="mt-2">{description}</p>
</div>
<form onSubmit={handleSubmit} className="grid auto-cols-fr grid-cols-1 gap-6">
<div>
<h2 className="text-md font-bold leading-[1.4] md:text-xl">
            Choose where you get notified
          </h2>
<p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
            eros.
          </p>
</div>
<div className="grid auto-cols-fr grid-cols-1 gap-4">
<div className="flex items-center gap-2">
<Switch
id="email"
checked={emailNotification}
onCheckedChange={(checked: boolean) => setEmailNotification(checked)}
            />
            <Label htmlFor="email">Email notification</Label>
</div>
<div className="flex items-center gap-2">
<Switch
id="desktop"
checked={desktopNotification}
onCheckedChange={(checked: boolean) => setDesktopNotification(checked)}
            />
            <Label htmlFor="desktop">Desktop notification</Label>
</div>
<div className="flex items-center gap-2">
<Switch
id="mobile"
checked={mobileNotification}
onCheckedChange={(checked: boolean) => setMobileNotification(checked)}
            />
            <Label htmlFor="mobile">Mobile push notifications</Label>
</div>
</div>
<div className="mt-3 md:mt-4">
<h2 className="text-md font-bold leading-[1.4] md:text-xl">By Email</h2>
<p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
            eros.
          </p>
</div>
<div className="grid auto-cols-fr grid-cols-1 gap-4">
<div className="flex items-center gap-2">
<Checkbox
id="marketing"
checked={!emailMarketing}
onCheckedChange={(checked: boolean) => setEmailMarketing(checked)}
            />
            <Label htmlFor="marketing">Marketing</Label>
</div>
<div className="flex items-center gap-2">
<Checkbox
id="announcements"
checked={emailAnnouncements}
onCheckedChange={(checked: boolean) => setEmailAnnouncements(checked)}
            />
            <Label htmlFor="announcements">Announcements & updates</Label>
</div>
<div className="flex items-center gap-2">
<Checkbox
id="mobile"
checked={emailSupport}
onCheckedChange={(checked: boolean) => setEmailSupport(checked)}
            />
            <Label htmlFor="mobile">Support</Label>
</div>
</div>
<div className="mt-3 md:mt-4">
<h2 className="text-md font-bold leading-[1.4] md:text-xl">Choose frequency</h2>
<p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
            eros.
          </p>
</div>
<RadioGroup
className="grid auto-cols-fr grid-cols-1 gap-4"
value={frequency}
onValueChange={(value: string) => setFrequency(value)}
        >
          <div className="flex items-center gap-2">
<RadioGroupItem value="daily" id="daily" />
<Label htmlFor="daily">Daily</Label>
</div>
<div className="flex items-center gap-2">
<RadioGroupItem value="weekly" id="weekly" />
<Label htmlFor="weekly">Weekly</Label>
</div>
<div className="flex items-center gap-2">
<RadioGroupItem value="monthly" id="monthly" />
<Label htmlFor="monthly">Monthly</Label>
</div>
</RadioGroup>
<div className="mt-5 flex items-center justify-end gap-4 md:mt-6">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
</form>
</section>
  );
};
export const Form15Defaults: Form15Props = {
  heading: "Notifications",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  buttons: [
    { title: "Cancel", variant: "secondary", size: "sm" },
    { title: "Save", size: "sm" },
  ],
};