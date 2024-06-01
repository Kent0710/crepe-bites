"use client";

import { Menu } from "lucide-react";

import { useIsMenuOpen } from "@/hooks/useMenu";

const MenuToggle = () => {
  const {setIsMenuOpen} = useIsMenuOpen()

  return (
    <Menu className="text-white md:hidden" onClick={() => setIsMenuOpen(true)} />
  );
};

export default MenuToggle;
