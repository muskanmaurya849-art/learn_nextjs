"use client";

import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLiked((prevLiked) => {
      const nextLiked = !prevLiked;
      setLikes((prevLikes) => prevLikes + (nextLiked ? 1 : -1));
      return nextLiked;
    });
  };

  return (
    <button
      type="button"
      onClick={handleLike}
      aria-label={liked ? "Unlike item" : "Like item"}
      className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-md transition hover:scale-105"
    >
      <span className={liked ? "text-red-500" : "text-gray-500"}>
        {liked ? "❤️" : "♡"}
      </span>

      <span className="text-sm text-gray-700">{likes}</span>
    </button>
  );
}