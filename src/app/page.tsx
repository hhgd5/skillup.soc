import BackToTopButton from "@/components/cta/BackToTopButton";
import AboutUs from "@/components/sections/AboutUs";
import FAQSection from "@/components/sections/FAQSection";
import Join from "@/components/sections/Join";
import MainSection from "@/components/sections/MainSection";
import Members from "@/components/sections/Members";
import UpcomingEvents from "@/components/sections/Upcoming";
import Star from "@/components/stikers/Star";
import Up from "@/components/stikers/Up";


export default function Home() {
  return (
    <div className="">
      
        <section id="MainSection">
          <MainSection />
        </section>
      

      <div className=" flex justify-center">
        {/* desing */}
        <div className=" hidden absolute  -translate-y-10  md:bottom-0 lg:bottom-0  lg:translate-y-52 z-10 ">
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

      <div className=" hidden md:block absolute top-72 sm:right-6  max-w-screen md:shrink-1 md:max-w-[75rem] lg:top-96 lg:left-12 lg:mx-auto  z-[-1] ">
        <div className="lg:mt-12">
          <Up />
        </div>
      </div>

      <div className=" block md:hidden absolute top-72 right-12   max-w-screen  z-[-1] ">
        <div className="lg:mt-12">
          <Up />
        </div>
      </div>

      <div className="block md:hidden absolute top-96 right-8   max-w-screen  z-[-1] ">
        <div className="flex justify-center items-center rotate-12 w-[117px] h-[43px] bg-[#E57D1F] rounded-[1.5rem]  md:px-16 ">
          <span className="font-montserrat font-bold text-[1rem] text-white md:text-[1.1rem]  ">
            #Coding
          </span>
        </div>
      </div>

      <section className="relative" id="AboutUs">
        <AboutUs />
        <div className=" absolute   top-5 right-6 lg:block lg:top-7 lg:right-8 ">
          <div className="">
            <svg
              width="158"
              height="79"
              viewBox="0 0 158 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="10.6679"
                y="0.386325"
                width="151.334"
                height="39.7249"
                rx="19.8624"
                transform="rotate(15 10.6679 0.386325)"
                fill="#BCAFFF"
                stroke="white"
                strokeWidth="0.630867"
              />
              <path
                d="M14.8575 29.8908L19.5423 18.3449L21.4533 18.857L16.7856 30.4075L14.8575 29.8908ZM9.27597 25.4693L9.7743 23.6095L20.7966 26.5629L20.2983 28.4227L9.27597 25.4693ZM10.4384 28.7067L15.1231 17.1608L17.0341 17.6729L12.3494 29.2188L10.4384 28.7067ZM11.0951 21.0008L11.5934 19.141L22.5986 22.0899L22.1174 23.9542L11.0951 21.0008ZM25.9032 32.9968C24.925 32.7347 24.1096 32.2968 23.4572 31.6831C22.8162 31.0724 22.3684 30.355 22.1137 29.5309C21.8735 28.6985 21.8753 27.8273 22.1191 26.9173C22.366 25.9959 22.8001 25.2405 23.4213 24.6511C24.0569 24.0533 24.8034 23.656 25.6609 23.459C26.5327 23.2537 27.4578 23.2821 28.436 23.5443C29.4029 23.8033 30.2125 24.2397 30.8649 24.8534C31.5203 25.4558 31.9697 26.1674 32.213 26.9885C32.4563 27.8096 32.4529 28.6865 32.203 29.6192C31.9592 30.5292 31.5251 31.2846 30.9009 31.8854C30.2796 32.4748 29.5331 32.8722 28.6613 33.0775C27.7894 33.2828 26.8701 33.2559 25.9032 32.9968ZM26.4884 30.8128C26.932 30.9317 27.3576 30.936 27.7651 30.8257C28.1725 30.7155 28.5289 30.5001 28.8343 30.1796C29.1426 29.8477 29.3669 29.4201 29.5071 28.8969C29.6504 28.3623 29.6699 27.8798 29.5658 27.4496C29.4616 27.0194 29.2606 26.6546 28.9629 26.3554C28.6651 26.0562 28.2944 25.8471 27.8508 25.7282C27.4072 25.6094 26.9816 25.6051 26.5741 25.7153C26.1667 25.8256 25.8046 26.0395 25.4879 26.3569C25.1825 26.6774 24.9582 27.105 24.815 27.6396C24.6748 28.1629 24.6552 28.6453 24.7564 29.0869C24.8719 29.5202 25.0786 29.8864 25.3763 30.1857C25.6741 30.4849 26.0448 30.694 26.4884 30.8128ZM38.0014 36.2385C37.2279 36.0313 36.5968 35.6793 36.1082 35.1826C35.6195 34.6859 35.3032 34.0464 35.1592 33.2642C35.0297 32.4736 35.1082 31.5437 35.3947 30.4744C35.6842 29.3938 36.0755 28.5477 36.5686 27.9361C37.0616 27.3246 37.6439 26.9259 38.3155 26.7401C38.987 26.5543 39.7266 26.5696 40.5342 26.786C41.3987 27.0176 42.1189 27.4239 42.6947 28.0049C43.2849 28.5776 43.6846 29.2699 43.8938 30.0818C44.1143 30.8968 44.0966 31.782 43.8405 32.7375C43.5815 33.7044 43.1527 34.4856 42.5542 35.0811C41.9671 35.6796 41.2749 36.0793 40.4774 36.2802C39.6912 36.484 38.8659 36.4702 38.0014 36.2385ZM31.7252 37.9583L35.0718 25.4686L37.6141 26.1498L37.1112 28.0267L36.3285 30.7429L35.7722 33.5016L34.387 38.6715L31.7252 37.9583ZM38.1259 33.9311C38.5696 34.05 38.9894 34.0527 39.3855 33.9394C39.793 33.8292 40.1494 33.6138 40.4548 33.2933C40.7745 32.9644 41.0045 32.5384 41.1447 32.0151C41.2879 31.4805 41.3018 30.9966 41.1863 30.5633C41.0821 30.1331 40.8811 29.7683 40.5834 29.4691C40.297 29.1729 39.932 28.9654 39.4884 28.8465C39.0447 28.7276 38.6192 28.7233 38.2117 28.8336C37.8042 28.9439 37.4478 29.1593 37.1425 29.4798C36.8371 29.8003 36.6129 30.2278 36.4696 30.7625C36.3294 31.2857 36.3099 31.7681 36.411 32.2097C36.5151 32.64 36.7161 33.0047 37.0139 33.3039C37.3116 33.6032 37.6823 33.8122 38.1259 33.9311ZM49.6416 39.3575C48.8681 39.1502 48.2371 38.7983 47.7484 38.3016C47.2597 37.8049 46.9434 37.1654 46.7994 36.3832C46.6699 35.5926 46.7484 34.6627 47.0349 33.5934C47.3244 32.5128 47.7157 31.6667 48.2088 31.0551C48.7018 30.4436 49.2841 30.0449 49.9557 29.8591C50.6272 29.6733 51.3668 29.6886 52.1744 29.905C53.0389 30.1366 53.7591 30.5429 54.3349 31.1239C54.9252 31.6966 55.3249 32.3889 55.534 33.2008C55.7545 34.0158 55.7368 34.901 55.4808 35.8565C55.2217 36.8234 54.7929 37.6045 54.1945 38.2001C53.6074 38.7986 52.9151 39.1983 52.1176 39.3992C51.3314 39.603 50.5061 39.5891 49.6416 39.3575ZM43.3654 41.0773L46.712 28.5876L49.2543 29.2688L48.7514 31.1457L47.9687 33.8619L47.4124 36.6206L46.0272 41.7905L43.3654 41.0773ZM49.7662 37.0501C50.2098 37.169 50.6296 37.1717 51.0258 37.0584C51.4332 36.9482 51.7896 36.7328 52.095 36.4123C52.4147 36.0834 52.6447 35.6574 52.7849 35.1341C52.9282 34.5995 52.942 34.1156 52.8265 33.6823C52.7223 33.252 52.5213 32.8873 52.2236 32.5881C51.9372 32.2919 51.5722 32.0844 51.1286 31.9655C50.6849 31.8466 50.2594 31.8423 49.8519 31.9526C49.4444 32.0629 49.088 32.2782 48.7827 32.5987C48.4774 32.9193 48.2531 33.3468 48.1098 33.8814C47.9696 34.4047 47.9501 34.8871 48.0512 35.3287C48.1554 35.759 48.3563 36.1237 48.6541 36.4229C48.9518 36.7222 49.3225 36.9312 49.7662 37.0501ZM60.224 42.193C59.2457 41.9309 58.4304 41.493 57.778 40.8793C57.137 40.2686 56.6892 39.5513 56.4345 38.7271C56.1943 37.8947 56.1961 37.0235 56.4399 36.1135C56.6868 35.1921 57.1209 34.4367 57.7421 33.8473C58.3777 33.2496 59.1242 32.8522 59.9817 32.6552C60.8535 32.4499 61.7785 32.4784 62.7568 32.7405C63.7237 32.9996 64.5333 33.4359 65.1857 34.0496C65.8411 34.652 66.2905 35.3637 66.5338 36.1847C66.777 37.0058 66.7737 37.8827 66.5238 38.8155C66.28 39.7254 65.8459 40.4808 65.2216 41.0816C64.6004 41.6711 63.8539 42.0684 62.9821 42.2737C62.1102 42.479 61.1909 42.4521 60.224 42.193ZM60.8092 40.0091C61.2528 40.1279 61.6784 40.1322 62.0858 40.022C62.4933 39.9117 62.8497 39.6963 63.1551 39.3758C63.4634 39.0439 63.6877 38.6163 63.8279 38.0931C63.9712 37.5585 63.9907 37.0761 63.8866 36.6458C63.7824 36.2156 63.5814 35.8509 63.2837 35.5516C62.9859 35.2524 62.6152 35.0433 62.1716 34.9245C61.728 34.8056 61.3024 34.8013 60.8949 34.9116C60.4875 35.0218 60.1254 35.2357 59.8087 35.5531C59.5033 35.8737 59.279 36.3012 59.1358 36.8358C58.9956 37.3591 58.976 37.8415 59.0772 38.2831C59.1927 38.7164 59.3994 39.0827 59.6971 39.3819C59.9949 39.6811 60.3656 39.8902 60.8092 40.0091ZM66.933 43.8444L69.3926 34.6648L71.9349 35.3461L71.24 37.9395L71.0828 37.0928C71.5296 36.5176 72.0986 36.1458 72.7898 35.9774C73.4841 35.7977 74.2635 35.8237 75.128 36.0553L74.4697 38.5123C74.359 38.4705 74.2581 38.4374 74.1671 38.413C74.0792 38.3772 73.984 38.3456 73.8816 38.3182C73.1536 38.1231 72.5058 38.1751 71.938 38.474C71.3846 38.7647 70.9906 39.3479 70.7559 40.2238L69.5947 44.5576L66.933 43.8444ZM78.108 46.9851C77.0274 46.6955 76.2588 46.197 75.8023 45.4894C75.3487 44.7705 75.2683 43.8651 75.5609 42.7731L77.7188 34.7196L80.3805 35.4328L78.2317 43.4522C78.1281 43.8389 78.1497 44.1678 78.2966 44.4388C78.4464 44.6984 78.6977 44.8754 79.0503 44.9699C79.4712 45.0827 79.86 45.0649 80.2167 44.9167L80.4304 46.9856C80.1056 47.1058 79.7361 47.1653 79.3219 47.164C78.9222 47.1544 78.5175 47.0948 78.108 46.9851ZM75.1551 38.6228L75.7037 36.5753L82.068 38.2806L81.5193 40.3281L75.1551 38.6228ZM85.5021 48.9663C84.74 48.7621 84.0971 48.4313 83.5735 47.9741C83.0613 47.5198 82.721 46.9471 82.5526 46.2558C82.3873 45.5532 82.4312 44.7298 82.6842 43.7857L84.074 38.5987L86.7357 39.3119L85.451 44.1064C85.2468 44.8686 85.2552 45.4743 85.4762 45.9236C85.7116 46.3646 86.125 46.6644 86.7165 46.8229C87.126 46.9326 87.5129 46.9448 87.8771 46.8596C88.2443 46.7629 88.5677 46.5569 88.8473 46.2417C89.1298 45.9151 89.3458 45.4731 89.4952 44.9158L90.7113 40.3772L93.373 41.0904L90.9133 50.2699L88.3881 49.5933L89.0647 47.0681L89.3288 47.9252C88.851 48.4799 88.2665 48.8414 87.5752 49.0097C86.8984 49.1697 86.2074 49.1553 85.5021 48.9663ZM101.315 43.0721C102.043 43.2671 102.651 43.5887 103.141 44.0369C103.645 44.4767 103.981 45.0422 104.149 45.7335C104.321 46.4134 104.281 47.2197 104.032 48.1524L102.623 53.4076L99.9617 52.6944L101.26 47.8487C101.458 47.1093 101.44 46.5191 101.204 46.0781C100.98 45.6402 100.572 45.3419 99.9809 45.1835C99.56 45.0707 99.1546 45.0596 98.7646 45.1501C98.389 45.2324 98.0557 45.4296 97.7648 45.7418C97.4853 46.057 97.2693 46.499 97.1169 47.0677L95.9008 51.6063L93.2391 50.8931L95.6988 41.7136L98.2411 42.3948L97.5598 44.9371L97.2878 44.0412C97.7823 43.5154 98.3808 43.1698 99.0835 43.0045C99.7861 42.8392 100.53 42.8617 101.315 43.0721ZM104.896 54.0166L107.356 44.837L110.017 45.5502L107.558 54.7298L104.896 54.0166ZM109.029 43.9139C108.54 43.7829 108.18 43.534 107.949 43.1673C107.718 42.8007 107.659 42.4069 107.772 41.986C107.885 41.5652 108.133 41.2537 108.516 41.0516C108.9 40.8495 109.336 40.814 109.825 40.9451C110.314 41.0761 110.676 41.3193 110.91 41.6746C111.147 42.0185 111.209 42.4009 111.096 42.8218C110.977 43.2654 110.724 43.5939 110.338 43.8074C109.966 44.0125 109.53 44.048 109.029 43.9139ZM113.605 56.4964C112.524 56.2069 111.756 55.7083 111.299 55.0008C110.846 54.2819 110.765 53.3765 111.058 52.2845L113.216 44.231L115.877 44.9442L113.729 52.9635C113.625 53.3503 113.647 53.6792 113.794 53.9501C113.943 54.2098 114.195 54.3868 114.547 54.4813C114.968 54.5941 115.357 54.5763 115.714 54.4281L115.927 56.4969C115.603 56.6172 115.233 56.6767 114.819 56.6754C114.419 56.6658 114.015 56.6062 113.605 56.4964ZM110.652 48.1342L111.201 46.0867L117.565 47.792L117.016 49.8395L110.652 48.1342ZM117.163 57.3034L119.622 48.1238L122.284 48.837L119.824 58.0166L117.163 57.3034ZM121.296 47.2007C120.807 47.0697 120.447 46.8208 120.216 46.4542C119.985 46.0875 119.926 45.6937 120.039 45.2728C120.151 44.852 120.399 44.5405 120.783 44.3384C121.166 44.1363 121.602 44.1008 122.091 44.2319C122.581 44.3629 122.942 44.6061 123.176 44.9614C123.413 45.3053 123.475 45.6877 123.362 46.1086C123.244 46.5522 122.991 46.8808 122.605 47.0942C122.233 47.2993 121.796 47.3348 121.296 47.2007ZM126.673 59.9981C125.627 59.7177 124.76 59.2661 124.074 58.6432C123.399 58.0234 122.94 57.303 122.696 56.4819C122.456 55.6495 122.458 54.7783 122.702 53.8683C122.949 52.9469 123.377 52.19 123.987 51.5975C124.611 50.9967 125.346 50.5963 126.192 50.3963C127.041 50.1849 127.932 50.2042 128.865 50.4541C129.764 50.6949 130.519 51.1047 131.132 51.6835C131.76 52.2539 132.188 52.9538 132.417 53.7832C132.649 54.6012 132.632 55.505 132.367 56.4947C132.34 56.597 132.302 56.7149 132.254 56.8484C132.209 56.9705 132.166 57.0869 132.124 57.1976L124.667 55.1997L125.084 53.647L131.141 55.27L129.993 55.4564C130.121 54.9786 130.136 54.5375 130.037 54.1331C129.938 53.7286 129.744 53.384 129.455 53.0992C129.168 52.803 128.798 52.594 128.343 52.4721C127.888 52.3501 127.456 52.3443 127.049 52.4546C126.656 52.5565 126.314 52.7636 126.023 53.0758C125.735 53.3766 125.526 53.7715 125.395 54.2607L125.285 54.6702C125.151 55.1707 125.14 55.6432 125.252 56.0879C125.379 56.5242 125.614 56.8981 125.958 57.2095C126.315 57.5126 126.767 57.7373 127.313 57.8836C127.802 58.0147 128.249 58.055 128.652 58.0047C129.067 57.9574 129.468 57.827 129.854 57.6136L130.859 59.5286C130.31 59.8936 129.682 60.1216 128.975 60.2125C128.271 60.2921 127.504 60.2206 126.673 59.9981ZM135.83 62.4516C135.045 62.2413 134.313 61.9476 133.634 61.5705C132.969 61.1851 132.464 60.7939 132.12 60.3967L133.519 58.7235C133.87 59.0979 134.307 59.4466 134.83 59.7696C135.367 60.0843 135.914 60.3163 136.472 60.4657C137.086 60.6302 137.538 60.6721 137.828 60.5913C138.129 60.5135 138.315 60.3438 138.385 60.0822C138.443 59.8661 138.383 59.6794 138.206 59.5222C138.043 59.3566 137.804 59.2012 137.49 59.0559C137.175 58.9107 136.826 58.7563 136.443 58.5927C136.072 58.4322 135.699 58.2531 135.325 58.0554C134.955 57.8464 134.63 57.601 134.352 57.3192C134.074 57.0375 133.877 56.7042 133.761 56.3195C133.656 55.9378 133.673 55.4853 133.813 54.9621C133.969 54.382 134.271 53.9143 134.72 53.559C135.18 53.2069 135.762 52.991 136.466 52.9114C137.173 52.8205 137.97 52.8939 138.858 53.1316C139.483 53.2992 140.102 53.5382 140.714 53.8484C141.325 54.1586 141.812 54.5025 142.175 54.8799L140.78 56.5361C140.406 56.1556 140.004 55.8589 139.574 55.646C139.157 55.4248 138.739 55.2577 138.318 55.145C137.727 54.9865 137.273 54.9503 136.957 55.0364C136.642 55.1225 136.45 55.2907 136.383 55.5409C136.322 55.7684 136.373 55.9649 136.536 56.1305C136.71 56.2991 136.953 56.4617 137.265 56.6184C137.576 56.775 137.918 56.9336 138.29 57.0941C138.675 57.2463 139.054 57.4269 139.424 57.6359C139.795 57.845 140.114 58.0889 140.381 58.3676C140.662 58.638 140.86 58.9655 140.977 59.3503C141.096 59.7236 141.086 60.1719 140.946 60.6952C140.793 61.2639 140.487 61.7244 140.027 62.0766C139.57 62.4174 138.983 62.626 138.268 62.7026C137.564 62.7821 136.751 62.6985 135.83 62.4516Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="right-6 top-96 absolute lg:block lg:top-12 lg:left-28   ">
          <div className="">
            <Star />
          </div>
        </div>
      </section>

      <section id="Members">
        <Members />
      </section>

      <section id="UpcomingEvents">
        <UpcomingEvents />
      </section>

      <BackToTopButton />

      <section className="overflow-clip" id="FAQSection">
        <FAQSection />
      </section>

      
        <section>
          <Join />
        </section>
      
    </div>
  );
}