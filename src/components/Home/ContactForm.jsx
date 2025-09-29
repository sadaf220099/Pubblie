import React, { useState } from "react";
import form from "../../assets/images/form.png";
import { Icon } from "@iconify/react";
import Button from "./Button";
import Input from "./Input";

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
    <div className="flex">
      {/* Left side form */}
      <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10 mb-10">
        <h3 className="text-blue-600 font-semibold">Get in touch</h3>
        <h1 className="text-2xl font-bold mb-2">Let's Chat, Reach Out to Us</h1>
        <p className="text-gray-600 mb-6">
          Have questions or feedback? We're here to help. Send us a message, and
          we'll respond within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
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

          <div className="flex justify-between items-center">
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
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>

      {/* Right side contact info */}
      <div className="flex flex-col">
        <div>
          <img src={form} alt="form banner" />
        </div>
        <div className="w-150 mb-10 mx-auto p-6 bg-white shadow-lg rounded-2xl">
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
            <Icon
              icon="mdi:facebook"
              width="28"
              height="28"
              className="text-blue-600 hover:scale-110 transition-transform"
            />
            <Icon
              icon="mdi:linkedin"
              width="28"
              height="28"
              className="text-blue-500 hover:scale-110 transition-transform"
            />
            <Icon
              icon="mdi:instagram"
              width="28"
              height="28"
              className="text-pink-500 hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
