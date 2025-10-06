import React from "react";
import background2 from "../../assets/images/background2.png";
import flower1 from "../../assets/images/flower1.png";
import flower2 from "../../assets/images/flower2.png";
import { Collapse, Divider } from "antd";
import { UserCamp } from "./UserCamp";
import {Icon} from "@iconify/react"

const faqs = [
  {
    question: <div className="">How are influencers matched to campaigns?</div>,
    answer:
      "Funds are securely held until the campaign is completed and requirements are met, ensuring trust for both advertisers and influencers.",
  },
  {
    question: "Can I try PUBBLi for free?",
    answer: "Yes, you can start with a free trial to explore the platform.",
  },
  {
    question: "What metrics can I track in the analytics dashboard?",
    answer: "You can track reach, engagement, conversions, and more.",
  },
  {
    question: "How does the escrow payment system work?",
    answer:
      "Payments are held securely until campaign milestones are completed.",
  },
];

export const Faq = () => {
  const items = faqs.map((faq, index) => ({
    key: index.toString(),
    label: (
      <span className="text-base sm:text-lg font-bold text-gray-800 border-0">
        {faq.question}
      </span>
    ),
    children: (
      <>
        <p className="text-sm sm:text-base text-black">{faq.answer}</p>
        {index !== faqs.length - 1 && (
          <Divider className=" bg-white h-[1px]" />
        )}
      </>
    ),
  }));

  return (
    <div
      className="relative bg-cover bg-center min-h-[600px] z-1 "
      style={{ backgroundImage: `url(${background2})` }}
    >
      <UserCamp />

      <img
        src={flower1}
        className="absolute left-0 top-10 z-1 w-16 sm:w-32 md:w-42 lg:w-52 xl:w-60"
        alt="flower1"
      />
      <img
        src={flower2}
        className="absolute right-0 -bottom-7 w-16 sm:w-32 md:w-42 lg:w-52 xl:w-60"
        alt="flower2"
      />

      <div>
        <h2 className="pt-20 sm:pt-30 font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
          Frequently Asked Questions
        </h2>
        <h4 className="pt-2 text-white text-center text-sm sm:text-base md:text-lg lg:text-xl">
          These are the most asked questions about PUBBLIE
        </h4>
      </div>

      <div className="mt-6 sm:mt-10 bg-white rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12
  max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
  <Collapse
    accordion
    items={items}
    className="border-0"
    bordered={false}
    expandIcon={({ isActive }) => (
      <span className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#98A2B3] text-[#98A2B3] text-sm font-bold">
        {isActive ? <Icon icon="basil:plus-outline" width="24" height="24" className=" text-[#98A2B3]" />:<Icon icon="basil:cross-solid" width="24" height="24"  className=" text-[#98A2B3]"/>}
      </span>
    )}
    expandIconPosition="end"
  />
</div>
    </div>
  );
};
