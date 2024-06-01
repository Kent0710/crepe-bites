"use client";

import Link from "next/link";

import { SidebarClose } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { TicketCheck } from "lucide-react";
import { PencilLine } from "lucide-react";
import { Handshake } from "lucide-react";
import { Phone } from "lucide-react";
import { Building2 } from "lucide-react";
import { History } from "lucide-react";
import { Inbox } from "lucide-react";

import { useIsMenuOpen } from "@/hooks/useMenu";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

const Menu = () => {
  const routes = [
    {
      text: "Order",
      href: "/order",
      icon: ShoppingCart,
    },
    {
      text: "Redeem",
      href: "/redeem",
      icon: TicketCheck,
    },
    {
      text: "History",
      href: "/history",
      icon: History,
    },
    {
      text: "Inbox",
      href: "/inbox",
      icon: Inbox,
    },
    {
      text: "Terms",
      href: "/terms",
      icon: Handshake,
    },
    {
      text: "Contact",
      href: "/contact",
      icon: Phone,
    },
    {
      text: "About",
      href: "/about",
      icon: Building2,
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
        <Link
          href="/"
          className="text-xl bg-gradient-to-tr from-amber-200 to-yellow-500 bg-clip-text text-transparent font-semibold"
        >
          Crepe Bites
        </Link>
        <SidebarClose className="w-8" onClick={() => setIsMenuOpen(false)} />
      </section>
      <ul className="flex flex-col gap-9 border-t-2 border-yellow-400 pt-6">
        {routes.map((route) => (
          <MenuItem
            key={route.text}
            href={route.href}
            text={route.text}
            icon={route.icon}
          />
        ))}
      </ul>
    </section>
  );
};

interface MenuItemProps {
  text: string;
  icon: any;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, icon: Icon, href }) => {
  return (
    <Link
      href={href}
      key={text}
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
