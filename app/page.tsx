"use client"
import Image from "next/image";
import img from "@/public/images/img.png"
import aikatanlogo from "@/public/images/aikatan logo.jpg"
import React from "react";
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
  return (
    <div className="min-h-screen bg-stone-950 flex flex-col items-center w-full">
      <SplashCursor/>
      
      {/* <TracingBeam className="px-10"> */}
      <Navbar></Navbar>

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



