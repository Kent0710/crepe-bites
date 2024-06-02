import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Link from "next/link";

import { validateRequest } from "@/lib/lucia";
import { SessionProvider } from "@/providers/SessionProvider";

const AuthButton = dynamic(() => import("./(site)/components//auth-button"))
const MenuToggle = dynamic(() => import("./(site)/components//menu-toggle"), { ssr: false })
const Menu = dynamic(() => import("./(site)/components//menu"), { ssr: false })

const kanit = Kanit({ weight: ["300"], subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Crepe Bites",
  description: "Crepe Bites Company Official Website",

};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sessionData = await validateRequest();

  const routes = [
    {
      text: "Order",
      href: "/order",
    },
    {
      text: "History",
      href: "/history",
    },
    {
      text: "Inbox",
      href: "/inbox",
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

  return (
    <html lang="en">
      <body className={kanit.className}>
        <header className="flex items-center gap-3 justify-between px-10 w-screen fixed h-16 z-50 bg-navy shadow-2xl">
          <section className="flex items-center gap-6">
            <Link
              href="/"
              className="text-xl bg-gradient-to-tr from-amber-200 to-yellow-500 bg-clip-text text-transparent font-semibold"
            >
              Crepe Bites
            </Link>
            <ul className="md:flex gap-3 hidden ">
              {routes.map((route) => (
                <Link
                  href={route.href}
                  key={route.text}
                  className="text-neutral-500"
                >
                  {route.text}
                </Link>
              ))}
            </ul>
          </section>
          <section className="flex gap-6 items-center">
            <p className="font-semibold text-sm bg-gradient-to-tr from-amber-200 to-yellow-500 bg-clip-text text-transparent truncate"> Hello, {sessionData.user?.username} </p>
            <AuthButton />
            <MenuToggle />
          </section>
        </header>
        <Menu />
        <SessionProvider value={sessionData}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
