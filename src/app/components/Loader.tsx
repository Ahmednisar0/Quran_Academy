"use client"; // Mark as a Client Component

import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <>
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "purple",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "white",
            borderRadius: "50%",
            animation: "blink 1.4s infinite ease-in-out",
          }}
        />
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "white",
            borderRadius: "50%",
            animation: "blink 1.4s infinite ease-in-out",
            animationDelay: "0.2s",
          }}
        />
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "white",
            borderRadius: "50%",
            animation: "blink 1.4s infinite ease-in-out",
            animationDelay: "0.4s",
          }}
        />
      </div>

      {/* Add the CSS animation keyframes */}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </div>
    </>
    
  );
}