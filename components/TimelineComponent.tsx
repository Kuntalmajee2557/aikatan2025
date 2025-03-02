import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { EventCard } from "./ui/EventCard";
import { timelineData } from "@/data/timelineData";

export function TimelineComponent() {
  const data = timelineData.map((entry) => ({
    title: entry.title,
    content: (
      <div className="grid grid-cols-2 gap-4">
        <EventCard events={entry.events} />
      </div>
    ),
  }));

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
