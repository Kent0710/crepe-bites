import Image from "next/image";
import crepebitesproduct from "@/public/crepebitesproduct.jpg";

import { Loader } from "lucide-react";

export default async function BlogPage() {
  const dummyData = [
    {
      title: "Discover the Delight of Crepe Bites",
      description:
        "Indulge in the delicious and healthy world of Crepe Bites. Perfect for satisfying your sweet cravings with a nutritious twist.",
    },
    {
      title: "A Healthy Twist on Your Favorite Treats",
      description:
        "Explore how Crepe Bites bring a healthy twist to your favorite sweet treats with their unique and nutritious ingredients.",
    },
    {
      title: "The Perfect Snack: Crepe Bites",
      description:
        "Discover why Crepe Bites are the perfect snack for any occasion, offering a blend of delicious flavors and wholesome ingredients.",
    },
    {
      title: "Elevate Your Snacking with Crepe Bites",
      description:
        "Elevate your snacking experience with Crepe Bites, a perfect blend of healthy ingredients and delicious flavors designed to delight.",
    },
    {
      title: "Discover the Delight of Crepe Bites",
      description:
        "Indulge in the delicious and healthy world of Crepe Bites. Perfect for satisfying your sweet cravings with a nutritious twist.",
    },
    {
      title: "A Healthy Twist on Your Favorite Treats",
      description:
        "Explore how Crepe Bites bring a healthy twist to your favorite sweet treats with their unique and nutritious ingredients.",
    },
    {
      title: "The Perfect Snack: Crepe Bites",
      description:
        "Discover why Crepe Bites are the perfect snack for any occasion, offering a blend of delicious flavors and wholesome ingredients.",
    },
    {
      title: "Elevate Your Snacking with Crepe Bites",
      description:
        "Elevate your snacking experience with Crepe Bites, a perfect blend of healthy ingredients and delicious flavors designed to delight.",
    },
  ];

  return (
    <div className="flex flex-col items-center pt-20 py-5 md:px-36  text-sm text-chocolate">
      <div className="flex flex-col gap-6 p-10 shadow-lg w-full">
        <section>
          <h1 className="font-semibold text-2xl">Blog Posts</h1>
          <p>Discover and share amazing moments with Crepe Bites.</p>
        </section>
        <ul className="flex flex-wrap gap-6 justify-center">
          {dummyData.map((blogItem) => (
            <BlogItem
              key={blogItem.title}
              title={blogItem.title}
              description={blogItem.description}
            />
          ))}
        </ul>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 py-2 border-2 border-chocolate"
        >
          <Loader className="w-4" />
          Load More
        </button>
      </div>
    </div>
  )
}

interface BlogItemProps {
  title: string;
  description: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ title, description }) => {
  return (
    <li className="flex flex-col gap-3 w-[12rem] md:w-[15rem] hover:bg-neutral-200 rounded-md p-3">
      <Image
        src={crepebitesproduct}
        alt="crepebitesproduct"
        className="ronuded-md w-[12rem] sm:w-[15rem] h-[6rem] sm:h-[9rem] object-cover rounded-t-md"
      />
      <section>
        <h2 className="font-semibold text-lg">{title}</h2>
        <p>{description}</p>
      </section>
    </li>
  );
};
