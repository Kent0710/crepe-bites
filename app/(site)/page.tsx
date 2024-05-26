// yellow - f9c81a
// brown - 5e2d21
// navy - [#161821]

import Image from "next/image";
import crepebitesbackdrop from "@/public/crepebitesbackdrop.jpg";
import blogimage from "@/public/blogimage.jpg";
import paulImage from "@/public/paul.png";

import { LogIn } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Mail } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Box } from "lucide-react";
import { MousePointerClick } from "lucide-react";
import { HandCoins } from "lucide-react";
import { Github } from "lucide-react";
import { Send } from "lucide-react";
import { PencilLine } from "lucide-react";
import { CheckCheck } from "lucide-react";
import { Cross } from "lucide-react";
import { Smile } from "lucide-react";

import Link from "next/link";

const images = Array.from({ length: 10 });

export default async function App() {
  return (
    <>
      <div className="flex flex-col gap-6 items-center text-white bg-[#161821] h-fit py-6 pt-24 text-sm shadow-2xl">
        <section className="px-10 flex justify-center items-center pb-14 h-fit gap-14 md:gap-24 flex-wrap shadow-2xl shadow-black">
          <section>
            <h1 className="text-7xl">
              Crepe it
              <span className="text-yellow-300 font-semibold drop-shadow-glow">
                {" "}
                Healthy
              </span>
              ,
              <br /> Crepe it
              <span className="text-yellow-300 font-semibold drop-shadow-glow">
                {" "}
                Trendy
              </span>
              ,
              <br /> Crepe for
              <span className="text-yellow-300 font-semibold drop-shadow-glow">
                {" "}
                Keepings
              </span>
              .
            </h1>
            <Link
              href="/order"
              className="mt-9 text-yellow-400 border-2 border-yellow-400 py-3 w-full justify-center px-20 flex items-center gap-3 place-self-center
            hover:bg-navy hover:bg-opacity-10"
            >
              <MousePointerClick className="w-4 shrink-0" />
              Order Now
            </Link>
            <p className="text-center mt-3">
              Or{" "}
              <Link href="/redeem" className="text-blue-500 underline">
                redeem
              </Link>{" "}
              a code.
            </p>
          </section>
          <Image
            src={crepebitesbackdrop}
            alt="crepebitesbackdrop"
            className="w-[30rem]"
          />
        </section>
        <div className="flex items-center gap-3 px-10 text-neutral-400 justify-between w-screen">
          <section className="flex">
            <Facebook className="w-14" />
            <Instagram className="w-14" />
            <Mail className="w-14" />
          </section>
          <small>
            Crepe Bites offers a new dessert standard for all. Affordable and
            healthy option to satisfy your sweet cravings.
          </small>
        </div>
      </div>
      <div className="flex flex-col gap-12  text-[#5e2d21] ">
        <div className="flex flex-col gap-6 py-10 items-center justify-center bg-yellow-200 text-navy shadow-2xl">
          <section>
            <h4 className="font-semibold text-5xl">How it works</h4>
            <p className="text-center">Click on each step to proceed.</p>
          </section>
          <section className="flex items-center gap-6 flex-wrap justify-center">
            <div className="bg-navy shadow-2xl text-yellow-400 flex flex-col gap-3 items-center  p-10 bg-opacity-90  w-72">
              <p className="absolute text-7xl place-self-start opacity-20 p-10 px-12 border-4 border-neutral-600  rounded-full">
                01
              </p>
              <LogIn size={60} />
              <p>Create an account</p>
            </div>
            <div className=" bg-navy shadow-2xl text-yellow-400 0 flex flex-col gap-3 items-center  p-10 bg-opacity-90  w-72">
              <p className="absolute text-7xl place-self-center opacity-20 p-10 border-4 border-neutral-600 rounded-full">
                02
              </p>
              <ShoppingCart size={60} />
              <p>Place an order</p>
            </div>
            <div className="bg-navy shadow-2xl text-yellow-400  flex flex-col gap-3 items-center bg-opacity-90  p-10 w-72">
              <p className="absolute text-7xl place-self-end opacity-20  p-10 border-4 border-neutral-600 rounded-full">
                03
              </p>
              <Box size={60} />
              <p>Claim at the venue</p>
            </div>
          </section>
        </div>
        <div className="px-10 flex flex-col gap-12">
          <h4 className="text-7xl opacity-50 pl-9 border-l-8 border-yellow-800">
            The Business
          </h4>
          <div className="flex flex-wrap gap-9 lg:gap-24 justify-center">
            <section className="w-80 flex flex-col gap-3 items-center">
              <Image src={blogimage} alt="blogimage" className="w-full" />
              <section>
                <h4 className="text-2xl font-semibold">Our concept</h4>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </section>
            </section>
            <section className="w-80 flex flex-col gap-3 items-center">
              <Image src={blogimage} alt="blogimage" className="w-full" />
              <section>
                <h4 className="text-2xl font-semibold">Our concept</h4>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </section>
            </section>
            <section className="w-80 flex flex-col gap-3 items-center">
              <Image src={blogimage} alt="blogimage" className="w-full" />
              <section>
                <h4 className="text-2xl font-semibold">Our concept</h4>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </section>
            </section>
          </div>
        </div>

        <div className="flex flex-col gap-9 px-10 md:px-20 py-10 bg-navy text-yellow-400">
          <section>
            <h4 className="font-semibold text-3xl">Our Focus</h4>
            <p className="text-white">
              The production at Crepe Bites are focused on implementing these
              features.
            </p>
          </section>
          <ul className="flex justify-center gap-6 md:gap-14 flex-wrap">
            <UniqueFeatureItem icon={HandCoins} />
            <UniqueFeatureItem icon={CheckCheck} />
            <UniqueFeatureItem icon={Cross} />
            <UniqueFeatureItem icon={Smile} />
          </ul>
        </div>
        <h4 className="font-semibold text-xl text-navy text-center animate-bounce">
          Especially made, just for you.
        </h4>
        <div className="flex flex-col gap-9 px-10">
          <h4 className="text-7xl opacity-50 pl-9 border-l-8 border-yellow-800">
            The Gallery
          </h4>
          <section className="flex gap-6 overflow-x-auto">
            {images.map((_, index) => (
              <Image
                key={index} // Add a key to each element for unique identification
                src={crepebitesbackdrop}
                alt="crepebitesbackdrop"
                className="w-40"
              />
            ))}
          </section>
        </div>
        <div className="flex flex-col gap-9 bg-chocolate px-10  w-full text-white py-10">
          <section>
            <h4 className="font-semibold text-3xl">
              Community through delights
            </h4>
            <p className="text-neutral-400">
              Capture amazing moments anywhere and anytime with Crepe Bites.
            </p>
          </section>
          <ul className="flex gap-6 overflow-x-auto z-10">
            <li className="flex gap-3 items-center">
              <Image
                src={blogimage}
                alt="blogimage"
                className="rounded-t-md w-40"
              />
              <section className="w-72">
                <h4 className="font-semibold">
                  Discover the Delight of Crepe Bites
                </h4>
                <p className="text-neutral-400">Indulge in the...</p>
              </section>
            </li>
            <li className="flex gap-3 items-center">
              <Image
                src={blogimage}
                alt="blogimage"
                className="rounded-t-md w-40"
              />
              <section className="w-72">
                <h4 className="font-semibold">
                  Discover the Delight of Crepe Bites
                </h4>
                <p className="text-neutral-400">Indulge in the...</p>
              </section>
            </li>
            <li className="flex gap-3 items-center">
              <Image
                src={blogimage}
                alt="blogimage"
                className="rounded-t-md w-40"
              />
              <section className="w-72">
                <h4 className="font-semibold">
                  Discover the Delight of Crepe Bites
                </h4>
                <p className="text-neutral-400">Indulge in the...</p>
              </section>
            </li>
            <li className="flex gap-3 items-center">
              <Image
                src={blogimage}
                alt="blogimage"
                className="rounded-t-md w-40"
              />
              <section className="w-72">
                <h4 className="font-semibold">
                  Discover the Delight of Crepe Bites
                </h4>
                <p className="text-neutral-400">Indulge in the...</p>
              </section>
            </li>
          </ul>
          <h4 className="absolute text-[10rem] mt-20 rotate-90 opacity-20">
            Build
          </h4>
          <Link
            href="/blog"
            className="border-2 border-white py-2 w-full flex justify-center items-center gap-3"
          >
            <PencilLine className="w-4 shrink-0" />
            See our blog page.
          </Link>
        </div>
        <div className="px-36 flex flex-col gap-6">
          <h4 className="font-semibold text-2xl text-center md:place-self-start">
            The Developer
          </h4>
          <div className="flex items-center gap-9 flex-wrap justify-center">
            <Image
              src={paulImage}
              alt="paulImage"
              className="rounded-md shadow-lg w-72 md:w-60 shrink-0"
            />
            <div className="flex flex-col gap-3 md:w-[60%]">
              <div className="flex gap-3 items-center">
                <Github size={30} />
                <section>
                  <h4 className="text-xl font-semibold">Namikazii Nakiri</h4>
                  <p className="underline">https://github.com/Kent0710</p>
                </section>
              </div>
              <p className="text-justify">
                A grade 11 student at the University of The Solar System.
                Started on the C++ programming language for game development.
                Eventually migrated to Python on Django for web development.
                Finally, discovered Next.JS and made it my main framework.
              </p>
              <h4 className="font-semibold">Other socials:</h4>
              <section className="flex">
                <Facebook className="w-14" />
                <Instagram className="w-14" />
                <Mail className="w-14" />
              </section>
            </div>
          </div>
        </div>
        <form className="px-14 md:px-80 bg-neutral-200 py-10 flex flex-col gap-3">
          <h4 className="text-xl font-semibold">Chat with us</h4>
          <div className="flex flex-col gap-1">
            <p className="font-semibold opacity-80">Name</p>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold opacity-80">Content</p>
            <textarea className="resize-none w-full px-4 py-2 rounded-md focus:outline-none" />
          </div>
          <button className="flex w-full justify-center items-center font-semibold gap-3 bg-yellow-400 text-navy  px-10 py-2">
            <Send className="w-4" />
            Send form
          </button>
        </form>
      </div>
    </>
  );
}

interface UniqueFeatureItemProps {
  icon: any;
}

const UniqueFeatureItem: React.FC<UniqueFeatureItemProps> = ({
  icon: Icon,
}) => {
  return (
    <li className="items-center border-2 border-white text-white px-10 p-5 w-60">
      <section className="flex gap-3 items-center">
        <Icon className="text-yellow-400 w-[15rem] h-[15rem] absolute opacity-20" />
        <p className="text-lg font-semibold text-yellow-400">Affordability</p>
      </section>
      <p className="text-justify">
        At Crepes Bites, we believe that everyone deserves to enjoy delicious
        treats without breaking the bank.
      </p>
    </li>
  );
};
