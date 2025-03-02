// components/ImageCard.tsx
import Image from "next/image";
import { Marquee } from "./magicui/marquee";
import { cn } from "@/lib/utils";
import { Review } from "@/data/sponsor";

// components/ReviewCard.tsx
const ReviewCard = ({ img }: { img: string }) => {
    return (
        <figure className="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border border-stone-50/[.1]">
            <img className="w-full h-full object-cover" alt="Review Image" src={img} />
        </figure>
    );
};





export function MarqueeComponent({ reviews }: { reviews: Review[] }) {
    const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
    const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4">
            {/* First Marquee Row */}
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review, index) => (
                    <ReviewCard key={index} img={review.img} />
                ))}
            </Marquee>

            {/* Second Marquee Row (Reversed) */}
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review, index) => (
                    <ReviewCard key={index} img={review.img} />
                ))}
            </Marquee>

            {/* Left and Right Gradients for a Fading Effect */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black via-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black via-transparent"></div>
        </div>
    );
}

