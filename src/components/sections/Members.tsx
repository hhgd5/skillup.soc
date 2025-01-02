import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "../ui/card";
import Image from "next/image";

const Members = () => {
  type Members = {
    img: string;
    name: string;
    role: string;
  };
  const member: Members[] = [
    { img: "/assets/memberPics/image.png", name: "Menahi Ayad", role: "Admin" },
    { img: "/assets/memberPics/image.png", name: "Menahi Ayad", role: "Admin" },

    { img: "/assets/memberPics/image.png", name: "Menahi Ayad", role: "Admin" },

    { img: "/assets/memberPics/image.png", name: "Menahi Ayad", role: "Admin" },

    {
      img: "/assets/memberPics/image.png",
      name: "Bezzina Badis",
      role: "Admin",
    },
    { img: "/assets/memberPics/image.png", name: "Hadfi Okba", role: "Admin" },
    {
      img: "/assets/memberPics/image.png",
      name: "Djedouani Abdalah",
      role: "Admin",
    },
    { img: "/assets/memberPics/image.png", name: "Chorfi Fady", role: "Admin" },
  ];
  return (
    <div className="flex flex-col gap-12 md:max-w-[75rem] mx-auto container  min-h-fit py-14  ">
      <div className=" max-w-fit md:mx-auto px-6   w-full   ">
        <h2 className="font-playball text-[2.25rem]  text-start mx-auto  md:mb-2    ">
          Our
        </h2>
        <h1 className="text-4xl md:text-[4.5rem] text-[#6E3AFF] font-semibold mb-2 md:mb-4 font-yearOfCamel ">
          Founding Members
        </h1>
        <p className="text-black text-[1.2rem] font-roboto opacity-[75%] text-start md:text-center font-normal">
          Meet The Creators
        </p>
      </div>
      <div className="maw-w-6x">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className=""
        >
          <CarouselContent>
            {member.map((member, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/4  ">
                <div key={index} className="relative flex justify-center">
                  <Card className="flex  justify-center">
                    <Image
                      src={member.img}
                      alt={`${member.name}'s profile image`}
                      width={400}
                      height={400}
                      loading="eager"
                      className=" w-40  md:w-52 md:h-full "
                    />
                    <div className="absolute bottom-2 bg-[#FAF9F6] font-montserrat text-start bg-opacity-80 px-8 py-1 rounded-lg shadow-lg mx-auto">
                      <h2 className="font-bold text-[#000000] text-[1rem] ">
                        {member.name}
                      </h2>
                      <h3 className="text-sm text-gray-600">{member.role}</h3>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" md:flex" />
          <CarouselNext className="md:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default Members;
