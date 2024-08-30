"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Input,
  Label,
  Button,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiEnvelope } from "react-icons/bi";
type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
};
export type Form5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Form5 = (props: Form5Props) => {
  const { heading, description, buttons } = {
    ...Form5Defaults,
    ...props,
  } as Props;
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [countryInput, setCountryInput] = useState("");
  const [streetAddressInput, setStreetAddressInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [stateInput, setStateInput] = useState("");
  const [zipInput, setZipInput] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      firstNameInput,
      lastNameInput,
      emailInput,
      countryInput,
      streetAddressInput,
      cityInput,
      stateInput,
      zipInput,
    });
  };
  const selectItems = [
    { value: "first-choice", label: "First Choice" },
    { value: "second-choice", label: "Second Choice" },
    { value: "third-choice", label: "Third Choice" },
  ];
  return (
    <section>
<div className="pb-5 md:pb-6">
<h1 className="text-xl font-bold md:text-2xl">{heading}</h1>
<p className="mt-2">{description}</p>
</div>
<form onSubmit={handleSubmit} className="grid auto-cols-fr grid-cols-1 gap-6">
<div className="grid w-full max-w-md grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
<div className="grid w-full items-center">
<Label htmlFor="firstName" className="mb-2">
              First name
            </Label>
<Input
type="text"
id="firstName"
value={firstNameInput}
onChange={(e) => setFirstNameInput(e.target.value)}
            />
          </div>
<div className="grid w-full items-center">
<Label htmlFor="lastName" className="mb-2">
              Last name
            </Label>
<Input
type="text"
id="lastName"
value={lastNameInput}
onChange={(e) => setLastNameInput(e.target.value)}
            />
          </div>
</div>
<div className="grid w-full max-w-md items-center">
<Label htmlFor="email" className="mb-2">
            Email address
          </Label>
<Input
type="email"
id="email"
value={emailInput}
icon={<BiEnvelope className="size-6" />}
            placeholder="hello@relume.io"
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
<div className="grid w-full max-w-md items-center">
<Label className="mb-2">Country</Label>
<Select onValueChange={setCountryInput}>
<SelectTrigger>
<SelectValue placeholder="Select one..." />
</SelectTrigger>
<SelectContent>
              {selectItems.map((item, index) => (
                <SelectItem key={index} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
</Select>
</div>
<div className="grid w-full max-w-md items-center">
<Label htmlFor="street" className="mb-2">
            Street address
          </Label>
<Input
type="text"
id="street"
value={streetAddressInput}
onChange={(e) => setStreetAddressInput(e.target.value)}
          />
        </div>
<div className="grid w-full max-w-md grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
<div className="grid w-full items-center">
<Label htmlFor="city" className="mb-2">
              City
            </Label>
<Input
type="text"
id="city"
value={cityInput}
onChange={(e) => setCityInput(e.target.value)}
            />
          </div>
<div className="grid w-full items-center">
<Label htmlFor="state" className="mb-2">
              State / Province
            </Label>
<Input
type="text"
id="state"
value={stateInput}
onChange={(e) => setStateInput(e.target.value)}
            />
          </div>
<div className="grid w-full items-center">
<Label htmlFor="zip" className="mb-2">
              ZIP / Postal code
            </Label>
<Input
type="text"
id="zip"
value={zipInput}
onChange={(e) => setZipInput(e.target.value)}
            />
          </div>
</div>
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
export const Form5Defaults: Form5Props = {
  heading: "Personal information",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  buttons: [
    { title: "Cancel", variant: "secondary", size: "sm" },
    { title: "Save", size: "sm" },
  ],
};