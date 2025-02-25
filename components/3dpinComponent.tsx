"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[20rem] w-full flex items-center justify-center">
      <PinContainer
        title="RKMGEC"
        href="https://www.google.com/maps/@23.4212991,86.2073033,207m/data=!3m1!1e3?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] bg-white-10">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aikatan RKMGEC
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Hows the josh
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
