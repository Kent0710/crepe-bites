"use client";

import Link from "next/link";

import { SidebarClose } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Handshake } from "lucide-react";
import { Phone } from "lucide-react";
import { Building2 } from "lucide-react";
import { History } from "lucide-react";
import { Inbox } from "lucide-react";

import { useIsMenuOpen } from "@/hooks/useMenu";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Loader } from "lucide-react";

const Menu = () => {
  const pathname = usePathname();
  const [routing, setRouting] = useState(false);

  const routes = useMemo(() => [
    {
      text: "Order",
      href: "/order",
      icon: ShoppingCart,
      active : pathname === "/order"
    },
    {
      text: "History",
      href: "/history",
      icon: History,
      active : pathname === "/history"
    },
    {
      text: "Inbox",
      href: "/inbox",
      icon: Inbox,
      active : pathname === "/inbox"
    },
    {
      text: "Terms",
      href: "/terms",
      icon: Handshake,
      active : pathname === "/terms"
    },
    {
      text: "Contact",
      href: "/contact",
      icon: Phone,
      active : pathname === "/contact"
    },
    {
      text: "About",
      href: "/about",
      icon: Building2,
      active : pathname === "/about"
    },
  ], [pathname]);

  const { isMenuOpen, setIsMenuOpen } = useIsMenuOpen();

  useEffect(() => {
    setRouting(false)
    setIsMenuOpen(false);
  }, [pathname, setIsMenuOpen, setRouting]);

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
        <Link
          href="/"
          className="text-xl bg-gradient-to-tr from-amber-200 to-yellow-500 bg-clip-text text-transparent font-semibold"
        >
          Crepe Bites
        </Link>
        <SidebarClose className="w-8" onClick={() => setIsMenuOpen(false)} />
      </section>
      <ul className="flex flex-col gap-9 border-t-2 border-yellow-400 pt-6">
        {routing ? (
          <div className="flex gap-3 justify-center">
            <Loader className="w-4 animate-spin" />
            Page loading...
          </div>
        ) : (
          routes.map((route) => (
            <MenuItem
              key={route.text}
              href={route.href}
              text={route.text}
              active={route.active}
              icon={route.icon}
              setRouting={setRouting}
            />
          ))
        )}
      </ul>
    </section>
  );
};

interface MenuItemProps {
  text: string;
  icon: any;
  href: string;
  setRouting: React.Dispatch<React.SetStateAction<boolean>>;
  active : boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  text,
  icon: Icon,
  href,
  setRouting,
  active
}) => {
  if (active) return;

  return (
    <Link
      href={href}
      key={text}
      onClick={() => setRouting(true)}
      className="flex w-full items-center justify-between text-neutral-300"
    >
      <section className="flex gap-3 items-center">
        <Icon size={20} />
        {text}
      </section>
      <ChevronRight className="w-4" />
    </Link>
  );
};

export default Menu;
