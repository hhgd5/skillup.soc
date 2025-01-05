import React from "react";
import CalendarDemo from "./useClient/CalendarDemo";

interface Event {
  id: number;
  date: string;
  title: string;
  location: string;
  time: string;
}

const events: Event[] = [
  {
    id: 1,
    date: "6 January",
    title: "Opening Ceremony and chess compitition",
    location: " Library of Faculty of Exact Sciences and Natural and Life Sciences",
    time: "9:00 AM - 12 PM",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="w-full py-14 min-h-fit bg-[#6C2BF7]">
      <div className="flex flex-col gap-12 max-w-[20rem] md:max-w-6xl mx-auto">
        <div className="flex justify-start md:justify-center relative">
          <div className="text-center font-yearOfCamel space-y-[-1.5rem] md:space-y-[-2.3rem]">
            
              <h1 className="text-[#FAF9F6] text-[2rem] md:text-[3rem] ">
                UpComing Events
              </h1>
              <h1 className="text-[#BCAFFF] text-[2rem] md:text-[3rem] ">
                UpComing Events
              </h1>
              <h1 className="text-[#E57D1F] text-[2rem] md:text-[3rem] ">
                UpComing Events
              </h1>
            
          </div>
        </div>

        <div className="max-w-3xl   mx-auto">
          <CalendarDemo upcomingEvents={events} />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
