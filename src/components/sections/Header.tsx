"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SharedButton from "../SharedButton";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const nav: NavItem[] = [
    { label: "About Us", href: "AboutUs" },
    { label: "Team", href: "Members" },
    { label: "Events", href: "UpcomingEvents" },
    { label: "Workshop", href: "/Workshop" },
  ];

  const handleScroll = (id: string) => {
    setIsSheetOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.warn(`Element with id "${id}" not found.`);
      }
    }, 300);
  };



  return (
    <div className=" flex justify-between items-center mx-auto container  lg:pt-6 px-6 max-w-[75rem]  ">
      <div className="flex items-center" >
        <svg
          width="90"
          height="70"
          viewBox="0 0 122 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-auto sm:h-24"
        >
          <path
            d="M28.5231 42.6594C33.0586 42.6594 36.7353 39.2302 36.7353 35C36.7353 30.7698 33.0586 27.3406 28.5231 27.3406C23.9877 27.3406 20.311 30.7698 20.311 35C20.311 39.2302 23.9877 42.6594 28.5231 42.6594Z"
            fill="#E57D1F"
          />
          <path
            d="M28.5231 61.6121L28.5231 69.3057C12.7748 69.3057 -0.00949526 57.3801 -0.00949526 42.6935V35C15.7388 35 28.5231 46.9256 28.5231 61.6121Z"
            fill="#6C2BF7"
          />
          <path
            d="M28.5231 0.694336V8.38787C28.5231 23.0762 15.7369 35 -0.00949526 35L-0.00949526 27.3065C-0.00949526 12.6182 12.7767 0.694336 28.5231 0.694336Z"
            fill="#9296F8"
          />
          <path
            d="M57.0557 35V42.6935C57.0557 57.3818 44.2695 69.3057 28.5231 69.3057L28.5231 61.6121C28.5231 46.9238 41.3094 35 57.0557 35Z"
            fill="#9296F8"
          />
          <path
            d="M57.0557 27.3082V35.0017C41.3074 35.0017 28.5231 23.0761 28.5231 8.38958V0.696045C44.2714 0.696045 57.0557 12.6217 57.0557 27.3082Z"
            fill="#6C2BF7"
          />
          <path
            d="M81.542 18.1131C80.4866 17.0119 79.4928 16.5503 78.1889 16.5503C76.5442 16.5503 75.2712 17.5059 75.2712 18.6933C75.2712 19.7351 75.9857 20.2866 78.4066 21.1255C80.7042 21.9068 81.6036 22.3415 82.5358 23.0655C83.7472 24.0211 84.3673 25.4114 84.3673 27.1197C84.3673 30.9135 81.4495 33.4894 77.1643 33.4894C74.1849 33.4894 71.9181 32.3308 70.0558 29.8123L72.6635 27.4664C73.5956 29.1172 75.1479 30.0441 77.0103 30.0441C78.8726 30.0441 80.2073 28.8855 80.2073 27.3227C80.2073 26.5413 79.8356 25.8749 79.0903 25.3827C78.6858 25.0935 77.9116 24.8043 76.2033 24.2241C72.4786 22.9792 71.1112 21.5602 71.1112 19.013C71.1112 15.7707 73.8441 13.396 77.5688 13.396C79.8356 13.396 81.9156 14.1199 83.6528 15.539L81.542 18.1167V18.1131Z"
            fill="#191615"
          />
          <path
            d="M91.1042 25.061L96.1328 20.4859H101.225L94.9233 25.9879L101.722 33.024H96.5373L91.5087 27.6387L91.1042 28.0159V33.0258H87.3487V11.3391H91.1042V25.0646V25.061Z"
            fill="#191615"
          />
          <path
            d="M107.488 15.2103C107.488 16.3671 106.465 17.3209 105.225 17.3209C103.985 17.3209 102.962 16.3671 102.962 15.1815C102.962 13.996 103.985 13.0996 105.225 13.0996C106.465 13.0996 107.488 14.0534 107.488 15.2103ZM107.086 33.0241H103.334V20.5022H107.086V33.0241Z"
            fill="#191615"
          />
          <path d="M114 33.0241H110.248V11.3625H114V33.0241Z" fill="#191615" />
          <path
            d="M121.357 33.0241H117.601V11.3374H121.357V33.0241Z"
            fill="#191615"
          />
          <path
            d="M75.458 49.7403C75.458 51.709 75.5812 52.3467 76.1089 53.1856C76.7926 54.2849 78.1889 54.9801 79.7412 54.9801C81.2935 54.9801 82.6898 54.2849 83.3735 53.1856C83.9012 52.3467 84.0245 51.709 84.0245 49.7403V38.6787H88.0612V50.493C88.0612 52.7509 87.5952 54.3442 86.5398 55.6465C85.1107 57.3835 82.5666 58.4254 79.7412 58.4254C76.9159 58.4254 74.3698 57.3835 72.9427 55.6465C71.8873 54.3442 71.4212 52.7509 71.4212 50.493V38.6787H75.458V49.7403Z"
            fill="#191615"
          />
          <path
            d="M96.8473 57.9925H92.8106V38.6787H98.8638C101.564 38.6787 103.024 39.0847 104.328 40.1553C105.662 41.2851 106.438 42.9647 106.438 44.8167C106.438 46.4675 105.818 48.059 104.763 49.1314C103.584 50.29 101.907 50.8396 99.455 50.8396H96.8473V57.9907V57.9925ZM98.4921 47.5686C101.007 47.5686 102.28 46.6417 102.28 44.7897C102.28 43.8628 101.876 43.024 101.225 42.5605C100.605 42.1258 99.7343 41.9534 98.2455 41.9534H96.8492V47.5704H98.494L98.4921 47.5686Z"
            fill="#191615"
          />
        </svg>
      </div>

      <div className="lg:max-w-[72.063rem]">
        <div className=" flex   lg:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger aria-label="Open menu">
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle hidden></SheetTitle>
              </SheetHeader>
              <div className="space-y-8">
                <ul className="pt-10 space-y-8 text-lg font-medium ">
                  {nav.map((item, index) => (
                    <li
                      key={index}
                      className=" hover:text-purple-600 border-b-2 pb-2 "
                      onClick={() => handleScroll(item.href)}
                    >
                      {item.label === "Workshop" ? (
                        <Link href="/Workshop">
                          {item.label}
                        </Link>
                      ) : (
                        <div>{item.label}</div>
                      )}
                    </li>
                  ))}
                </ul>
                <SharedButton variant="custm1" />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="hidden lg:flex justify-between gap-6 ">
            {nav.map((item, index) => (
              <li
                key={index}
                className="flex justify-center text-[0.9rem] font-adlam  "
              >
                <button
                  className="text-black border-2 border-gray-300 rounded-2xl w-24 h-9  hover:border-gray-600 transition-colors"
                  onClick={() => handleScroll(item.href)}
                >
                  {item.label === "Workshop" ? (
                    <Link href="/Workshop" >
                      {item.label}
                    </Link>
                  ) : (
                    <div>{item.label}</div>
                  )}
                </button>
              </li>
            ))}
          </ul>
          <div className=" hidden lg:block">
            <SharedButton variant="custm1" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
