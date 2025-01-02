import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="md:max-w-[75rem] mx-auto  px-6  w-full flex flex-col justify-start ">
        <div className="flex flex-col  gap-12 md:flex-row  justify-between">
          <div className="space-y-10 md:space-y-6">
            <div className="flex justify-start">
              <svg
                width="124"
                height="68"
                viewBox="0 0 124 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M83.4661 17.2872C82.3955 16.1974 81.3874 15.7406 80.0647 15.7406C78.3962 15.7406 77.1048 16.6863 77.1048 17.8614C77.1048 18.8926 77.8297 19.4383 80.2855 20.2686C82.6162 21.0419 83.5286 21.4721 84.4742 22.1886C85.7031 23.1343 86.3322 24.5103 86.3322 26.201C86.3322 29.9557 83.3723 32.505 79.0253 32.505C76.0029 32.505 73.7034 31.3583 71.8142 28.8659L74.4595 26.5441C75.4051 28.1779 76.9798 29.0952 78.869 29.0952C80.7583 29.0952 82.1122 27.9486 82.1122 26.4019C82.1122 25.6286 81.7351 24.969 80.979 24.4819C80.5688 24.1957 79.7834 23.9094 78.0504 23.3352C74.272 22.1032 72.8848 20.6988 72.8848 18.1779C72.8848 14.969 75.6571 12.6188 79.4356 12.6188C81.7351 12.6188 83.8451 13.3352 85.6074 14.7397L83.4661 17.2908V17.2872Z"
                  fill="white"
                />
                <path
                  d="M93.1666 24.1638L98.2677 19.6358H103.433L97.0408 25.0811L103.937 32.0447H98.678L93.5769 26.7149L93.1666 27.0883V32.0465H89.3569V10.5834H93.1666V24.1674V24.1638Z"
                  fill="white"
                />
                <path
                  d="M109.786 14.4142C109.786 15.5591 108.749 16.5031 107.491 16.5031C106.232 16.5031 105.195 15.5591 105.195 14.3858C105.195 13.2124 106.232 12.3253 107.491 12.3253C108.749 12.3253 109.786 13.2693 109.786 14.4142ZM109.378 32.0444H105.572V19.6515H109.378V32.0444Z"
                  fill="white"
                />
                <path
                  d="M116.393 32.0448H112.587V10.6066H116.393V32.0448Z"
                  fill="white"
                />
                <path
                  d="M123.855 32.0445H120.045V10.5814H123.855V32.0445Z"
                  fill="white"
                />
                <path
                  d="M77.2936 48.5884C77.2936 50.5369 77.4186 51.168 77.9539 51.9982C78.6475 53.0862 80.0639 53.7742 81.6386 53.7742C83.2133 53.7742 84.6297 53.0862 85.3233 51.9982C85.8586 51.168 85.9836 50.5369 85.9836 48.5884V37.6409H90.0786V49.3333C90.0786 51.568 89.6058 53.1449 88.5352 54.4338C87.0855 56.1529 84.5047 57.184 81.6386 57.184C78.7725 57.184 76.1897 56.1529 74.742 54.4338C73.6714 53.1449 73.1986 51.568 73.1986 49.3333V37.6409H77.2936V48.5884Z"
                  fill="white"
                />
                <path
                  d="M98.9913 56.7555H94.8964V37.6409H101.037C103.776 37.6409 105.257 38.0427 106.58 39.1022C107.933 40.2204 108.721 41.8827 108.721 43.7155C108.721 45.3493 108.092 46.9244 107.021 47.9858C105.825 49.1324 104.124 49.6764 101.637 49.6764H98.9913V56.7538V56.7555ZM100.66 46.4391C103.211 46.4391 104.503 45.5218 104.503 43.6889C104.503 42.7715 104.092 41.9413 103.432 41.4827C102.803 41.0524 101.92 40.8818 100.41 40.8818H98.9933V46.4409H100.662L100.66 46.4391Z"
                  fill="white"
                />
                <path
                  d="M29.5536 41.5805C34.1545 41.5805 37.8842 38.1866 37.8842 34C37.8842 29.8134 34.1545 26.4196 29.5536 26.4196C24.9528 26.4196 21.223 29.8134 21.223 34C21.223 38.1866 24.9528 41.5805 29.5536 41.5805Z"
                  fill="#E57D1F"
                />
                <path
                  d="M29.5533 60.3378L29.5533 67.952C13.5779 67.952 0.609161 56.1493 0.609161 41.6142V34C16.5846 34 29.5533 45.8027 29.5533 60.3378Z"
                  fill="#6C2BF7"
                />
                <path
                  d="M29.5533 0.0480957V7.66232C29.5533 22.1992 16.5826 34.0001 0.609161 34.0001V26.3859C0.609161 11.849 13.5798 0.0480957 29.5533 0.0480957Z"
                  fill="#9296F8"
                />
                <path
                  d="M58.4969 34V41.6142C58.4969 56.1511 45.5263 67.952 29.5528 67.952L29.5528 60.3378C29.5528 45.8009 42.5235 34 58.4969 34Z"
                  fill="#9296F8"
                />
                <path
                  d="M58.4969 26.3878V34.002C42.5215 34.002 29.5528 22.1994 29.5528 7.66427V0.0500488C45.5283 0.0500488 58.4969 11.8527 58.4969 26.3878Z"
                  fill="#6C2BF7"
                />
              </svg>
            </div>
            <p className=" text-sm max-w-xs font-roboto font-semibold text-[0.85rem] text-[#747474] text-start   ">
              Lorem ipsum dolor sit amet consectetur. At felis cras turpis
              vivamuerra fames eu aenean adipiscing. Dictum metus suspendisse
              nullam viverra aliquam volutpat elementum. Vulputate proin egestas
            </p>
          </div>

          <div className="space-y-4 ">
            <h3 className="text-white text-lg font-medium">SkillUP Society</h3>
            <ul className="space-y-3  max-w-[16rem]  font-roboto font-semibold text-[0.85rem] text-[#747474]">
              <li>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mr-2"
                >
                  <path
                    d="M15.3503 12.3105V14.33C15.3511 14.5174 15.3127 14.703 15.2376 14.8748C15.1624 15.0466 15.0523 15.2007 14.9141 15.3275C14.776 15.4542 14.6129 15.5507 14.4353 15.6108C14.2577 15.6708 14.0695 15.6931 13.8828 15.6763C11.8114 15.4512 9.82173 14.7434 8.07356 13.6097C6.44712 12.5762 5.06818 11.1973 4.03468 9.57081C2.89704 7.81471 2.18907 5.81532 1.96811 3.73462C1.95129 3.54847 1.97341 3.36086 2.03307 3.18373C2.09273 3.0066 2.18861 2.84383 2.31462 2.70579C2.44063 2.56775 2.59401 2.45746 2.76498 2.38194C2.93595 2.30642 3.12077 2.26733 3.30768 2.26716H5.32712C5.6538 2.26394 5.97051 2.37962 6.21821 2.59264C6.46591 2.80566 6.62769 3.10149 6.67342 3.42497C6.75865 4.07124 6.91673 4.70579 7.14462 5.31652C7.23519 5.55745 7.25479 5.8193 7.2011 6.07103C7.14741 6.32277 7.02269 6.55384 6.8417 6.73686L5.9868 7.59176C6.94507 9.27701 8.34044 10.6724 10.0257 11.6306L10.8806 10.7757C11.0636 10.5948 11.2947 10.47 11.5464 10.4163C11.7981 10.3627 12.06 10.3823 12.3009 10.4728C12.9117 10.7007 13.5462 10.8588 14.1925 10.944C14.5195 10.9902 14.8181 11.1549 15.0316 11.4068C15.2451 11.6588 15.3585 11.9804 15.3503 12.3105Z"
                    stroke="#747474"
                    strokeWidth="1.00972"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                +213 0552 28 52 33
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block align-top mr-2 mt-1"
                >
                  <g clipPath="url(#clip0_155_511)">
                    <path
                      d="M14.687 6.83983C14.687 11.5519 8.62865 15.5908 8.62865 15.5908C8.62865 15.5908 2.57031 11.5519 2.57031 6.83983C2.57031 5.23306 3.2086 3.6921 4.34476 2.55594C5.48092 1.41978 7.02188 0.781494 8.62865 0.781494C10.2354 0.781494 11.7764 1.41978 12.9125 2.55594C14.0487 3.6921 14.687 5.23306 14.687 6.83983Z"
                      stroke="#747474"
                      strokeWidth="1.00972"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.62865 8.85927C9.74395 8.85927 10.6481 7.95514 10.6481 6.83983C10.6481 5.72452 9.74395 4.82038 8.62865 4.82038C7.51334 4.82038 6.6092 5.72452 6.6092 6.83983C6.6092 7.95514 7.51334 8.85927 8.62865 8.85927Z"
                      stroke="#747474"
                      strokeWidth="1.00972"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_155_511">
                      <rect
                        width="16.1556"
                        height="16.1556"
                        fill="white"
                        transform="translate(0.550781 0.108154)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Faculty of ST, University of Echahid Cheikh Larbi Tebessi,
                Tebessa.
              </li>
            </ul>
          </div>

          <div className="space-y-4  max-w-fit">
            <h3 className="text-white text-lg font-medium">Club</h3>
            <ul className="space-y-3 font-roboto font-semibold text-[0.85rem] text-[#747474]">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-white transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-white transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/workshops"
                  className="hover:text-white transition-colors"
                >
                  WorkShops
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium">Get In Touch</h3>
            <p className="font-roboto font-semibold text-[0.85rem] text-[#747474]">
              skillupsociety@gmail.com
            </p>
            <div className="flex space-x-4 font-roboto font-semibold text-[0.85rem] text-[#747474]">
              <Link
                href="#"
                className="text-[#747474] hover:text-white transition-colors"
              >
                <Instagram size={25} />
              </Link>
              <Link
                href="#"
                className="text-[#747474] hover:text-white transition-colors"
              >
                <Linkedin size={25} />
              </Link>
              <Link
                href="#"
                className="text-[#747474] hover:text-white transition-colors"
              >
                <Facebook size={25} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © 2024 SkillUp. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
