import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "../components/Navbar";
import LenisProvider from "../providers/LenisProvider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Md Kayesh | Freelance Front End Developer",
    default: "Md Kayesh | Freelance Front End Developer",
  },
  description:
    "Hi, I&#x27;m Md Kayesh. I&#x27;m a front end developer and Freelancer. I love to create fully functional beautiful and attractive looking websites with cool animations and designs with the latest technologies like Reactjs, Nextjs, Tailwind, Framer-motion, GSAP, Bootstrap, Redux, Redux-toolkit, Javascript, CSS3, HTML5, etc. I have been working in this field since 2021. In these years I have developed 50+ websites. I love to work with new people and create websites for them. In work, my major priority is the client&#x27;s requirements and their satisfaction. So, If you want to design or build a website and work with me, feel free to contact with me.",
  keywords:
    "Md Kayesh, Front End Developer, Freelancer, html, css, javascript, reactjs, nextjs, tailwindcss, framer-motion, gsap, bootstrap, redux, redux-toolkit, typescript, nodejs, up work, fiver, freeelancer.com, expert web developer",
  twitter: {
    title: "Md Kayesh | Freelance Front End Developer",
    description: `Hey there! I'm Md Kayesh, and I love making cool stuff on the internet. I got into web development around 2020, and it's been a blast! I started with basic things like HTML, CSS, and JavaScript to create good-looking and interactive web pages.
Over time, I've learned fancier tools like React, Nextjs and TypeScript which let me make websites that not only look awesome but also do cool things when you click on them. I'm all about making websites that are not just pretty but also super easy for people to use.`,
  },
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params?: {
    slug: string;
  };
}>) {
  return (
    <html lang="en" className="dark">
      <body className={sans.className}>
        <LenisProvider>
          {/* <ThemeProvider> */}
          <Navbar />
          <PageTransition params={params}>{children}</PageTransition>
          <Footer />
          {/* </ThemeProvider> */}
        </LenisProvider>
        <Toaster />
      </body>
    </html>
  );
}
