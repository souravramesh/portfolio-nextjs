"use client";

import { useEffect, useRef, useState } from "react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    "Mobile App Development",
    "React Native & Expo",
    "Cross-Platform Apps",
    "API Integration",
    "Web Development",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-sm uppercase tracking-wider text-muted-foreground mb-16 transition-all duration-700 text-center md:text-left ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div
            className={`space-y-6 transition-all duration-700 delay-100 text-center md:text-left ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I’m a mobile app developer with a strong focus on React Native and
              Expo. Over the past few years, I’ve built and launched multiple
              apps for clients — handling everything from UI development and API
              integration to Play Store deployment.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I love taking on challenges — whether it’s optimizing app
              performance, debugging complex issues, or improving user
              experience. My goal is to build products that users actually enjoy
              using.
            </p>
          </div>

          <div
            className={`transition-all duration-700 delay-200 text-center md:text-left ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
              Skills & Services
            </h3>
            <ul className="space-y-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 text-foreground justify-center md:justify-start"
                >
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
