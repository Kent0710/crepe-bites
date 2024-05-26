import Image from "next/image"
import crepebiteslogo from "@/public/crepebiteslogo.jpg"

export default async function LoginPage() {
    return (
        <div className="flex">
            <section className="basis-1/2 bg-[#f9c81a] text-[#5e2d21] h-screen flex flex-col gap-5 items-center justify-center">
                <Image 
                    src={crepebiteslogo}
                    alt="crepebiteslogo"
                    className="rounded-full w-[10rem]"
                />
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="font-bold text-4xl">
                        Crepe Bites
                    </h1>
                    <p className="text-center opacity-80">
                        A healthy malunggay crepe with delicious mango jam filling topping it all up with a drizzle of chocolate.
                    </p>
                </div>
                <small>
                    crepebites@gmail.com
                </small>
            </section>
            <section className="basis-1/2 flex items-center justify-center">
                <div className="w-[30rem] h-[25rem] shadow-lg p-5 rounded-md flex flex-col items-center">
                    <p className="font-bold">
                        Log In
                    </p>
                </div>
            </section>
        </div>
    )
}