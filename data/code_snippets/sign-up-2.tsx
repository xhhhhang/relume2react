"use client";
import { useState } from "react";
import { Button, Input } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiLogoApple, BiLogoFacebookCircle, BiLogoGoogle } from "react-icons/bi";
type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};
type Props = {
  logo: ImageProps;
  logInText: string;
  logInLink: {
    text: string;
    url: string;
  };
  title: string;
  description: string;
  inputPlaceholderEmail: string;
  inputPlaceholderPassword: string;
  signUpButton: ButtonProps;
  socialLoginButtons: ButtonProps[];
  footerText: string;
};
export type Signup2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
export const Signup2 = (props: Signup2Props) => {
  const {
    logo,
    logInText,
    logInLink,
    title,
    description,
    inputPlaceholderEmail,
    inputPlaceholderPassword,
    signUpButton,
    socialLoginButtons,
    footerText,
  } = {
    ...Signup2Defaults,
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
<p className="hidden md:block">{logInText}</p>
<a href={logInLink.url} className="underline">
              {logInLink.text}
            </a>
</div>
</div>
<div className="container max-w-sm">
<div className="mb-8 text-center md:mb-10 lg:mb-12">
<h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h1>
<p className="md:text-md">{description}</p>
</div>
<form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
<Input
type="email"
id="email"
placeholder={inputPlaceholderEmail}
value={email}
onChange={(e) => setEmail(e.target.value)}
            />
            <Input
type="password"
id="password"
placeholder={inputPlaceholderPassword}
value={password}
onChange={(e) => setPassword(e.target.value)}
            />
            <Button
variant={signUpButton.variant}
size={signUpButton.size}
iconLeft={signUpButton.iconLeft}
iconRight={signUpButton.iconRight}
            >
              {signUpButton.title}
            </Button>
<div className="my-3 h-px w-full bg-black md:my-4" />
            {socialLoginButtons.map((button, index) => (
              <Button key={index} {...button} className="gap-x-3">
                {button.title}
              </Button>
            ))}
          </form>
</div>
<footer className="absolute bottom-0 left-0 right-0 top-auto flex h-16 w-full items-center justify-start pl-[5%] md:h-18">
<p className="text-sm">{footerText}</p>
</footer>
</div>
</section>
  );
};
export const Signup2Defaults: Signup2Props = {
  logo: {
    url: "#",
    src: "https://relume-assets.s3.amazonaws.com/logo-image.svg",
    alt: "Logo text",
  },
  logInText: "Already have an account?",
  logInLink: {
    text: "Log In",
    url: "#",
  },
  title: "Sign Up",
  description: "Lorem ipsum dolor sit amet adipiscing elit.",
  inputPlaceholderEmail: "Email",
  inputPlaceholderPassword: "Password",
  signUpButton: {
    title: "Sign up",
  },
  socialLoginButtons: [
    {
      variant: "secondary",
      title: "Sign up with Google",
      iconLeft: <BiLogoGoogle className="size-6" />,
    },
    {
      variant: "secondary",
      title: "Sign up with Facebook",
      iconLeft: <BiLogoFacebookCircle className="size-6" />,
    },
    {
      variant: "secondary",
      title: "Sign up with Apple",
      iconLeft: <BiLogoApple className="size-6" />,
    },
  ],
  footerText: "© 2024 Relume",
};