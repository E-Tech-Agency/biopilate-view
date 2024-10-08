import React from "react";

export default function Hero() {
  return (
    <section className="mt-14 mb-20 flex flex-wrap justify-center lg:justify-between gap-5">
      <div className="flex flex-col my-14 sm:my-20 px-3 xl:px-2 md:px-5  w-[600px] gap-5 font-lato">
        <div>
          <p className="text-marron text-3xl leading-10 font-bold font-ebGaramond">
            Équilibre et Élégance :
          </p>
          <p className="text-marron text-3xl leading-10 font-bold font-ebGaramond">
            BioPilates votre Studio de Pilates à Paris
          </p>{" "}
        </div>
        <p className="leading-7">
          Découvrez la force dans la fluidité et la grâce dans le mouvement, au
          cœur de Paris, avec notre approche personnalisée du Pilates.
        </p>
        <button className=" reserver-button flex mr-auto flex-col justify-center text-base rounded-lg px-10 py-4 bg-bgColor text-marron font-lato">
          Réserver
        </button>
      </div>
      <div className="flex justify-center items-center gap-3 sm:gap-4 mr-2 sm:mr-4 border border-solid border-marron rounded-full w-[233px] h-[233px] sm:w-[428px] sm:h-[428px] pr-5 sm:pr-9">
        <div className="z-[1] absolute mr-[165px] mt-[170px] sm:mr-[290px] sm:mt-[280px]">
          <svg
            className="hidden sm:block"
            width="93"
            height="102"
            viewBox="0 0 93 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63.656 1.13904C51.4861 21.6158 46.9384 27.2573 39.1356 31.598C31.5812 35.7406 23.7046 36.3331 6.43913 33.951C3.10123 33.4993 0.300303 33.1562 0.191594 33.2123C0.0828858 33.2684 2.25737 34.7409 4.94607 36.5092C18.1244 45.1015 25.0911 51.9901 28.327 59.6463C31.6181 67.5195 31.8337 76.8039 29.1179 93.7708C28.4235 98.0556 27.8825 101.665 27.8906 101.766C27.9531 101.839 29.903 98.6246 32.2626 94.6377C41.7784 78.4751 49.0885 70.8125 57.6121 68.1684C64.6438 65.9784 72.1796 65.8421 84.6057 67.6355C88.8229 68.2296 92.2541 68.6683 92.246 68.5673C92.1835 68.4943 89.4089 66.5951 86.081 64.3853C72.9254 55.6059 66.8396 49.3498 63.7116 41.3925C60.7166 33.6821 60.6008 23.9956 63.3182 7.51868C64.6533 -0.777763 64.6695 -0.575768 63.656 1.13904Z"
              fill="#756E66"
            />
          </svg>
          <svg
            className="block sm:hidden"
            width="49"
            height="52"
            viewBox="0 0 49 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.2414 0.797949C26.9555 11.1642 24.6053 14.0196 20.5698 16.2141C16.6626 18.3084 12.5866 18.6041 3.64968 17.3877C1.92193 17.157 0.472148 16.9816 0.415922 17.01C0.359696 17.0383 1.48596 17.7855 2.87853 18.6828C9.704 23.0429 13.3137 26.5364 14.9931 30.4168C16.7011 34.407 16.8183 39.1104 15.4231 47.7041C15.0664 49.8742 14.7886 51.7025 14.7929 51.7537C14.8252 51.7906 15.8324 50.1633 17.0512 48.145C21.9661 39.9626 25.7446 36.085 30.1542 34.7504C33.7921 33.6449 37.692 33.5801 44.124 34.4956C46.3069 34.7989 48.083 35.0231 48.0787 34.9719C48.0463 34.9349 46.6092 33.9712 44.8856 32.8499C38.0718 28.3951 34.9183 25.2224 33.2946 21.1896C31.7399 17.282 31.6741 12.3749 33.0704 4.02956C33.7564 -0.172512 33.7649 -0.0701752 33.2414 0.797949Z"
              fill="#756E66"
            />
          </svg>
        </div>

        <img
          loading="lazy"
          src={require("../../assets/images/hero-1.jpg")}
          alt="Biopilate trainer"
          className="custom-half-circle-right h-[208px] sm:h-[455px] shadow-lg"
        />

        <img
          loading="lazy"
          src={require("../../assets/images/hero-2.jpg")}
          alt="Biopilate trainer"
          className="custom-half-circle-left h-[160px] sm:h-[350px] shadow-lg pt-2"
        />
        <div className="z-[1] absolute ml-40 mb-44 sm:ml-80 sm:mb-[350px]">
          <svg
            className="hidden sm:block"
            width="44"
            height="48"
            viewBox="0 0 44 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.8913 0.065788C30.8194 0.154769 30.258 1.12103 29.627 2.20646C24.2565 11.4519 20.721 14.9587 15.6149 16.0943C12.7575 16.7333 8.61219 16.605 3.12778 15.704C1.99138 15.5083 0.971201 15.3581 0.86432 15.3602C0.757438 15.3624 1.55962 15.969 2.66398 16.6938C9.50409 21.2582 12.5415 24.3058 14.0786 28.128C15.5248 31.7243 15.5503 36.6827 14.1938 44.7314C13.9604 46.0748 13.7594 47.3285 13.7294 47.5217C13.7017 47.7451 14.1913 47.0143 15.1564 45.3715C19.6639 37.7064 22.3331 34.578 25.9422 32.7397C29.5467 30.9142 33.2781 30.7196 41.4233 31.9294C42.8432 32.1482 43.9446 32.257 43.8656 32.1821C43.7865 32.1073 42.8286 31.4544 41.7359 30.7341C35.4096 26.5464 32.1583 23.2833 30.6841 19.6175C29.1773 15.895 29.1314 11.5435 30.5107 3.06459C30.7972 1.31733 30.9633 -0.0231886 30.8913 0.065788Z"
              fill="#756E66"
            />
          </svg>
          <svg
            className="block sm:hidden"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4948 0.862096C16.4576 0.90713 16.1677 1.3963 15.8418 1.94581C13.068 6.62635 11.2404 8.40086 8.59852 8.97325C7.12012 9.29538 4.97469 9.22805 2.13577 8.76852C1.54753 8.66876 1.01946 8.5921 0.964148 8.59311C0.908835 8.59411 1.32436 8.90187 1.89635 9.26967C5.43911 11.5858 7.01292 13.1313 7.81073 15.0684C8.56141 16.8911 8.57763 19.4029 7.88051 23.4795C7.76052 24.1599 7.65726 24.7949 7.64184 24.8927C7.62765 25.0059 7.88059 24.6359 8.37905 23.8043C10.7072 19.9238 12.0867 18.3405 13.9534 17.4113C15.8177 16.4886 17.7487 16.3921 21.9649 17.0095C22.6998 17.1211 23.27 17.1769 23.229 17.1389C23.188 17.1009 22.6919 16.7697 22.1259 16.4042C18.8493 14.2792 17.1646 12.6244 16.3995 10.7665C15.6174 8.87992 15.591 6.67551 16.2997 2.38102C16.4469 1.49605 16.532 0.817064 16.4948 0.862096Z"
              fill="#756E66"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
