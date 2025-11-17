"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Play } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "Hostel Mate - Hostel Management App",
      tags: [
        "React Native",
        "Expo",
        "Firebase",
        "Cross-Platform",
        "React Query",
      ],
      image: "/hostelmate.png",
      description:
        "Hostel Mate is a complete hostel management solution designed specifically for hostel owners. It simplifies everyday operations by providing easy tools to manage rooms, track tenants, handle rent collections, monitor expenses, and maintain records digitally. ",
      role: "Mobile App Developer (React Native)",
      highlights: [
        "Integrated core APIs, payment flows, and report downloads",
        "Implemented push notifications and improved multiple UI screens",
        "Managed app-wide state, forms, and data handling",
        "Optimized performance and collaborated with backend/design teams",
      ],
      playStore: "https://play.google.com/store/apps/details?id=com.hostelmate",
      demoLink: "",
      githubLink: "",
    },
    {
      title: "Oxikart - E-Commerce App",
      tags: ["React Native", "Firebase", "Redux", "NativeWind"],
      image: "/oxikart.png",
      description:
        "A modern e-commerce mobile app that allows users to browse products, add items to their cart, and place secure online orders with a smooth and intuitive shopping experience.",
      highlights: [
        "Built all major screens and reusable UI components for the e-commerce flow",
        "Integrated REST APIs and implemented complex frontend logic for cart, products, and orders",
        "Added Firebase auth, image uploads, and referral tracking using react-native-play-install-referrer",
        "Managed global state with Redux and optimized overall app performance",
      ],
      playStore:
        "https://play.google.com/store/apps/details?id=com.woodenclouds.oxikart",
      demoLink: "",
      githubLink: "",
    },
    {
      title: "Oneruppee - E-Commerce App",
      tags: ["React Native", "Firebase", "Cashfree", "Realtime Database"],
      image: "/oneruppee.png",
      description:
        "Oneruppee is a feature-rich e-commerce mobile application designed to revolutionize the online shopping experience by combining traditional product listings with an interactive bidding system.",
      highlights: [
        "Upgraded the app from an older React Native version and refactored UI and codebase for stability",
        "Fixed and improved the entire checkout flow (Buy Now & Add to Cart) and integrated Cashfree PG",
        "Resolved bugs, refined UI screens, and optimized overall app performance",
        "Fixed and enhanced the bidding feature, integrating Firebase Realtime DB for live bidding",
      ],
      playStore:
        "https://play.google.com/store/apps/details?id=com.orgecom.oneruppee",
      demoLink: "",
      githubLink: "",
    },
    {
      title: "HungryHub - Food Delivery App",
      tags: ["React Native", "Expo", "Django", "PostgreSQL", "AWS"],
      image: "/hungryhub2.png",
      description:
        "A food delivery mobile app that lets users browse nearby restaurants, explore menus, place orders.",
      role: "Full Stack Developer",
      highlights: [
        "Designed the complete UI/UX and built all app screens and components",
        "Implemented navigation, API integrations, state management, and end-to-end frontend logic",
        "Designed the database, created APIs, and developed backend business logic",
        "Deployed the backend to AWS and handled full app deployment and testing",
      ],
      demoLink: "",
      githubLink: "https://github.com/souravramesh/HungryHubFrontend",
    },
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
    <section id="projects" className="py-32 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-sm uppercase tracking-wider text-muted-foreground mb-16 transition-all duration-700 text-center md:text-left ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Selected Work
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-700 text-center md:text-left ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 bg-muted aspect-3/2">
                {/* <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                /> */}
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {project.role}
              </p>

              <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  My Contributions:
                </p>
                <ul className="text-sm text-foreground/70 space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-muted-foreground mt-1">•</span>
                      <span className="mt-1">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 justify-center md:justify-start pt-2 border-t border-border">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 mt-3"
                  >
                    <ExternalLink size={16} />
                    View Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 mt-3"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                )}
                {project.playStore && (
                  <a
                    href={project.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 mt-3"
                  >
                    <Play size={16} />
                    Play Store
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
