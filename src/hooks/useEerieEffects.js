import { useEffect, useCallback } from "react";

export default function useEerieEffects() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--mouse-x", `${x}%`);
      document.documentElement.style.setProperty("--mouse-y", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const glitchElements = document.querySelectorAll(".glitch, .text-glitch");
      glitchElements.forEach((el) => {
        if (Math.random() > 0.7) {
          const x = (Math.random() - 0.5) * 4;
          const y = (Math.random() - 0.5) * 4;
          el.style.transform = `translate(${x}px, ${y}px)`;
          setTimeout(() => { el.style.transform = ""; }, 100);
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const createRipple = (e) => {
      if (e.target.tagName !== "BUTTON" && e.target.tagName !== "A") return;
      
      const ripple = document.createElement("span");
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(139, 92, 246, 0.3);
        transform: scale(0);
        animation: ripple-effect 0.6s ease-out;
        pointer-events: none;
        left: ${e.offsetX}px;
        top: ${e.offsetY}px;
        width: 20px;
        height: 20px;
        margin-left: -10px;
        margin-top: -10px;
      `;
      
      e.target.style.position = "relative";
      e.target.style.overflow = "hidden";
      e.target.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    };

    document.addEventListener("click", createRipple);
    return () => document.removeEventListener("click", createRipple);
  }, []);
}

// Add ripple animation
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes ripple-effect {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  if (!document.querySelector("[data-ripple-style]")) {
    style.setAttribute("data-ripple-style", "");
    document.head.appendChild(style);
  }
}
