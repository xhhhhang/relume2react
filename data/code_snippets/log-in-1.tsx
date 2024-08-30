"use client";
import { useState } from "react";
import { Button, Input, Label } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiLogoGoogle } from "react-icons/bi";
type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};
type Props = {
  logo: ImageProps;
  signUpText: string;
  signUpLink: {
    text: string;
    url: string;
  };
  title: string;
  description: string;
  logInButton: ButtonProps;
  logInWithGoogleButton: ButtonProps;
  forgotPassword: {
    text: string;
    url: string;
  };
  footerText: string;
};
export type Login1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Login1 = (props: Login1Props) => {
  const {
    logo,
    signUpText,
    signUpLink,
    title,
    description,
    logInButton,
    logInWithGoogleButton,
    forgotPassword,
    footerText,
  } = {
    ...Login1Defaults,
    ...props,
  } as Props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email, password });
  };
  return (
    <section className="px-[5%]">
<div className="relative flex min-h-svh flex-col items-stretch justify-center overflow-auto py-24 lg:py-20">
<div className="absolute bottom-auto left-0 right-0 top-0 flex h-16 w-full items-center justify-between md:h-18">
<a href={logo.url}>
<img src={logo.src} alt={logo.alt} />
</a>
<div className="inline-flex gap-x-1">
<p className="hidden md:block">{signUpText}</p>
<a href={signUpLink.url} className="underline">
              {signUpLink.text}
            </a>
</div>
</div>
<div className="container max-w-sm">
<div className="mb-6 text-center md:mb-8">
<h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h1>
<p className="md:text-md">{description}</p>
</div>
<form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
<div className="grid w-full items-center">
<Label htmlFor="email" className="mb-2">
                Email*
              </Label>
<Input
type="email"
id="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
<div className="grid w-full items-center">
<Label htmlFor="password" className="mb-2">
                Password*
              </Label>
<Input
type="password"
id="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
<div className="grid-col-1 grid gap-4">
<Button
variant={logInButton.variant}
size={logInButton.size}
iconLeft={logInButton.iconLeft}
iconRight={logInButton.iconRight}
              >
                {logInButton.title}
              </Button>
<Button
variant={logInWithGoogleButton.variant}
size={logInWithGoogleButton.size}
iconLeft={logInWithGoogleButton.iconLeft}
iconRight={logInWithGoogleButton.iconRight}
className="gap-x-3"
              >
                {logInWithGoogleButton.title}
              </Button>
</div>
</form>
<div className="mt-5 w-full text-center md:mt-6">
<a href={forgotPassword.url} className="underline">
              {forgotPassword.text}
            </a>
</div>
</div>
<footer className="absolute bottom-0 left-0 right-0 top-auto flex h-16 w-full items-center justify-center md:h-18">
<p className="text-sm">{footerText}</p>
</footer>
</div>
</section>
  );
};
export const Login1Defaults: Login1Props = {
  logo: {
    url: "#",
    src: "https://relume-assets.s3.amazonaws.com/logo-image.svg",
    alt: "Logo text",
  },
  signUpText: "Don't have an account?",
  signUpLink: {
    text: "Sign up",
    url: "#",
  },
  title: "Log In",
  description: "Lorem ipsum dolor sit amet adipiscing elit.",
  logInButton: {
    title: "Log in",
  },
  logInWithGoogleButton: {
    variant: "secondary",
    title: "Log in with Google",
    iconLeft: <BiLogoGoogle className="size-6" />,
  },
  forgotPassword: {
    text: "Forgot your password?",
    url: "#",
  },
  footerText: "© 2024 Relume",
};