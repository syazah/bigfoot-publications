import React, { useState } from "react";

const SocialMediaHeader = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    budget: "",
    industry: "",
    contact: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!/^[A-Za-z ]+$/.test(formData.name)) {
      newErrors.name = "Name should not contain numbers.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    } else {
      console.log("form error");
    }
  };

  return (
    <div className="w-[90%] mt-3 mb-24 flex flex-col lg:flex-row items-center gap-5 sm:p-6 shadow-lg rounded-lg">
      <div className="lg:w-[55%] flex flex-col justify-center items-center">
        <img
          src="../../../public/HEADSLIDES/1.jpg"
          alt="Header"
          className="w-full h-auto rounded-lg"
        />
        <div className="flex items-center gap-2">
          <h2 className="sm:text-4xl text-xl font-bold">Rated 4.9 on Google</h2>
          <div className="flex text-xl text-yellow-400">★★★★★</div>
        </div>
      </div>
      <div className="lg:w-[43%] text-center">
        <h2 className="text-2xl font-bold mb-4">Talk To our Experts Today!</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field - Prevents numbers */}
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            pattern="[A-Za-z ]+"
            onKeyDown={(e) => {
              if (/\d/.test(e.key)) e.preventDefault();
            }}
            required
            className="w-full p-2 border border-black rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          {/* Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-black rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          {/* Mobile Field - Prevents text input */}
          <input
            type="tel"
            name="mobile"
            placeholder="+91 xxxxx xxxxx"
            value={formData.mobile}
            onChange={(e) => {
              if (/^\d{0,10}$/.test(e.target.value)) {
                setFormData({ ...formData, mobile: e.target.value });
              }
            }}
            maxLength="10"
            onKeyDown={(e) => {
              if (
                !/[0-9]/.test(e.key) &&
                e.key !== "Backspace" &&
                e.key !== "Delete"
              ) {
                e.preventDefault();
              }
            }}
            required
            className="w-full p-2 border border-black rounded"
          />

          {errors.mobile && (
            <p className="text-red-500 text-sm">{errors.mobile}</p>
          )}

          {/* Company Name Field */}
          <input
            type="text"
            name="company"
            placeholder="Company Name*"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full p-2 border border-black rounded"
          />

          {/* Budget Dropdown */}
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="w-full p-2 border border-black rounded"
          >
            <option value="">Select budget</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          {/* Industry Dropdown */}
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
            className="w-full p-2 border border-black rounded"
          >
            <option value="">Select Option</option>
            <option value="tech">Tech</option>
            <option value="finance">Finance</option>
            <option value="healthcare">Healthcare</option>
          </select>

          {/* Contact Dropdown */}
          <select
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full p-2 border border-black rounded"
          >
            <option value="">Select Contact</option>
            <option value="sales">Sales</option>
            <option value="support">Support</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-2 bg-gray-600 text-white rounded cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SocialMediaHeader;
