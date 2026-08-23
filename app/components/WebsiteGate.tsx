"use client";

import { useEffect, useState } from "react";

const gateStorageKey = "samosa-hub-website-entered";

export default function WebsiteGate({ children }: { children: React.ReactNode }) {
  const [hasEntered, setHasEntered] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setHasEntered(window.sessionStorage.getItem(gateStorageKey) === "true");
    setIsReady(true);
  }, []);

  const enterWebsite = () => {
    window.sessionStorage.setItem(gateStorageKey, "true");
    setHasEntered(true);
  };

  if (!isReady || !hasEntered) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-orange-500 px-6 text-center text-white">
        <div>
          <h1 className="text-4xl font-bold md:text-5xl">Welcome to Samosa Hub</h1>
          <p className="mx-auto mt-3 max-w-md text-orange-100">
            Click below to enter our website.
          </p>
          <button
            type="button"
            onClick={enterWebsite}
            className="mt-6 rounded-full bg-white px-6 py-3 font-semibold text-orange-600 shadow-lg transition hover:scale-105 hover:bg-orange-50"
          >
            Enter Website
          </button>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}
