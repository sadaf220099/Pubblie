import React, { useState } from "react";
import form from "../../assets/images/form.png";
import { Icon } from "@iconify/react";
import Button from "./Button";
import Input from "./Input";
import rect from '../../assets/icons/rect.png'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    alert("Message Sent! We will respond within 24 hours.");
  };

  return (
    <div className=" grid lg:grid-cols-2  px-4 lg:px-16  mt-10 md:space-x-8">
      {/* Left side form */}
      <div className="w-[100%] p-6 lg:p-10 bg-white shadow-lg rounded-2xl  mb-10">
        <h3 className="text-[#3579F6] font-bold text-base lg:text-lg">
          Get in touch
        </h3>
        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-Inter font-bold mb-2">
          Let's Chat, Reach Out to Us
        </h1>
        <p className="text-gray-600 mb-6 text-sm lg:text-base xl:text-lg">
          Have questions or feedback? We're here to help. Send us a message, and
          we'll respond within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First name"
              name="firstName"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <Input
              label="Last name"
              name="lastName"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <Input
            label="Email address"
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Leave us a message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-gray-100 rounded-lg resize-none p-2 w-full h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between items-center flex-wrap gap-3">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="w-4 h-4"
                required
              />
              <span>
                I agree to our friendly{" "}
                <a href="#" className="text-blue-500 underline">
                  privacy policy
                </a>
              </span>
            </label>
            <div className="flex">
            <Button type="submit " className="rounded-3xl">Submit</Button>
            {/* <button className="w-[27px] h-[22px] "></button> */}
            {/* <img src={rect} className="bg-[#3579F6] w-[27px] h-[24px]"/> */}
            <button  className="rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M18.1177 0.42891C19.1337 0.0739098 20.1097 1.04991 19.7547 2.06591L13.8297 18.9959C13.4447 20.0939 11.9147 20.1559 11.4427 19.0929L8.58374 12.6609L12.6077 8.63591C12.7402 8.49374 12.8123 8.30569 12.8089 8.11139C12.8055 7.91709 12.7268 7.7317 12.5894 7.59429C12.4519 7.45688 12.2666 7.37816 12.0723 7.37473C11.878 7.37131 11.6899 7.44343 11.5477 7.57591L7.52274 11.5999L1.09074 8.74091C0.0277356 8.26791 0.0907354 6.73891 1.18774 6.35391L18.1177 0.42891Z" fill="white"/>
</svg></button>
</div> 
          </div>
        </form>
      </div>

      {/* Right side contact info */}
      <div className="w-[100%] flex flex-col items-center">
        <div className="w-full ">
          <img
            src={form}
            alt="form banner"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="w-[705px] object-contain mb-10 ml-10 mx-auto p-6 lg:p-8 xl:p-10 bg-white shadow-lg rounded-2xl">
          <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 mb-3">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
              <Icon icon="mdi:email-outline" width="24" height="24" />
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-600">pubblie@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 mb-6">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
              <Icon icon="mdi:phone" width="24" height="24" />
            </div>
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-600">(02520) 43568901</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            {/* <Icon
              icon="mdi:facebook"
              width="28"
              height="28"
              className="text-blue-600 hover:scale-110 transition-transform"
            /> */}
            {/* <Icon
              icon="mdi:linkedin"
              width="28"
              height="28"
              className="text-blue-500 hover:scale-110 transition-transform"
            /> */}
            {/* <Icon
              icon="mdi:instagram"
              width="28"
              height="28"
              className="text-pink-500 hover:scale-110 transition-transform"
            /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
  <path d="M0.5 16.8081C0.5 25.6447 7.66344 32.8081 16.5 32.8081C25.3366 32.8081 32.5 25.6447 32.5 16.8081C32.5 7.97155 25.3366 0.808105 16.5 0.808105C7.66344 0.808105 0.5 7.97155 0.5 16.8081Z" fill="#1877F2"/>
  <path d="M24.5 16.8081C24.5 12.4081 20.9 8.80811 16.5 8.80811C12.1 8.80811 8.5 12.4081 8.5 16.8081C8.5 20.8081 11.4 24.1081 15.2 24.7081V19.1081H13.2V16.8081H15.2V15.0081C15.2 13.0081 16.4 11.9081 18.2 11.9081C19.1 11.9081 20 12.1081 20 12.1081V14.1081H19C18 14.1081 17.7 14.7081 17.7 15.3081V16.8081H19.9L19.5 19.1081H17.6V24.8081C21.6 24.2081 24.5 20.8081 24.5 16.8081Z" fill="white"/>
</svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <path d="M0 16.8081C0 25.6447 7.16344 32.8081 16 32.8081C24.8366 32.8081 32 25.6447 32 16.8081C32 7.97155 24.8366 0.808105 16 0.808105C7.16344 0.808105 0 7.97155 0 16.8081Z" fill="#2867B2"/>
  <path d="M11.6 24.8081H8.2V14.1081H11.6V24.8081ZM9.9 12.6081C8.8 12.6081 8 11.8081 8 10.7081C8 9.60811 8.9 8.80811 9.9 8.80811C11 8.80811 11.8 9.60811 11.8 10.7081C11.8 11.8081 11 12.6081 9.9 12.6081ZM24 24.8081H20.6V19.0081C20.6 17.3081 19.9 16.8081 18.9 16.8081C17.9 16.8081 16.9 17.6081 16.9 19.1081V24.8081H13.5V14.1081H16.7V15.6081C17 14.9081 18.2 13.8081 19.9 13.8081C21.8 13.8081 23.8 14.9081 23.8 18.2081V24.8081H24Z" fill="white"/>
</svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
  <path d="M0.5 16.8081C0.5 25.6447 7.66344 32.8081 16.5 32.8081C25.3366 32.8081 32.5 25.6447 32.5 16.8081C32.5 7.97155 25.3366 0.808105 16.5 0.808105C7.66344 0.808105 0.5 7.97155 0.5 16.8081Z" fill="#F00073"/>
  <path d="M16.5002 10.0083C18.7002 10.0083 19.0002 10.0083 19.9002 10.0083C20.7002 10.0083 21.1002 10.2083 21.4002 10.3083C21.8002 10.5083 22.1002 10.6083 22.4002 10.9083C22.7002 11.2083 22.9002 11.5083 23.0002 11.9083C23.1002 12.2083 23.2002 12.6083 23.3002 13.4083C23.3002 14.3083 23.3002 14.5083 23.3002 16.8083C23.3002 19.1083 23.3002 19.3083 23.3002 20.2083C23.3002 21.0083 23.1002 21.4083 23.0002 21.7083C22.8002 22.1083 22.7002 22.4083 22.4002 22.7083C22.1002 23.0083 21.8002 23.2083 21.4002 23.3083C21.1002 23.4083 20.7002 23.5083 19.9002 23.6083C19.0002 23.6083 18.8002 23.6083 16.5002 23.6083C14.2002 23.6083 14.0002 23.6083 13.1002 23.6083C12.3002 23.6083 11.9002 23.4083 11.6002 23.3083C11.2002 23.1083 10.9002 23.0083 10.6002 22.7083C10.3002 22.4083 10.1002 22.1083 10.0002 21.7083C9.9002 21.4083 9.8002 21.0083 9.7002 20.2083C9.7002 19.3083 9.7002 19.1083 9.7002 16.8083C9.7002 14.5083 9.7002 14.3083 9.7002 13.4083C9.7002 12.6083 9.9002 12.2083 10.0002 11.9083C10.2002 11.5083 10.3002 11.2083 10.6002 10.9083C10.9002 10.6083 11.2002 10.4083 11.6002 10.3083C11.9002 10.2083 12.3002 10.1083 13.1002 10.0083C14.0002 10.0083 14.3002 10.0083 16.5002 10.0083ZM16.5002 8.5083C14.2002 8.5083 14.0002 8.5083 13.1002 8.5083C12.2002 8.5083 11.6002 8.7083 11.1002 8.9083C10.6002 9.1083 10.1002 9.4083 9.6002 9.9083C9.1002 10.4083 8.9002 10.8083 8.6002 11.4083C8.4002 11.9083 8.3002 12.5083 8.2002 13.4083C8.2002 14.3083 8.2002 14.6083 8.2002 16.8083C8.2002 19.1083 8.2002 19.3083 8.2002 20.2083C8.2002 21.1083 8.4002 21.7083 8.6002 22.2083C8.8002 22.7083 9.1002 23.2083 9.6002 23.7083C10.1002 24.2083 10.5002 24.4083 11.1002 24.7083C11.6002 24.9083 12.2002 25.0083 13.1002 25.1083C14.0002 25.1083 14.3002 25.1083 16.5002 25.1083C18.7002 25.1083 19.0002 25.1083 19.9002 25.1083C20.8002 25.1083 21.4002 24.9083 21.9002 24.7083C22.4002 24.5083 22.9002 24.2083 23.4002 23.7083C23.9002 23.2083 24.1002 22.8083 24.4002 22.2083C24.6002 21.7083 24.7002 21.1083 24.8002 20.2083C24.8002 19.3083 24.8002 19.0083 24.8002 16.8083C24.8002 14.6083 24.8002 14.3083 24.8002 13.4083C24.8002 12.5083 24.6002 11.9083 24.4002 11.4083C24.2002 10.9083 23.9002 10.4083 23.4002 9.9083C22.9002 9.4083 22.5002 9.2083 21.9002 8.9083C21.4002 8.7083 20.8002 8.6083 19.9002 8.5083C19.0002 8.5083 18.8002 8.5083 16.5002 8.5083Z" fill="white"/>
  <path d="M16.5002 12.5083C14.1002 12.5083 12.2002 14.4083 12.2002 16.8083C12.2002 19.2083 14.1002 21.1083 16.5002 21.1083C18.9002 21.1083 20.8002 19.2083 20.8002 16.8083C20.8002 14.4083 18.9002 12.5083 16.5002 12.5083ZM16.5002 19.6083C15.0002 19.6083 13.7002 18.4083 13.7002 16.8083C13.7002 15.3083 14.9002 14.0083 16.5002 14.0083C18.0002 14.0083 19.3002 15.2083 19.3002 16.8083C19.3002 18.3083 18.0002 19.6083 16.5002 19.6083Z" fill="white"/>
  <path d="M20.9002 13.4083C21.4525 13.4083 21.9002 12.9606 21.9002 12.4083C21.9002 11.856 21.4525 11.4083 20.9002 11.4083C20.3479 11.4083 19.9002 11.856 19.9002 12.4083C19.9002 12.9606 20.3479 13.4083 20.9002 13.4083Z" fill="white"/>
</svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
