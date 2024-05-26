'use client'

import { useIsMenuOpen } from "@/hooks/useMenu";

const Sidebar = () => {
  const { isMenuOpen, setIsMenuOpen } = useIsMenuOpen();

  if (!isMenuOpen) return

  return (
    <div className="z-50 bg-navy h-screen w-screen text-white absolute">
        this is the sidebar
    </div>
  )
};

export default Sidebar;
