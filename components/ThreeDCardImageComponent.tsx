"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import img from "@/public/images/img.png";

export function ThreeDCardComponent({img}: any) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ={100} className="w-full">
          <Image
            src={img}
            height={1000}
            width={1000}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="3D floating card image"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
