// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

interface FooterColumn {
  title: string;
  items: string[];
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
        items: ["Apparel", "Automotive", "Filtration", "Customised Solutions"],
      },
      {
        title: "COMPANY",
        items: ["Innovation", "Global Competency", "About Us", "Contact Us"],
      },
      {
        title: "MORE",
        items: ["Careers", "Privacy Policy", "Terms and Conditions"],
      },
      {
        title: "FOLLOW US",
        items: ["Twitter", "LinkedIn", "Instagram", "Medium"],
      },
    ],
    address: "Supreme house: 110, 16th Road, Chembur, Mumbai - 400071",
    copyright: "©2023. All Rights Reserved.",
  };

  return (
    <footer className="bg-[url('/assets/footer_bg.jpg')] bg-contain bg-no-repeat text-black font-manrope py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-32">
        {/* Main footer content */}
        <div className="py-16">
          {/* Brand section */}
          <Image src="/assets/logo.svg" alt="Supreme Group" width={161} height={148} />
        </div>
          {/* Navigation columns */}
          <div className="grid grid-cols-4 gap-12 space-y-8">
          {footerData.columns.map((column, index) => (
            <div key={index} className="mt-6 md:mt-0">
              <h2 className="text-lg font-semibold mb-4 pb-2">
                {column.title}
              </h2>
              <ul className="space-y-3">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href="#" className="text-black transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>

        {/* Bottom section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">{footerData.copyright}</p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">{footerData.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;