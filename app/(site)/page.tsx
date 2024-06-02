// yellow - f9c81a
// brown - 5e2d21
// navy - [#161821]

import Image from "next/image";
import crepebiteslogo from "@/public/crepebiteslogo.jpg";
import crepebitesproduct from "@/public/crepebitesproduct.jpg"
import conceptImage from "@/public/conceptimage.png"
import goalImage from "@/public/goalImage.png"
import teamImage from "@/public/teamImage.png"
import kentImage from "@/public/kentImage.png"

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
import { CheckCheck } from "lucide-react";
import { Cross } from "lucide-react";
import { Smile } from "lucide-react";
import { Copyright } from "lucide-react";

import Link from "next/link";

import { Suspense } from "react";

import { Form } from "@/lib/form";
import { ActionResult } from "@/lib/form";
import { validateRequest } from "@/lib/lucia";

export default async function App() {
  const { user } = await validateRequest();

  return (
    <Suspense fallback={<p>loading</p>}>
      <div className="flex flex-col gap-6 items-center text-white bg-[#161821] h-fit py-6 pt-24 text-sm shadow-2xl">
        <section className="px-10 flex justify-center items-center pb-14 h-fit gap-14 md:gap-24 flex-wrap shadow-2xl shadow-black">
          <section>
            <h1 className="text-7xl text-center">
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
                Everybody
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
            <p className="text-center">Exclusive PHP 35.00 only if you order through our website. Save PHP 5.00!</p>
          </section>
          <Image
            src={crepebitesproduct}
            alt="crepebitesproduct"
            width={500}
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
            <Link
              href="/signUp"
              className="bg-navy shadow-2xl text-yellow-400 flex flex-col gap-3 items-center  p-10 bg-opacity-90  w-72"
            >
              <p className="absolute text-7xl place-self-start opacity-20 p-10 px-12 border-4 border-neutral-600  rounded-full">
                01
              </p>
              <LogIn size={60} />
              <p>Create an account</p>
            </Link>
            <Link
              href="/order"
              className=" bg-navy shadow-2xl text-yellow-400 0 flex flex-col gap-3 items-center  p-10 bg-opacity-90  w-72"
            >
              <p className="absolute text-7xl place-self-center opacity-20 p-10 border-4 border-neutral-600 rounded-full">
                02
              </p>
              <ShoppingCart size={60} />
              <p>Place an order</p>
            </Link>
            <Link
              href="/order"
              className="bg-navy shadow-2xl text-yellow-400  flex flex-col gap-3 items-center bg-opacity-90  p-10 w-72"
            >
              <p className="absolute text-7xl place-self-end opacity-20  p-10 border-4 border-neutral-600 rounded-full">
                03
              </p>
              <Box size={60} />
              <p>Claim at the venue</p>
            </Link>
          </section>
        </div>
        <div className="px-10 flex flex-col gap-12">
          <h4 className="text-7xl opacity-50 pl-9 border-l-8 border-yellow-800">
            The Business
          </h4>
          <div className="flex flex-wrap gap-9 lg:gap-24 justify-center">
            <section className="w-80 flex flex-col gap-3 items-center">
              <Image src={conceptImage} alt="conceptImage" width={300} />
              <section>
                <h4 className="text-2xl font-semibold">Our concept</h4>
                <p className="text-justify">
                  At Crepe Bites, we introduce Fruipé: a delicious and
                  convenient mango crepe snack infused with malunggay for a
                  healthy twist. Each bite combines sweet mango jam and a touch
                  of chocolate syrup, creating a delightful, on-the-go treat
                  that satisfies your cravings without breaking the bank.
                </p>
              </section>
            </section>
            <section className="w-80 flex flex-col gap-3 items-center">
              <Image src={goalImage} alt="goalImage"  width={300} />
              <section>
                <h4 className="text-2xl font-semibold">Our goal</h4>
                <p className="text-justify">
                  Our goal is to produce and market delicious crepes, make it accessible and
                  affordable to everyone. We aim to bring the joy of sweet and
                  healthy treats to the community, creating a new standard in
                  the dessert market with our innovative, affordable and tasty creations.
                </p>
              </section>
            </section>
            <section className="w-80 flex flex-col gap-3 items-center">
              <Image src={teamImage} alt="teamImage"  width={300} />
              <section>
                <h4 className="text-2xl font-semibold">Our team</h4>
                <p className="text-justify">
                  Crepe Bites is brought to you by a passionate group of
                  students Grade 11 STEM-2301 class. Christian Kent Bayani, Wade
                  Zeus Chan, Feah Rose Gonzales, Paul Aaron Luistro, and Ken
                  Benedict Mallari work together to create and deliver our
                  unique and delicious Fruipé treats.
                </p>
              </section>
            </section>
          </div>
        </div>
        <h4 className="font-semibold text-xl text-navy text-center animate-bounce">
          Especially made, just for you.
        </h4>
        <div className="flex flex-col gap-9 px-10 md:px-20 py-10 bg-navy text-yellow-400">
          <section>
            <h4 className="font-semibold text-3xl">Our Focus</h4>
            <p className="text-white">
              The production at Crepe Bites are focused on implementing these
              features.
            </p>
          </section>
          <ul className="flex justify-center gap-6 md:gap-14 flex-wrap">
            <UniqueFeatureItem icon={HandCoins} title="Ready to go" description="Whether you are rushing to catch the bus or simply need a quick pick-me-up, our crepes are the perfect on-the-go snack." />
            <UniqueFeatureItem icon={CheckCheck} title="Affordable" description="We have made it our mission to keep our crepes affordable without compromising on quality or taste."/>
            <UniqueFeatureItem icon={Cross} title="Sweetness" description="Each ingredient is thoughtfully selected and combined to create a harmonious blend of flavors and balanced sweetness." />
            <UniqueFeatureItem icon={Smile} title="Healthy" description="From the malunggay leaves to the freshly made fruit jam filling, our crepes is designed to satisfy your health and cravings." />
          </ul>
        </div>
        <div className="px-36 flex flex-col gap-6">
          <h4 className="font-semibold text-2xl text-center md:place-self-start">
            The Developer
          </h4>
          <div className="flex items-center gap-9 flex-wrap justify-center">
            <Image
              src={kentImage}
              alt="paulImage"
              className="rounded-md shadow-lg"
              width={200}
            />
            <div className="flex flex-col gap-3 md:w-[60%]">
              <div className="flex gap-3 items-center">
                <Github size={30} />
                <section>
                  <h4 className="text-xl font-semibold">Christian Kent Bayani</h4>
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
        <Form
          className="flex flex-col gap-3 px-[3rem] md:px-[15rem] pb-14"
          action={async (
            prevState: any,
            formData: FormData
          ): Promise<ActionResult> => {
            "use server";
            const sendMessageServerAction = (
              await import("../../actions/send-message")
            ).default;
            return await sendMessageServerAction(prevState, user?.id, formData);
          }}
        >
          <section>
            <h4 className="text-xl font-semibold">Chat with us</h4>
            <p>Reach out for any concerns.</p>
          </section>
          <div className="flex flex-col gap-1">
            <p className="font-semibold opacity-80">
              Content{" "}
              <span className="font-normal italic">
                (minimum of 10 characters and maximum of 100 characters)
              </span>{" "}
            </p>
            <textarea
              required={true}
              maxLength={100}
              minLength={10}
              id="content"
              name="content"
              className="resize-none w-full px-4 py-2 rounded-md focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="flex w-full justify-center items-center font-semibold gap-3 bg-yellow-400 text-navy  px-10 py-2"
          >
            <Send className="w-4" />
            Send form
          </button>
        </Form>
      </div>
      <footer className="py-5 bg-navy text-yellow-400 flex flex-col gap-6 items-center text-sm">
        <Image
          src={crepebiteslogo}
          alt="crepebiteslogo"
          className="rounded-full w-20"
        />
        <div className="flex flex-col items-center">
          <p className="text-2xl font-semibold">Crepe Bites</p>
          <small className="underline">crepebites@gmail.com</small>
          <p className="text-yellow-700 text-center">
            From simple beginnings, to innovation shine, on a journey to
            betterment.
          </p>
        </div>
        <div className="flex gap-3 text-sm items-center">
          <Copyright />
          <p>2024 Crepe Bites. All rights reserved.</p>
        </div>
      </footer>
    </Suspense>
  );
}

interface UniqueFeatureItemProps {
  icon: any;
  title : string;
  description : string;
}

const UniqueFeatureItem: React.FC<UniqueFeatureItemProps> = ({
  icon: Icon,
  title,
  description
}) => {
  return (
    <li className="items-center border-2 border-white text-white px-10 p-5 w-60">
      <section className="flex gap-3 items-center">
        <Icon className="text-yellow-400 w-[15rem] h-[15rem] absolute opacity-20" />
        <p className="text-lg font-semibold text-yellow-400"> {title} </p>
      </section>
      <p className="text-justify">
        {description}
      </p>
    </li>
  );
};
