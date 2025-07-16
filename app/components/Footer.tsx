// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

interface Items {
    item: string;
    link: string;
}
interface FooterColumn {
  title: string;
  items: Items[];
}

interface FooterProps {
  columns: FooterColumn[];
  address: string;
  copyright: string;
}

const Footer = () => {
  const footerData: FooterProps = {
    columns: [
      {
        title: "APPLICATIONS",
        items: [{item: "Apparel", link: "/#"}, {item: "Automotive", link: "/#"}, {item: "Filtration", link: "/#"}, {item: "Customised Solutions", link: "/#"}],
      },
      {
        title: "COMPANY",
        items: [{item: "Innovation", link: "/#"}, {item: "Global Competency", link: "/#"}, {item: "About Us", link: "/#"}, {item: "Contact Us", link: "/#contact"}],
      },
      {
        title: "MORE",
        items: [{item: "Careers", link: "/#"}, {item: "Privacy Policy", link: "/#"}, {item: "Terms and Conditions", link: "/#"}],
      },
      {
        title: "FOLLOW US",
        items: [{item: "Twitter", link: "/#"}, {item: "LinkedIn", link: "/#"}, {item: "Instagram", link: "/#"}, {item: "Medium", link: "/#"}],
      },
    ],
    address: "Supreme house: 110, 16th Road, Chembur, Mumbai - 400071",
    copyright: "©2023. All Rights Reserved.",
  };

  return (
    <footer className="max-h-full bg-[url('/assets/footer_bg.jpg')] bg-cover bg-no-repeat text-black font-manrope py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-32">
        {/* Main footer content */}
        <div className="py-8 sm:py-12 md:py-16">
          {/* Brand section */}
          <Image src="/assets/logo.svg" alt="Supreme Group" width={161} height={48} />
        </div>
        {/* Navigation columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {footerData.columns.map((column, index) => (
            <div key={index} className="mt-6 md:mt-0">
              <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 pb-2">
                {column.title}
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {column.items.map(({ item, link }, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={link} className="text-black transition-colors text-sm sm:text-base">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">{footerData.copyright}</p>
            <p className="text-gray-500 text-xs sm:text-sm text-center md:text-right">{footerData.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;