import React from "react";

const AboutSection = () => {
  const goals = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur. At felis cras turpis",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur. At felis cras turpis",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur. At felis cras turpis",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet consectetur. At felis cras turpis",
    },
  ];

  return (
    <div className="bg-[#6C2BF7] text-white py-14 ">
      <div className="container mx-auto  px-6   w-full    md:max-w-[75rem] ">
        <div className="max-w-2xl mx-auto text-start mb-4 space-y-6  ">
          <div className="b max-w-fit md:space-y-2  md:mx-auto">
            <h2 className="font-playball md:max-w-md  text-[2.25rem] md:text-end  text-start  ">
              What&apos;s
            </h2>
            <h1 className="text-4xl md:text-[4.5rem] font-extrabold mb-6 font-yearOfCamel ">
              SkillUp Society?
            </h1>
          </div>

          <p className="text-[#FFFFEA] font-roboto md:text-[1.5rem] md:text-center md:max-w-[70rem] ">
            Lorem ipsum dolor sit amet consectetur. At felis cras turpis
            vivamerra fames eu aenean adipiscing. Dictum metus suspendisse
            nullam viverra aliquam volutpat elementum. Vulputate proin egestas
            lorem ferment
          </p>
        </div>

        <div className="relative w-full h-12   ">
          <svg
            className="w-full"
            height="48"
            viewBox="0 0 1200 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20C300 40 900 0 1200 20"
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="max-w-full md:text-center lg:mx-auto">
          <h2 className="font-playball max-w-md text-[1.5rem] lg:text-[2.25rem]  text-start lg:text-center mx-auto  ">
            Our
          </h2>
          <h1 className="text-4xl text-[2.625rem]  lg:text-[4.25rem] font-bold mb-6 font-yearOfCamel ">
            Goals
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12  md:max-w-full md:gap-8 mx-auto md:mx-4  items-center">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="flex justify-between items-center gap-4 mx-auto "
            >
              <div className="w-10 h-10  bg-white text-black text-[1.35rem] md:w-16 md:h-16 md:text-[1.8rem] text-center rounded-lg flex items-center justify-center font-montserrat font-bold">
                {goal.id}
              </div>
              <p className="flex-1 text-white/90  font-roboto text-start md:text-[1.5rem] ">
                {goal.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
