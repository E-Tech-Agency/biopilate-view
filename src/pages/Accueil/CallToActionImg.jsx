import React from "react";
import "../../assets/styles/circular-text.css";
export default function CallToActionImg() {
  const text = "Le Pilates : force, souplesse, équilibre.";
  return (
    <div className="hidden md:flex items-center justify-center">
      <div className="circular-text">
        <img
          src={require("../../assets/images/stott.jpg")}
          alt="Pilates"
          className="rounded-full object-cover w-[250px] h-[250px]"
        />
        {/* <div className="text-container">
          {text.split("").map((char, index) => (
            <span key={index} className="circle-text">
              {char}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
}
