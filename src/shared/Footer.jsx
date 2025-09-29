import React from "react";
import footer from "../assets/images/footer.png";
import logofooter from "../assets/images/logofooter.png";
import line from "../assets/images/line.png";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <div
      className="bg-cover bg-center min-h-[150px] text-[var(--primary)]"
      style={{ backgroundImage: `url(${footer})` }}
    >
      {/* Logo */}
      <img src={logofooter} alt="Footer Logo" className="mx-auto p-5" />
      <img src={line} alt="Divider" className="mx-auto" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-4 gap-4 md:gap-0">
        {/* Text */}
        <p className="text-sm text-center md:text-left">
          pubblie © 202X. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-5">
          <Icon
            icon="mdi:youtube"
            width="24"
            height="24"
            className="cursor-pointer hover:text-red-500 transition"
          />
          <Icon
            icon="ic:baseline-facebook"
            width="24"
            height="24"
            className="cursor-pointer hover:text-blue-500 transition"
          />
          <Icon
            icon="mdi:instagram"
            width="24"
            height="24"
            className="cursor-pointer hover:text-pink-500 transition"
          />
          <Icon
            icon="mdi:linkedin"
            width="24"
            height="24"
            className="cursor-pointer hover:text-blue-400 transition"
          />
        </div>
      </div>
    </div>
  );
};
