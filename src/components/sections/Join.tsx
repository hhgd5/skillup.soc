"use client"
import React from "react";
import SharedButton from "../SharedButton";



const Join = () => {
  return (
    <div className=" bg-[#6C2BF7] ">
      <div className="px-6  mx-auto w-full flex flex-col justify-center gap-5 py-8">
        <h1 className="font-yearOfCamel font-black text-[2.625rem] text-center text-white md:text-[3.5rem] ">
          Join Our Club
        </h1>
        <p className="font-roboto font-light text-[1rem] text-center text-[#FFFFEA] text-wrap md:text-[1.44rem]  ">
          Lorem ipsum dolor sit amet consectetur. At felis cras turpis
          vivamuerra fames eu aenean adipiscing. Dictum metus suspendisse nullam{" "}
        </p>
        <div className="mx-auto">
        
          <SharedButton  variant= "custm2" />
        </div>
      </div>
    </div>
  );
};

export default Join;
