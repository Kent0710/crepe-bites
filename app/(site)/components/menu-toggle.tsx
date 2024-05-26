"use client";

import Link from "next/link";

import { Menu } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { SidebarClose } from "lucide-react";
import { LogIn } from "lucide-react";

import { useEffect, useState } from "react";

import { useIsMenuOpen } from "@/hooks/useMenu";

const MenuToggle = () => {
  const {setIsMenuOpen} = useIsMenuOpen()

  return (
    <Menu className="text-white md:hidden" onClick={() => setIsMenuOpen(true)} />
  );
};

export default MenuToggle;
