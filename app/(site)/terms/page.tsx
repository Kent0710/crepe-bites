import { TableOfContentsHeader } from "../about/page";
import { TableOfContentsItem } from "../about/page";

export default async function TermsPage() {
  const tableOfContentsItems = [
    "Definitions",
    "Use of the Website",
    "Products and Services",
    "Orders and Payments",
    "Shipping and Delivery",
    "Return and Refunds",
    "Privacy Policy (in development)",
    "Intellectual Property",
    "Limitation of Liability",
    "Changes to the Terms",
    "Contact Information",
  ];

  return (
    <div className="flex flex-col items-center pt-20 py-5 md:px-36  text-sm text-chocolate">
      <div className="flex flex-col gap-6 p-10 w-full">
        <section>
          <h1 className="font-semibold text-2xl">Terms and Conditions</h1>
          <p>
            By accessing or using our website, you agree to be bound by these
            Terms and Conditions. If you do not agree with any part of these
            terms, you must not use our website.
          </p>
        </section>
        <section className="border-t-2 border-chocolate pt-6">
          <h4 className="font-semibold text-xl">Table Of Contents</h4>
          <p>
            Each section is summarized through this topics. Please take your
            time to read as you access our website.
          </p>
        </section>
        <div className="flex gap-6">
          <section className="basis-[30%]">
            <ul>
              {tableOfContentsItems.map((item) => (
                <TableOfContentsItem key={item} text={item} />
              ))}
            </ul>
          </section>
          <section className="basis-[60%] flex flex-col gap-6">
            <Definitions />
            <UseOfTheWebsite />
            <ProductsAndServices />
            <OrdersAndPayments />
            <ShippingAndDelivery />
            <ReturnAndRefunds />
            <IntellectualProperty />
            <LimitationOfLiability />
            <ChangesToTheTerms />
            <ContactInformation />
          </section>
        </div>
      </div>
    </div>
  );
}

const Definitions = () => {
  return (
    <TableOfContentsHeader title="Definitions">
      <p className="text-justify">
        &quot;Crepe Bites,&quot; &quot;we,&quot; &quot;us,&quot; and
        &quot;our&quot; refer to Crepe Bites. &quot;You&quot; and
        &quot;user&quot; refer to the person accessing our website.
      </p>
    </TableOfContentsHeader>
  );
};

const UseOfTheWebsite = () => {
  return (
    <TableOfContentsHeader title="Use of the Website">
      <p className="text-justify">
        You agree to use our website only for lawful purposes. You are
        prohibited from using our site in any way that could harm, disable, or
        impair the site or interfere with any other party use and enjoyment of
        the site.
      </p>
    </TableOfContentsHeader>
  );
};

const ProductsAndServices = () => {
  return (
    <TableOfContentsHeader title="Products and Services">
      <p className="text-justify">
        Crepe Bites produces crepes with mango jam filling and a drizzle of
        chocolate syrup. Product availability, pricing, and delivery details are
        subject to change without notice.
      </p>
    </TableOfContentsHeader>
  );
};

const OrdersAndPayments = () => {
  return (
    <TableOfContentsHeader title="Orders and Payments">
      <p className="text-justify">
        To place an order, follow the instructions on our website. We only
        accept cash on the counter payment method or points redemption as
        detailed at checkout. Once an order is placed, you will receive an
        invoice. There are no order cancellations from the website.
      </p>
    </TableOfContentsHeader>
  );
};

const ShippingAndDelivery = () => {
  return (
    <TableOfContentsHeader title="Shipping And Delivery">
      <p className="text-justify">
        We do not ship or deliver our products. You claim your order at our
        location within the timeframe of your order, failure to do so will
        automatically result in order void.
      </p>
    </TableOfContentsHeader>
  );
};

const ReturnAndRefunds = () => {
  return (
    <TableOfContentsHeader title="Return and Refunds">
      <p className="text-justify">
        If you are not satisfied with your purchase, please contact our customer
        service and give us a feedback. We do not accept refunds.
      </p>
    </TableOfContentsHeader>
  );
};

const IntellectualProperty = () => {
  return (
    <TableOfContentsHeader title="Intellectual Property">
      <p className="text-justify">
        All content on this website, including text, graphics, logos, and
        images, is the property of Crepe Bites and protected by copyright laws.
        You may not use any content from our site without our prior written
        consent.
      </p>
    </TableOfContentsHeader>
  );
};

const LimitationOfLiability = () => {
  return (
    <TableOfContentsHeader title="Limitation of Liability">
      <p className="text-justify">
        Crepe Bites provides the website and its content on an as is basis. We
        do not warrant that the website will be error-free or uninterrupted. To
        the maximum extent permitted by law, we disclaim all warranties and
        liabilities for any damages arising from your use of the site.
      </p>
    </TableOfContentsHeader>
  );
};

const ChangesToTheTerms = () => {
  return (
    <TableOfContentsHeader title="Changes to the Terms">
      <p className="text-justify">
        Crepe Bites reserves the right to modify these Terms and Conditions at
        any time. Changes will be posted on this page, and your continued use of
        the website constitutes acceptance of such changes.
      </p>
    </TableOfContentsHeader>
  );
};

const ContactInformation = () => {
  return (
    <TableOfContentsHeader title="Contact Information">
      <p className="text-justify">
        For any questions or concerns regarding these Terms and Conditions,
        please contact us at crepebites@gmail.com or proceed to our contact page
        to reach out.
      </p>
    </TableOfContentsHeader>
  );
};
