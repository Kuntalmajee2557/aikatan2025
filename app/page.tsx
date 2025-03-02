"use client"
import Image from "next/image";
import React from "react";
import Navbar from "@/components/ui/Navbar";
import { AuroraText } from "@/components/magicui/aurora-text";
import BentoGridComponent from "@/components/BentoGridComponent";
import { TimelineComponent } from "@/components/TimelineComponent";
import StickyScrollComponenet from "@/components/StickyScrollComponenet";
import { FlowingMenuComponent } from "@/components/FlowingMenuComponent";
import { MarqueeComponent } from "@/components/marqueeComponent";
import RollingGallery from "@/components/reactBits/RollingGallary";
import SplashCursor from "@/components/ui/splash-cursor";
import Footer from "@/components/coachfooter";
// import {Footer} from "@/components/coachfooter";
import Particles from "@/components/particleComponent";
import Doctorstrange from "@/components/square";
import HeroComponent from "@/components/heroComponent";
import { BasicTiltCard } from "@/components/demoCard";
import { CulturalEvent, EsportsEvent, TechlavyaEvent } from "@/data/cardData";
import CardGrid from "@/components/ui/CardGrid";
import MisonaryComponent from "@/components/MisonaryComponent";
import { reviews } from "@/data/sponsor";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 flex flex-col items-center w-full">

      {/* <SplashCursor/> */}

      {/* <TracingBeam className="px-10"> */}
      <Navbar></Navbar>

      <HeroComponent />

      {/* <Particles className="absolute top-0 left-0 w-full h-full pointer-events-none" /> */}


      <TimelineComponent />
      {/* <StickyScrollComponenet /> */}

      {/* <FlowingMenuComponent /> */}

      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white p-14">
        <AuroraText>Techlavya Event</AuroraText>
      </h1>

      {/* <BentoGridComponent /> */}
      <CardGrid cards={TechlavyaEvent} />


      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white p-14">
        <AuroraText>ESPORTS Event</AuroraText>
      </h1>

      <CardGrid cards={EsportsEvent} />

      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white p-14">
        <AuroraText>CULTURAL EVENT</AuroraText>
      </h1>

      {/* <BentoGridComponent /> */}
      <CardGrid cards={CulturalEvent} />

      
      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white p-14">
        <AuroraText>GALLERY</AuroraText>
      </h1>

      <MisonaryComponent />
      {/* <RollingGallery autoplay={true} pauseOnHover={true} /> */}

      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white p-14">
        <AuroraText>OUR SPONSERS</AuroraText>
      </h1>

      <MarqueeComponent reviews={reviews}/>

      <Footer />

      {/* <Footer /> */}


      {/* </TracingBeam> */}


    </div>
  );
}



