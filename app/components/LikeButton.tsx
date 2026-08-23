"use client";

import { useState } from "react";

export default function LikeButton() {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        if (liked) {
            setLikes((count) => count - 1);
            setLiked(false);
            return;
        }

        setLikes((count) => count + 1);
        setLiked(true);
    };
    
    return (
        <button
            type="button"
            onClick={handleLike}
            aria-label={liked ? "Remove like" : "Like item"}
            style={{ borderRadius: "9999px" }}
            className={`flex h-12 items-center gap-2 rounded-full border border-gray-200 px-3 shadow-md transition-transform hover:scale-105 ${
                liked
                    ? "bg-red-50 text-red-600"
                    : "bg-white text-gray-600"
            }`}
        >
            <span aria-hidden="true">{liked ? "❤️" : "♡"}</span>
            <span className="text-sm font-medium">{likes}</span>
            
        </button>
    );
}