import React from "react";
import background1 from "../../assets/images/background1.png";
import { Cards } from "./Cards";
import card1 from "../../assets/icons/card1.png";
import card2 from "../../assets/icons/card2.png";
import card3 from "../../assets/icons/card3.png";
import card4 from "../../assets/icons/card4.png";

function Advertiser() {
  const cardsdata = [
    {
      image: card1,
      productname: "Product Seeding Integration",
      productdetail:
        "Easily manage product seeding workflows, from shipment tracking to authentic user-generated content submissions.",
    },
    {
      image: card2,
      productname: "Post-Campaign Analytics",
      productdetail:
        "Gain actionable insights with detailed reports on reach, engagement, and ROI, empowering you to refine future campaigns.",
    },
    {
      image: card3,
      productname: "Comprehensive Dashboards",
      productdetail:
        "Dashboards for advertisers & influencers, simplify workflows, campaign management is seamless for everyone.",
    },
    {
      image: card4,
      productname: "Secure Escrow Payment System",
      productdetail:
        "Ensure trust & transparency with a payment system that holds funds securely til campaign requirements are fulfilled.",
    },
  ];

  return (
    <div
      className="bg-cover bg-center h-[600px]"
      style={{ backgroundImage: `url(${background1})` }}
    >
      <div className=" inset-0 pt-20 pl-170 text-white">
        <h1 className="text-4xl text-[#8BBFFF] pl-48 font-bold">What makes Pubblie different</h1>
        <p className="mt-2 text-lg text-[#8BBFFF]">Revolutionizing the way advertisers and influencers collaborate for unparalleled success.</p>

      </div>
      <div className=" flex p-12">
        {cardsdata.map((card, index) => (
          <Cards
            key={index}
            image={card.image}
            productname={card.productname}
            productdetail={card.productdetail}
          />
        ))}
      </div>
    </div>
  );
}

export default Advertiser;

