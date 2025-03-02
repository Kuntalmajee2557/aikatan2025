import React from 'react'
import { SpinningText } from './magicui/spinning-text'
import { AnimatedPinDemo } from './3dpinComponent'
import aikatanlogo from "@/public/images/aikatan logo.jpg"
import Image from 'next/image'
import img from "@/public/images/img.png"



function HeroComponent() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
        <div className="h-72 w-72 absolute ">
          <Image src={aikatanlogo} alt="no image found" layout="fill" objectFit="cover" />
        </div>
        <SpinningText className="text-white text-1xl font-bold" radius={20}>Akitan • RKMGEC • Akitan • RKMGEC • Akitan • RKMGEC •</SpinningText>;
        <Image src={img} alt="no image found" layout="fill" objectFit="cover" />
        <div className="absolute left-[-26px] bottom-[7px]">
        {/* <AnimatedPinDemo></AnimatedPinDemo> */}
          {/* <Doctorstrange /> */}
        </div>
      </div>
  )
}

export default HeroComponent