"use client"
import Image from "next/image";
import img from "@/public/images/img.png"
import aikatanlogo from "@/public/images/aikatan logo.jpg"

import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { FlowingMenu } from "@/components/ui/flowing-menu";
import { FloatingNav } from "@/components/ui/floating-navbar";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import SplitText from "@/components/ui/split-text";
import { TracingBeam } from "@/components/ui/tracing-beam";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { SpinningText } from "@/components/magicui/spinning-text";
import Navbar from "@/components/ui/Navbar";
import { AuroraText } from "@/components/magicui/aurora-text";
import { AnimatedPinDemo } from "@/components/3dpinComponent";
import BentoGridComponent from "@/components/BentoGridComponent";
import { TimelineComponent } from "@/components/TimelineComponent";
import StickyScrollComponenet from "@/components/StickyScrollComponenet";
import { FlowingMenuComponent } from "@/components/FlowingMenuComponent";
import { MarqueeComponent } from "@/components/marqueeComponent";
import RollingGallery from "@/components/reactBits/RollingGallary";
import SplashCursor from "@/components/ui/splash-cursor";
// import { Marquee } from "@components/magicui/marquee";

export default function Home() {


  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
          </div>
        </div>
      ),
    },
  ];

  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running out of content
        </div>
      ),
    },
  ];




  const demoItems = [
    { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
  ]

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact"
    },
  ];

  return (
    <div className="min-h-screen bg-stone-950 flex flex-col items-center w-full">
      <SplashCursor/>
      
      {/* <TracingBeam className="px-10"> */}
      <Navbar></Navbar>
      {/* <FloatingNav navItems={navItems} /> */}

      <div className="relative h-screen w-full flex items-center justify-center">



        <div className="h-72 w-72 absolute ">
          <Image src={aikatanlogo} alt="no image found" layout="fill" objectFit="cover" />
        </div>
        <SpinningText className="text-white text-1xl font-bold" radius={20}>Akitan • RKMGEC • Akitan • RKMGEC • Akitan • RKMGEC •</SpinningText>;
        <Image src={img} alt="no image found" layout="fill" objectFit="cover" />
        <div className="absolute left-[-26px] bottom-[7px]">
        <AnimatedPinDemo></AnimatedPinDemo>
        </div>

      </div>



      {/* <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar> */}

      <TimelineComponent />
      <StickyScrollComponenet />

      <FlowingMenuComponent />

      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white p-14">
        <AuroraText>Hello, Tailwind!</AuroraText>
      </h1>

      <BentoGridComponent />

      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white p-14">
        <AuroraText>Hello, Tailwind!</AuroraText>
      </h1>

      <BentoGridComponent />

      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white p-14">
        <AuroraText>Hello, Tailwind!</AuroraText>
      </h1>

      <BentoGridComponent />


      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white p-14">
        <AuroraText>Hello, Tailwind!</AuroraText>
      </h1>

      <RollingGallery autoplay={true} pauseOnHover={true} />

      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white p-14">
        <AuroraText>Hello, Tailwind!</AuroraText>
      </h1>

      <MarqueeComponent />



      {/* </TracingBeam> */}
    </div>
  );
}



