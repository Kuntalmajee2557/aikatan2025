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
import Gallery from "@/components/ui/Gallery";
import { images } from "@/data/gallery";

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

      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter text-white p-12">
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">Techlavya</span> Event
      </h1>


      {/* <BentoGridComponent /> */}
      <CardGrid cards={TechlavyaEvent} />


      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter text-white p-12">
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">ESPORTS</span> Event
      </h1>

      <CardGrid cards={EsportsEvent} />

      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter text-white p-12">
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">CULTURAL</span> Event
      </h1>

      {/* <BentoGridComponent /> */}
      <CardGrid cards={CulturalEvent} />


      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter text-white p-12">
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">GALLERY</span>
      </h1>


      <div className="p-6">
        <Gallery images={images} />
      </div>
      {/* <MisonaryComponent /> */}
      {/* <RollingGallery autoplay={true} pauseOnHover={true} /> */}

      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter text-white p-12">
        OUR  
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">  SPONSERS</span>
      </h1>

      <MarqueeComponent reviews={reviews} />

      <Footer />

      {/* <Footer /> */}


      {/* </TracingBeam> */}


    </div>
  );
}



