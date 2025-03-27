import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const AskQuery = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    query: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validateForm = () => {
    let newErrors = {};

    if (!/^[A-Za-z ]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces.";
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
      emailjs
        .send(
          "service_72j7ek4",
          "template_uenjrnm",
          {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            query: formData.query,
          },
          "ms_7sp_mXQ1P7DD5F"
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            setMessage("Your query has been sent successfully!");
            setFormData({ name: "", email: "", mobile: "", query: "" });
          },
          (error) => {
            console.error("Email sending failed:", error);
            setMessage("Failed to send your query. Please try again.");
          }
        );
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-10 w-full items-center">
      <div className="hidden sm:flex w-1/2 h-[400px]">
        <img src="/ask.png" alt="Ask anything" className="h-full mx-auto" />
      </div>

      <div className="relative flex justify-center w-full sm:w-[510px] px-4 sm:px-0 my-8">
        <div className="absolute w-[95%] sm:w-full h-full bg-black top-2 left-1 sm:top-5 sm:left-3"></div>

        <div className="bg-yellow-400 border-2 border-black shadow-lg p-6 w-full sm:w-[500px] text-center relative z-10">
          <h2 className="text-lg font-semibold mb-2">
            Bigfoot Publications Evolves With Changing Trends In The Publishing
            Industry
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={(e) => {
                if (/^[A-Za-z ]*$/.test(e.target.value)) {
                  setFormData({ ...formData, name: e.target.value });
                }
              }}
              required
              className="w-full p-2 border border-black rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

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
              required
              className="w-full p-2 border border-black rounded"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm">{errors.mobile}</p>
            )}

            <textarea
              name="query"
              placeholder="Ask your query*"
              value={formData.query}
              onChange={handleChange}
              required
              className="w-full p-2 border border-black rounded h-20 resize-none"
            />

            <button
              type="submit"
              className="w-full p-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>

          {message && <p className="mt-4 text-green-600">{message}</p>}

          <p className="mt-4 text-lg font-serif">Business World</p>
        </div>
      </div>
    </div>
  );
};

export default AskQuery;
