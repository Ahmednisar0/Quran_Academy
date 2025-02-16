"use client";

import { useEffect, useState } from "react";

export default function NetworkStatus() {
  // Initialize state with a default value of `true` to avoid issues during SSR
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Ensure this code only runs on the client-side
    if (typeof window !== "undefined") {
      setIsOnline(navigator.onLine);

      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);

      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);

      return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }
  }, []);

  if (!isOnline) {
    return (
      <div className="fixed top-0 left-0 right-0 bg-red-500 text-white text-center p-2 z-50">
        You are offline. Please check your internet connection.
      </div>
    );
  }

  return null;
}