"use client";
import React from "react";
import SharedButton from "../SharedButton";

const Join = () => {
  return (
    <div className=" bg-[#6C2BF7]">
      <div className="px-6  mx-auto w-full flex flex-col justify-center  py-8">
        <h1 className="font-yearOfCamel font-black text-[2.625rem] text-center text-white md:text-[3.5rem] ">
          Join Our Club
        </h1>
        <p className="font-roboto font-light text-[1rem] text-center text-[#FFFFEA] text-wrap md:text-[1.44rem]  ">
          Become part of SkillUP Society—a community that fosters growth,
          learning, and innovation. Empower yourself with new skills and connect
          with like-minded individuals
        </p>
        <div className="mx-auto mt-4">
          <SharedButton variant="custm2" />
        </div>
      </div>
    </div>
  );
};

export default Join;
