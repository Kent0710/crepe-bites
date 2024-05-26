import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import crepebiteslogo from "@/public/crepebiteslogo.jpg";
import paul from "@/public/paul.png";

import { ChevronRight } from "lucide-react";
import { Mail } from "lucide-react";

export default async function AboutPage() {
  const tableOfContentsItems = [
    "Executive Summary",
    "Background of the Company",
    "The Business",
    "Mission, Vision and Purpose",
    "Organizational Structure",
  ];

  return (
    <div className="flex flex-col items-center pt-20 py-5 md:px-36  text-sm text-chocolate">
      <div className="flex flex-col gap-6 p-10 shadow-lg w-full">
        <section>
          <h1 className="font-semibold text-2xl">About Us</h1>
          <p>
            Explore what our company is all about, what we offer, how we
            started, and who we are.
          </p>
        </section>
        <section className="border-t-2 border-chocolate pt-6">
          <h4 className="font-semibold text-xl">Table Of Contents</h4>
          <p>
            The content of this page is as follows. Get to know more about the
            team behind Crepe Bites.
          </p>
        </section>
        <div className="flex gap-6 flex-wrap md:flex-nowrap">
          <section className="w-full md:basis-[30%]">
            <ul>
              {tableOfContentsItems.map((item) => (
                <TableOfContentsItem key={item} text={item} />
              ))}
            </ul>
          </section>
          <section className="md:basis-[60%] flex flex-col gap-6 h-screen overflow-auto">
            <ExecutiveSummary />
            <BackgroundOfTheCompany />
            <BusinesAndProductName />
            <MissionVisionAndPurpose />
            <OrganizationalStructure />
          </section>
        </div>
      </div>
    </div>
  );
}

interface TableOfContentsItemProps {
  text: string;
}

export const TableOfContentsItem: React.FC<TableOfContentsItemProps> = ({
  text,
}) => {
  return (
    <li className="p-3 border-b-2 flex items-center justify-between hover:bg-neutral-200">
      {text}
    </li>
  );
};

interface TableOfContentsHeaderProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const TableOfContentsHeader: React.FC<TableOfContentsHeaderProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <p className="font-semibold text-lg">{title}</p>
      {children}
    </div>
  );
};

const ExecutiveSummary = () => {
  return (
    <TableOfContentsHeader title="Executive Summary">
      <p className="text-justify px-5">
        It is undeniable that mangoes are beloved by many, but their price has
        been steadily increasing over time. As a result, desserts featuring
        mangoes are becoming less common, and when they are available, they tend
        to be quite expensive. The limited availability of mango desserts can be
        challenging for those who crave the tropical fruit sweet and satisfying
        flavor. Additionally, the scarcity of affordable mango dessert options
        means that many people miss out on experiencing the delightful
        combination of mangoes in their favorite sweet treats. <br />
        <br /> In the Philippines, the mango season peaks from March to June,
        and it is during this time that we have envisioned a fresh dessert
        concept. Our team at Crepe Bites is excited to introduce Fruipé, a
        delightful treat that marries the sweetness of ripe mangoes with the
        convenience of on-the-go snacking. Our aim is to set a new benchmark for
        desserts that not only tantalize the taste buds but also remain
        accessible to everyone. Fruipé is more than just a dessert; it iss our
        commitment to bringing a slice of luxury to everyday life without the
        heavy price tag, ensuring that the joy of a delicious mango crepe can be
        a regular indulgence for all. <br />
        <br /> At a reasonable price of PHP 40.00, we assure the customers that
        the deliciousness of the crepe and the sweetness of mango fully indulge
        the taste and meet their expectations. Crepe bites is a on the go
        hand-sized box with four slices of mango crepe inside. Crepe bites is a
        on the go hand-sized box with four slices of mango crepe inside. The
        crepe is not just a simple crepe, it is cooked with tin sliced malunggay
        to enhance the healthiness of the crepe. The crepe comes with a
        chocolate syrup, to further enhance the overall flavor of the dish. The
        mango inside is not just sliced, it is cooked into sweetness and made as
        mango jam. The product is on the go healthy sweet delight that
        completely bite size but still captures the sweet tooths of our
        customers. <br />
        <br /> Creating desserts with mangoes at their core presents an
        opportunity to address this gap in the market. By offering delicious
        mango-based desserts at more accessible prices, you can cater to a wider
        audience and provide a solution for those who are eager to enjoy mangoes
        in a dessert but find existing options financially out of reach. This
        approach not only satisfies the demand for mango-flavored desserts but
        also makes them more inclusive and attainable for everyone to enjoy.
        Ultimately, by providing affordable and delicious mango desserts, you
        can fill a niche in the dessert market and bring joy to mango lovers
        everywhere.
      </p>
    </TableOfContentsHeader>
  );
};

const BackgroundOfTheCompany = () => {
  return (
    <TableOfContentsHeader title="Background of the Company">
      <p className="text-justify px-5">
        The creators at Crepe Bites came up with a new dessert called Fruipé. It
        is a convenient treat for mango and sweet enthusiasts, blending their
        favorite flavors into one affordable option. The company was started by
        a group of people who wanted to set a new standard for desserts using
        basic crepes while still satisfying customers cravings. The founders are
        students from Grade 11 STEM-2301 at NU Lipa from the school year
        2023-2024.
      </p>
    </TableOfContentsHeader>
  );
};

const BusinesAndProductName = () => {
  return (
    <TableOfContentsHeader title="Business and Product Name">
      <div className="px-5 flex flex-col gap-3">
        <p className="font-semibold">
          Business Name: <span className="font-normal">Crepe Bites</span>
        </p>
        <p className="font-semibold">
          Product Name: <span className="font-normal">Fruipe</span>
        </p>
        <p className="font-semibold">
          Tagline:{" "}
          <span className="font-normal">Crepe it healthy with Crepe Bites</span>
        </p>
        <p className="font-semibold">Logo:</p>
        <div className="font-semibold w-full flex justify-center">
          <Image
            src={crepebiteslogo}
            alt="crepebiteslogo"
            className="rounded-full w-[10rem]"
          />
        </div>
        <p className="font-semibold text-justify">
          Logo Description:{" "}
          <span className="font-normal">
            Starting with the “Crepe Bites” to highlight the company name.
            Following it with a big text of Fruipé to indicate its name as the
            product. Every color of the text is inspired by the color of the
            mango. The blemishes on the crepe represents the tiny sliced
            malunggay infused inside. The bright yellow of the mango inside
            symbolizes its cooking style with the sugar. The chocolate drizzle
            is placed just on the crepe not on the entire dessert because it is
            optional. Finally, adding a yellow circle to emphasize the playful
            flavor of the mango and to represents that our crepe revolves around
            mango with malunggay crepe.{" "}
          </span>
        </p>
      </div>
    </TableOfContentsHeader>
  );
};

const MissionVisionAndPurpose = () => {
  return (
    <TableOfContentsHeader title="Mission, Vision and Purpose">
      <div className="flex flex-col gap-3 px-5">
        <div>
          <h2 className="font-semibold">Mission</h2>
          <p>
            Crepe Bites aims to provide consumers with a delicious and sweet
            dessert experience. It aims to satisfy cravings for a sweet treat
            with the light of crepe pastry.
          </p>
        </div>
        <div>
          <h2 className="font-semibold">Vision</h2>
          <p>
            Crepe Bites aims to create a new dessert standard around simple
            crepe, incorporating it with different fruits as months go by for
            different preferences.
          </p>
        </div>
        <div>
          <h2 className="font-semibold">Purpose</h2>
          <p className="text-justify">
            Many people adore mangoes, but their cost has been rising
            consistently. Consequently, mango-based desserts are becoming rarer
            and pricier. This shortage of mango treats can be disheartening for
            those who enjoy the fruits sweet and tangy taste. Moreover, the lack
            of affordable mango desserts means that many miss out on the joy of
            combining mangoes with their favorite sweets. <br />
            <br /> We aim to create a new dessert standard around simple crepe,
            incorporating it with mangoes, malunggay and chocolate syrup for an
            amazing combination. We hope to inspire others to innovate and play
            with flavors that might become a hit to consumers. We guarantee that
            our product will offer both sweetness and healthiness, while also
            delivering delicious flavor that delights our customers taste buds.{" "}
            <br />
            <br />
            Our product features a delicious mango crepe infused with malunggay
            for added health benefits. Inside, you will find sweet, cooked
            mangoes mixed with sugar, creating a delightful filling. To cater to
            various tastes, we top it off with a generous drizzle of chocolate.
            This combination offers a treat that not only satisfies your
            cravings but also provides a nutritious twist with the inclusion of
            malunggay. Whether you are a fan of sweet desserts or looking for
            something a bit healthier, our mango crepe has something for
            everyone to enjoy.
          </p>
        </div>
      </div>
    </TableOfContentsHeader>
  );
};

const OrganizationalStructure = () => {
  return (
    <TableOfContentsHeader title="Organizational Structure">
      <p>Get to know the team behind Crepe Bites.</p>
      <div className="px-5 flex flex-col gap-3">
        <OrganizationalStructureItem
          src={paul}
          alt="paulImage"
          position="Operation Manager"
          name="Christian Kent Bayani"
          email="crepebitesoperationmanager@gmail.com"
          description="Ensure the products or services meet the company quality requirements."
        />
        <OrganizationalStructureItem
          src={paul}
          alt="paulImage"
          position="Planning Head"
          name="Paul Aaron Luisro"
          email="crepebitesplanninghead@gmail.com"
          description="Decide how to use the available resources to implement the plans."
        />
        <OrganizationalStructureItem
          src={paul}
          alt="paulImage"
          position="Production Head"
          name="Chan Wade Zeus"
          email="crepebitesproductionhead@gmail.com"
          description="Make sure the manufacturing or assembly of products is running smoothly."
        />
        <OrganizationalStructureItem
          src={paul}
          alt="paulImage"
          position="Sales and Marketing Head"
          name="Ken Benedict Mallari"
          email="crepebitessalesandmarketing@gmail.com"
          description="Creates plans and strategies to promote the company product."
        />
        <OrganizationalStructureItem
          src={paul}
          alt="paulImage"
          position="Finance Head"
          name="Feah Rose Gonzales"
          email="crepebitesfinancehead@gmail.com"
          description="Responsible for overseeing all financial operations of the company."
        />
      </div>
    </TableOfContentsHeader>
  );
};

interface OrganizationalStructureItemProps {
  src: string | StaticImport;
  alt: string;
  position: string;
  name: string;
  email: string;
  description: string;
}

const OrganizationalStructureItem: React.FC<
  OrganizationalStructureItemProps
> = ({ src, alt, position, name, email, description }) => {
  return (
    <div className="flex gap-3 items-center hover:bg-neutral-200 rounded-md flex-wrap">
      <Image src={src} alt={alt} className="w-[10rem] rounded-md shadow-lg" />
      <section className="flex flex-col gap-3">
        <div>
          <p>{position}</p>
          <h3 className="font-semibold text-lg"> {name} </h3>
        </div>
        <p>{description}</p>
        <div className="flex gap-3 text-blue-500">
          <Mail className="w-4" />
          <small className=" underline">{email}</small>
        </div>
      </section>
    </div>
  );
};
