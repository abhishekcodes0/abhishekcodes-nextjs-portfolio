"use client";
import React, { useState } from "react";
import { bebas } from "../fonts";
import axios from "axios";
import { apiUrl } from "@/utils/config";

const Contact = () => {
  const [mailObj, setMailObj] = useState({
    email: undefined,
    subject: undefined,
    message: undefined,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMailObj((prev) => {
      return { ...prev, [name]: value };
    });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!mailObj.email) {
      valid = false;
      errors.email = "Email is required";
    }
    if (!mailObj.subject) {
      valid = false;
      errors.subject = "Subject is required";
    }
    if (!mailObj.message) {
      valid = false;
      errors.message = "Message is required";
    }

    setErrors(errors);
    return valid;
  };
  console.log(errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (validate()) {
      setIsLoading(true);
      axios
        .post(`${apiUrl}/api/mail/send`, mailObj)
        .then((res) => {
          setIsLoading(false);
          if (res.status == 200) {
            setSuccessMessage("Message sent successfully!");
            setMailObj({ email: "", subject: "", message: "" });
          }
        })
        .catch((error) => {
          setErrorMessage("Failed to send message. Please try again.");
          console.error(error);
          setIsLoading(false);
        });
    }
  };

  return (
    <section className="w-screen h-screen bg-gray-100 flex flex-col items-center">
      <div
        className={
          "text-center text-6xl font-bold mt-12 mb-12" + " " + bebas.className
        }
      >
        Contact Me
      </div>{" "}
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl font-semibold">
          Want to work together? Let me know.
        </p>
        {successMessage && (
          <div className="mb-4 p-3 text-green-700 bg-green-100 rounded-lg">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mb-4 p-3 text-red-700 bg-red-100 rounded-lg">
            {errorMessage}
          </div>
        )}
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={mailObj.email}
              className={`shadow-sm bg-gray-50 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5`}
              placeholder="name@abhishekcodes.com"
              onChange={handleChange}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={mailObj.subject}
              className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${
                errors.subject ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:ring-gray-500 focus:border-gray-500`}
              placeholder="What is this regarding?"
              onChange={handleChange}
            />
            {errors.subject && (
              <p className="mt-2 text-sm text-red-600">{errors.subject}</p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={mailObj.message}
              className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:ring-gray-500 focus:border-gray-500`}
              placeholder="Leave a comment..."
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="mt-2 text-sm text-red-600">{errors.message}</p>
            )}
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white inline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending Message
              </>
            ) : (
              "Send message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
