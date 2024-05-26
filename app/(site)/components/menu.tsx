"use client";

import Link from "next/link";

import { SidebarClose } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { LogIn } from "lucide-react";

import { useIsMenuOpen } from "@/hooks/useMenu";
import React from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const Menu = () => {
  const routes = [
    {
      text: "Order",
      href: "/order",
    },
    {
      text: "Redeem",
      href: "/redeem",
    },
    {
      text: "Blog",
      href: "/blog",
    },
    {
      text: "Terms",
      href: "/terms",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "About",
      href: "/about",
    },
  ];

  const { isMenuOpen, setIsMenuOpen } = useIsMenuOpen();

  const pathname = usePathname();

  useEffect(() => {
    console.log("Pathname changed:", pathname);
    setIsMenuOpen(false);
  }, [pathname, setIsMenuOpen]);


  useEffect(() => {
    const htmlElement = document.documentElement;

    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
      htmlElement.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
      htmlElement.classList.remove("no-scroll");
    }

    // Clean up the class on component unmount
    return () => {
      document.body.classList.remove("no-scroll");
      htmlElement.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  if (!isMenuOpen) return;

  return (
    <section className="fixed bg-navy h-screen z-50 w-screen p-5 flex flex-col gap-6 text-white md:hidden">
      <section className="flex items-center justify-between">
        <h1
          onClick={() => console.log(pathname)}
          className="text-xl bg-gradient-to-tr from-amber-200 to-yellow-500 bg-clip-text text-transparent font-semibold"
        >
          Crepe Bites
        </h1>
        <SidebarClose className="w-8" onClick={() => setIsMenuOpen(false)} />
      </section>
      <ul className="flex flex-col gap-6 border-t-2 border-yellow-400 pt-6">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.text}
            className="flex w-full justify-between text-neutral-400"
          >
            {route.text}
            <ChevronRight className="w-4" />
          </Link>
        ))}
      </ul>
      <button className="flex justify-center items-center gap-3 bg-gradient-to-tr from-amber-200 to-yellow-500 text-[#161821] py-1 px-6 font-semibold">
        <LogIn className="w-4" />
        Log In
      </button>
    </section>
  );
};

export default Menu;
