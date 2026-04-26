import { useEffect } from "react";

export default function useCursorTrail() {
  useEffect(() => {
    const createTrail = (e) => {
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trail.style.left = `${e.clientX - 2}px`;
      trail.style.top = `${e.clientY - 2}px`;
      document.body.appendChild(trail);
      setTimeout(() => trail.remove(), 1000);
    };

    window.addEventListener("mousemove", createTrail);
    return () => window.removeEventListener("mousemove", createTrail);
  }, []);
}
