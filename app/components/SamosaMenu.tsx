import Image from "next/image";
import LikeButton from "./LikeButton";
import { ArrowRight } from "lucide-react";

interface SamosaCardProps {
    name: string;
    description: string;
    price: number;
    image: string;
}

export default function SamosaCard({
    name,
    description,
    price,
    image,
}: SamosaCardProps) {
return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">

        {/* Image */}
        <div className="relative h-64 w-full">
            <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
            />

            {/* Like Button */}
            <div className="absolute right-4 top-4">
            <LikeButton />
            </div>
        </div>

      {/* Content */}
        <div className="p-5">

        <h2 className="text-2xl font-bold text-gray-800">
            {name}
        </h2>

        <p className="mt-2 text-gray-600">
            {description}
        </p>

        <div className="mt-4 flex items-center justify-between">

            <span className="text-xl font-bold text-orange-600">
            ₹{price}
            </span>

            <button className="rounded-lg bg-orange-600 px-4 py-2 text-white transition hover:bg-orange-700">
            <ArrowRight />
            </button>

        </div>

        </div>
    </div>
    );
}