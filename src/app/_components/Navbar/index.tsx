"use client";
import { useWindowSize } from "@/hooks/useWindowSize";
import React, { useEffect, useRef, useState } from "react";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavbarProps } from "@/models/IDictionary/Layout";
import { cn } from "@/lib/utils";

const Navbar = ({ languages, links, contactUsButton }: NavbarProps) => {
  const containerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const { isDesktop } = useWindowSize();

  useGSAP(
    () => {
      gsap.to(containerRef.current, {
        top: 0,
        duration: 1,
      });
    },
    {
      scope: containerRef,
    }
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed flex items-center z-50 -top-[17.475vw] tablet:-top-[10vw] desktop:-top-[6.25vw] w-full desktop:min-h-[4.948vw] shadow-lg rounded-b-[3.262vw] tablet:rounded-b-[1.75vw] desktop:rounded-b-[1.042vw] px-[6.99vw] tablet:px-[3.75vw] desktop:px-[4.16vw] justify-between bg-white/80 backdrop-blur-sm transition duration-500",
        scrolled && "bg-white"
      )}
      ref={containerRef}
    >
      {isDesktop ? (
        <DesktopNavbar
          contactUsButton={contactUsButton}
          links={links}
          languages={languages}
          className={"desktop:min-h-[4.948vw]"}
        />
      ) : (
        <MobileNavbar
          contactUsButton={contactUsButton}
          links={links}
          languages={languages}
        />
      )}
    </header>
  );
};

export default Navbar;
