import React from "react";
import { Icon } from "@iconify/react";

const ContactInfo = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <div className="flex justify-around mb-6">
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full mb-2">
            <Icon width="24" height="24" />
          </div>
          <h4 className="font-semibold">Email</h4>
          <p className="text-gray-600">pubble@gmail.com</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full mb-2">
            <Icon  width="24" height="24" />
          </div>
          <h4 className="font-semibold">Phone</h4>
          <p className="text-gray-600">(02520) 43568901</p>
        </div>
        
      </div>

      <div className="flex justify-center space-x-6">
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
  );
};

export default ContactInfo;
