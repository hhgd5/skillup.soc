"use client";
import SharedButton from "../SharedButton";
import { Button } from "../ui/button";

const MainSection = () => {
  type dashboardItem = {
    name: string;
    number: number;
  };

  const dashboard: dashboardItem[] = [
    { name: "Members", number: 25 },
    { name: "Workshop", number: 8 },
    { name: "Events", number: 2 },
    { name: "Competitions", number: 1 },
  ];

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="max-w-full md:max-w-[75rem] lg:mx-auto relative">
      <div className="mt-14 container relative">
        <div className="px-6 mx-auto w-full flex justify-start md:justify-center">
          <h1 className="space-y-2 md:space-y-6 md:text-center relative z-10 md:w-fit">
            <span className="block font-playball text-4xl md:text-[3rem] md:text-start md:place-content-center">
              This is
            </span>
            <span className="block text-[#6E3AFF] font-yearOfCamel font-extrabold text-4xl md:text-[4.5rem]">
              SkillUP Society
            </span>
          </h1>
        </div>

        {/*mobil*/}
        <div className="absolute -top-10  md:hidden">
          <svg
            className="w-screen"
            height="147"
            viewBox="0 0 2693 147"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.691805 104.4C0.691805 104.4 1138.41 2.97386 601.6 114.619C64.7913 226.265 2692.37 0.751053 2692.37 0.751053"
              stroke="#E57D1F"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="mt-6 px-6">
          <p className="text-black/75 text-[1rem] max-w-52 text-start items-start font-roboto font-medium md:text-center md:text-[1.3rem] md:max-w-5xl md:mx-auto">
            Lorem ipsum dolor sit amet consectetur. At felis cras turpis
            vivamerra fames eu aenean adipiscing. Dictum metus suspendisse
            nullam viverra aliquet amet elementum. Vulputate proin egestas lorem
            fermentum lacus et. Etiam mauris phasellus artix duis.
          </p>
        </div>
      </div>

      {/* desktop*/}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[98.8vw] -top-8  overflow-hidden z-0">
        <svg
          className="w-full"
          height="147"
          viewBox="0 0 2693 147"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.691805 104.4C0.691805 104.4 1138.41 2.97386 601.6 114.619C64.7913 226.265 2692.37 0.751053 2692.37 0.751053"
            stroke="#E57D1F"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="container flex flex-col mx-auto px-6 relative z-10">
        <div className="flex gap-6 w-full items-center justify-center font-montserrat font-bold mt-8 md:mt-8">
          <SharedButton variant="custm1" />
          <Button
            size="custm1"
            variant="outline"
            onClick={() => handleScroll("UpcomingEvents")}
          >
            <h2>Events</h2>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-5 pb-10 md:grid md:grid-cols-4 md:gap-20 md:pb-10 mt-16 md:mt-20 relative">
          {dashboard.map((item, index) => (
            <div key={index} className="bg-[#6C2BF7] rounded-2xl relative">
              <h2 className="text-white text-[1.1rem] font-roboto font-semibold text-center md:py-[1.6rem] md:px-[0.656rem]">
                <span className="lg:text-[2rem]">{item.name}</span>
                <br />
                <span className="lg:text-[4rem]">{item.number}</span>
              </h2>
              {item.name === "Competitions" && (
                <div className="hidden md:block absolute -right-12 md:rotate-12 transform md:-translate-y-1/2 md:top-0 md:-right-12 lg:-right-14">
                  <div className="flex justify-center items-center rotate-12 w-[117px] h-[43px] bg-[#E57D1F] rounded-[1.5rem] md:px-16">
                    <span className="font-montserrat font-bold text-[1rem] text-white md:text-[1.1rem]">
                      #Coding
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-10 left-1/2 -translate-x-20 z-10">
        <svg
          width="125"
          height="74"
          viewBox="0 0 125 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_15_900)">
            <rect
              y="31.8733"
              width="117"
              height="43"
              rx="21.5"
              transform="rotate(-15.8084 0 31.8733)"
              fill="#E57D1F"
            />
            <path
              d="M29.7016 53.0842L27.5619 39.1397L29.7172 38.5295L31.8762 52.4685L29.7016 53.0842ZM21.7098 52.0211L21.1159 49.9236L33.5472 46.4039L34.1411 48.5015L21.7098 52.0211ZM24.7176 54.4953L22.5778 40.5508L24.7331 39.9406L26.8728 53.8851L24.7176 54.4953ZM20.8875 46.6209L20.2937 44.5233L32.7058 41.0091L33.3189 43.1012L20.8875 46.6209ZM37.4227 50.8981L33.6088 37.4277L39.7282 35.6951C41.1907 35.281 42.56 35.1982 43.8359 35.4466C45.1082 35.6823 46.2004 36.2114 47.1123 37.0341C48.0242 37.8568 48.6745 38.9545 49.0632 40.3272C49.4482 41.6871 49.4699 42.9628 49.1282 44.1542C48.7829 45.3329 48.1321 46.3625 47.1758 47.2429C46.2159 48.1106 45.0046 48.7515 43.5421 49.1656L37.4227 50.8981ZM39.8155 47.4561L42.6635 46.6497C43.5616 46.3955 44.2905 46.009 44.8503 45.4902C45.4194 44.9549 45.7945 44.3221 45.9757 43.5918C46.1698 42.8578 46.147 42.0675 45.9072 41.2208C45.6639 40.3612 45.269 39.6762 44.7226 39.1657C44.1854 38.6388 43.536 38.303 42.7745 38.1584C42.0221 37.9972 41.1969 38.0438 40.2989 38.298L37.4509 39.1044L39.8155 47.4561ZM58.0698 45.2186C56.8895 45.5528 55.785 45.6161 54.7562 45.4085C53.7402 45.1973 52.8759 44.763 52.1632 44.1056C51.4468 43.4354 50.9434 42.5872 50.6528 41.5608C50.3586 40.5217 50.3362 39.5372 50.5857 38.6074C50.8444 37.6611 51.3271 36.8455 52.0338 36.1603C52.737 35.4624 53.6145 34.9645 54.6665 34.6667C55.68 34.3797 56.6526 34.3399 57.5843 34.5473C58.5253 34.7382 59.3475 35.1705 60.051 35.8444C60.7509 36.5054 61.2588 37.3939 61.5748 38.5101C61.6075 38.6255 61.6392 38.762 61.67 38.9196C61.6971 39.0644 61.7224 39.2027 61.7459 39.3346L53.3365 41.7156L52.8407 39.9644L59.6721 38.0302L58.6646 38.8767C58.5121 38.3379 58.2704 37.9005 57.9397 37.5646C57.6091 37.2286 57.2204 37.0061 56.7738 36.897C56.3235 36.775 55.8418 36.7867 55.3287 36.932C54.8155 37.0772 54.3928 37.3217 54.0604 37.6652C53.7373 37.9922 53.5248 38.3919 53.423 38.8642C53.3175 39.3236 53.3428 39.8292 53.499 40.3808L53.6298 40.8427C53.7896 41.4072 54.0531 41.873 54.4204 42.2402C54.7968 42.5909 55.2422 42.8181 55.7566 42.9219C56.2802 43.0092 56.8499 42.9657 57.4657 42.7914C58.0174 42.6352 58.4748 42.4156 58.8382 42.1326C59.2143 41.846 59.5283 41.4868 59.7803 41.0552L61.8679 42.3349C61.5457 43.0081 61.0672 43.594 60.4323 44.0924C59.7938 44.5781 59.0063 44.9535 58.0698 45.2186ZM68.3335 42.3127C67.4483 42.5633 66.5661 42.7022 65.687 42.7294C64.817 42.7401 64.0993 42.6524 63.5338 42.466L63.9242 40.0274C64.4824 40.1881 65.1095 40.2738 65.8054 40.2847C66.5106 40.279 67.1775 40.1872 67.8061 40.0092C68.4988 39.8131 68.9627 39.5917 69.1978 39.345C69.4456 39.0947 69.5278 38.822 69.4442 38.5269C69.3752 38.2832 69.2089 38.1362 68.9453 38.0862C68.6909 38.0196 68.3686 38.0069 67.9783 38.0481C67.5881 38.0893 67.1595 38.1414 66.6923 38.2044C66.2379 38.2637 65.7717 38.3057 65.2936 38.3302C64.8119 38.3418 64.3542 38.2913 63.9204 38.1785C63.4866 38.0658 63.1016 37.8561 62.7653 37.5494C62.4419 37.2391 62.1966 36.7889 62.0295 36.1988C61.8443 35.5445 61.8669 34.9145 62.0973 34.3088C62.3405 33.6995 62.7813 33.1521 63.4198 32.6664C64.0547 32.1679 64.8725 31.777 65.8732 31.4937C66.5788 31.294 67.319 31.1675 68.0938 31.1144C68.8687 31.0613 69.5416 31.1133 70.1127 31.2704L69.7168 33.6897C69.1329 33.5363 68.5698 33.4809 68.0276 33.5236C67.4946 33.5498 66.9908 33.6301 66.5161 33.7645C65.849 33.9533 65.3869 34.1812 65.1298 34.448C64.8728 34.7147 64.7842 34.9892 64.8641 35.2715C64.9368 35.5281 65.1003 35.6896 65.3547 35.7562C65.622 35.8191 65.9525 35.8364 66.3464 35.808C66.7402 35.7796 67.1643 35.7358 67.6186 35.6764C68.0822 35.6006 68.5548 35.5569 69.0365 35.5452C69.5182 35.5335 69.9696 35.5859 70.3905 35.7023C70.8207 35.8022 71.2039 36.0055 71.5401 36.3122C71.8728 36.606 72.1226 37.048 72.2897 37.6381C72.4713 38.2796 72.4405 38.9049 72.1973 39.5142C71.9505 40.1107 71.5014 40.6536 70.85 41.1429C70.2115 41.6285 69.3727 42.0185 68.3335 42.3127ZM74.8087 40.3131L71.8775 29.96L74.8794 29.1101L77.8107 39.4631L74.8087 40.3131ZM72.9698 28.0918C72.4182 28.248 71.9237 28.2147 71.4866 27.9921C71.0494 27.7694 70.7636 27.4208 70.6292 26.9461C70.4948 26.4714 70.5554 26.0247 70.811 25.6059C71.0665 25.1871 71.4701 24.8996 72.0218 24.7434C72.5734 24.5872 73.066 24.614 73.4996 24.8239C73.9295 25.0209 74.2117 25.3567 74.3461 25.8314C74.4877 26.3317 74.4326 26.7977 74.1807 27.2293C73.9379 27.6445 73.5343 27.932 72.9698 28.0918ZM86.3447 41.2457C85.3697 41.5217 84.3923 41.6668 83.4124 41.681C82.449 41.7043 81.5986 41.564 80.8612 41.2601L81.4441 38.767C81.982 39.0027 82.6135 39.1287 83.3388 39.1451C84.0805 39.1707 84.7784 39.0909 85.4327 38.9056C86.4975 38.6042 87.2001 38.1489 87.5404 37.5398C87.8935 36.9271 87.9374 36.1525 87.6723 35.216L87.231 33.6572L86.6879 31.0049L85.9084 28.3987L85.2764 26.1664L88.1244 25.36L90.5653 33.9812C91.1102 35.9055 91.0112 37.4648 90.2684 38.659C89.5256 39.8531 88.2177 40.7154 86.3447 41.2457ZM84.6406 36.9889C83.6784 37.2613 82.7479 37.3031 81.8491 37.1141C80.9595 36.9087 80.1721 36.5011 79.4867 35.8914C78.8106 35.2653 78.3308 34.4519 78.0475 33.4512C77.7606 32.4377 77.7427 31.4936 77.9938 30.6187C78.2542 29.7274 78.7112 28.9675 79.3647 28.339C80.031 27.707 80.8453 27.2547 81.8074 26.9823C82.6798 26.7353 83.5004 26.6969 84.2692 26.8673C85.0344 27.0248 85.7084 27.4229 86.2911 28.0617C86.8701 28.6876 87.3231 29.5778 87.65 30.7325C87.9733 31.8742 88.0543 32.8698 87.8929 33.7193C87.7279 34.5559 87.3627 35.2482 86.7973 35.7963C86.2319 36.3444 85.513 36.7419 84.6406 36.9889ZM84.5398 34.3568C85.0658 34.2079 85.505 33.9727 85.8574 33.6512C86.2062 33.3169 86.4415 32.9246 86.5635 32.4743C86.6854 32.0241 86.6756 31.5488 86.5339 31.0485C86.3886 30.5353 86.1479 30.1254 85.8116 29.8187C85.4717 29.4992 85.0674 29.295 84.5988 29.206C84.1265 29.1041 83.6274 29.1276 83.1014 29.2765C82.5754 29.4255 82.138 29.6671 81.7892 30.0014C81.4368 30.3229 81.1932 30.7106 81.0584 31.1645C80.9328 31.6019 80.9427 32.0772 81.088 32.5904C81.2297 33.0907 81.4704 33.5006 81.8103 33.8201C82.163 34.136 82.5755 34.3448 83.0478 34.4467C83.5165 34.5357 84.0138 34.5058 84.5398 34.3568ZM96.9463 22.696C97.7673 22.4636 98.5458 22.4233 99.2817 22.5752C100.027 22.7107 100.682 23.0658 101.246 23.6404C101.807 24.2021 102.236 25.009 102.534 26.061L104.212 31.988L101.21 32.838L99.6631 27.3728C99.427 26.5389 99.0666 25.9758 98.582 25.6834C98.1101 25.3874 97.5407 25.3339 96.8736 25.5227C96.3989 25.6571 95.9982 25.8814 95.6714 26.1957C95.3539 26.4935 95.1442 26.8785 95.0423 27.3508C94.9533 27.8194 94.9996 28.3745 95.1812 29.0159L96.6304 34.1347L93.6285 34.9846L90.6972 24.6316L93.5645 23.8198L94.3763 26.6871L93.5923 25.9737C93.7682 25.1756 94.1499 24.4924 94.7373 23.9242C95.3247 23.3561 96.0611 22.9467 96.9463 22.696Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_900">
              <rect
                y="31.8733"
                width="117"
                height="43"
                rx="21.5"
                transform="rotate(-15.8084 0 31.8733)"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default MainSection;