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
            className={`flex items-center gap-2 rounded-full px-3 py-2 shadow-md transition hover:scale-105 ${
                liked ? "bg-red-50 text-red-600" : "bg-white text-white-600"
            }`}
        >
            <span aria-hidden="true">{liked ? "❤️" : "♡"}</span>
            <span className="text-sm font-medium">{likes}</span>
        </button>
    );
}