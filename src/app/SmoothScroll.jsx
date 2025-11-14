"use client"; // important for Next.js

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,    // scroll duration
        lerp: 0.1,        // smoothing factor
        smooth: true,     // enable smooth scroll
        smoothTouch: true // smooth on touch devices
      }}
    >
      {children}
    </ReactLenis>
  );
}
