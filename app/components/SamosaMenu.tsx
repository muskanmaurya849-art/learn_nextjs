"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface SamosaCardProps {
    name: string;
    description: string;
    price: number;
    image: string;
    likes?: number;
    liked?: boolean;
}

export default function SamosaCard({
    name,
    description,
    price,
    image,
    likes = 0,
    liked = false,
}: SamosaCardProps) {
    const [isLiked, setIsLiked] = useState(liked);
    const [likeCount, setLikeCount] = useState(likes);

    const handleLike = () => {
        if (isLiked) {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }
        setIsLiked(!isLiked);
    };

    return (
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
            {/* Like Button - Top Right */}
            <button
                type="button"
                onClick={handleLike}
                aria-label={isLiked ? "Remove like" : "Like item"}
                style={{ borderRadius: "9999px" }}
                className="absolute right-3 top-3 z-10 flex h-12 items-center gap-2 rounded-full border border-gray-200 bg-white px-3 shadow-md transition-transform hover:scale-105">
                <span className="text-2xl text-gray-500">{isLiked ? "❤️" : "♡"}</span>
                <span className="text-sm font-bold text-gray-800">{likeCount}</span>
            </button>

            {/* Image */}
            <div className="relative h-64 w-full">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                />
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
                    <button
                        type="button"
                        aria-label={`View ${name}`}
                        style={{ borderRadius: "9999px" }}
                        className="flex items-center justify-center rounded-full bg-orange-600 text-white transition hover:bg-orange-700"
                    >
                        <ArrowRight />
                    </button>
                </div>
            </div>

        </div>
    );
}