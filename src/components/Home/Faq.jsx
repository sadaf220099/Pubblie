import React from "react";
import background2 from "../../assets/images/background2.png";
import flower1 from "../../assets/images/flower1.png";
import flower2 from "../../assets/images/flower2.png";
import { Collapse, Divider } from "antd";
import { UserCamp } from "./UserCamp";

const faqs = [
  {
    question: "How are influencers matched to campaigns?",
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
  // Map FAQs into Collapse items
  const items = faqs.map((faq, index) => ({
    key: index.toString(),
    label: (
      <span className="text-lg font-bold text-gray-800 border-0">{faq.question}</span>
    ),
    children: (
      <>
        <p className="text-black">{faq.answer}</p>
        {index !== faqs.length - 1 && (
          <Divider className=" bg-white h-[1px]" />
        )}
      </>
    ),
  }));

  return (
    <div
      className="relative bg-cover bg-center h-[600px] z-1"
      style={{ backgroundImage: `url(${background2})` }}
    >
      <UserCamp />
      <img src={flower1} className="absolute left-0 top-10 z-1" alt="flower1" />
      <img src={flower2} className="absolute right-0 -bottom-7" alt="flower2" />

      <div>
        <h2 className="pt-30 font-bold text-white text-5xl text-center">
          Frequently Asked Questions
        </h2>
        <h4 className="pt-2 text-white text-center">
          These are the most asked questions about PUBBLIE
        </h4>
      </div>

      <div className="ml-90 mr-80 mt-10 bg-white rounded-3xl p-6">
        <Collapse
          accordion
          items={items}
          className="border-0"
          bordered={false}
          expandIcon={({ isActive }) => (
            <span className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-gray-500 text-gray-500 text-sm font-bold">
              {isActive ? "−" : "+"}
            </span>
          )}
          expandIconPosition="end"
        />
      </div>
    </div>
  );
};
