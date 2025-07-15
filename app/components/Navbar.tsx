import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTranslate } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const navigation = [{ name: "Dashboard", href: "#", current: true }];

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <GiHamburgerMenu aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <IoMdClose aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ms-2">
            <div className="flex shrink-0 items-center">
              <img
                alt="Blacksof Logo"
                src="/assets/logo.svg"
  
              />
            </div>
          </div>

          <div className="hidden lg:flex gap-[40px] items-center justify-center pr-2">
            <button className="bg-[#5CD6FF] text-black font-900 px-[30px] py-[10px] rounded-full cursor-pointer">
              Contact Us
            </button>
            <FaLinkedinIn
              aria-hidden="true"
              className="text-black w-[24px] h-[24px] cursor-pointer"
            />
            <span className="flex text-black justify-center items-center cursor-pointer">
              <BsTranslate className="text-black w-[24px] h-[24px] me-2" />
              Eng
            </span>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
        <div className="flex gap-[40px] items-center justify-center pr-2">
            <button className="bg-[#5CD6FF] text-black font-900 px-[30px] py-[10px] rounded-full cursor-pointer">
              Contact Us
            </button>
            <FaLinkedinIn
              aria-hidden="true"
              className="text-black w-[24px] h-[24px] cursor-pointer"
            />
            <span className="flex text-black justify-center items-center cursor-pointer">
              <BsTranslate className="text-black w-[24px] h-[24px] me-2" />
              Eng
            </span>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
