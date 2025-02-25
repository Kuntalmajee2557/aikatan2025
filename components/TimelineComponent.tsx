import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CardSpotlightComponent } from "./CardSpotlightComponent";

export function TimelineComponent() {
  const data = [
      {
        title: "2024",
        content: (
          <div className="grid grid-cols-2 gap-4">
            <CardSpotlightComponent />
          </div>
        ),
      },
      {
        title: "Early 2023",
        content: (
          <div className="grid grid-cols-2 gap-4">
            <CardSpotlightComponent />
          </div>
        ),
      },
      {
        title: "Changelog",
        content: (
          <div className="grid grid-cols-2 gap-4">
            <CardSpotlightComponent />
          </div>
        ),
      },
    ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
