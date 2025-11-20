"use client";

import React, { useRef, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import animationData from "../public/Lottie Lego.json";
import animationData from "../public/Doctor.json";

gsap.registerPlugin(ScrollTrigger);

const LottieScrollAnimation = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lottieRef.current || !containerRef.current) return;

    const anim = lottieRef.current;
    const totalFrames = anim.getDuration(true); // Get total frames

    // Pause the animation initially
    anim.pause();

    // Create ScrollTrigger to control animation based on scroll
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      pin: ".lottie-container",
      onUpdate: (self) => {
        const frame = self.progress * (totalFrames || 0);
        anim.goToAndStop(frame, true);
      },
      markers: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: "400vh", position: "relative" }}>
      <div className="lottie-container" style={{ width: 400, height: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={false}
        />
      </div>
    </div>
  );
};

export default LottieScrollAnimation;
