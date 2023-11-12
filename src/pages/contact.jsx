import propTypes from "prop-types";
import { useTranslation } from "react-i18next";
import bg from "../assets/images/10.jpg";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const INITIAL_STATE = { name: "", email: "", message: "" };

const Input = ({ label, text, type, value, onChange, error }) => {
  return (
    <div className="relative">
      <label htmlFor={label} className="leading-7 text-sm text-gray-600">
        {text}
      </label>
      <input
        type={type || "text"}
        id={label}
        name={label}
        value={value}
        onChange={onChange}
        className={`w-full bg-gray-100 rounded-lg border ${
          error ? "border-red-500" : "border-gray-300"
        } focus:border-coffee-dark text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export const Contact = () => {
  const { t: translate } = useTranslation("global");
  const contact = translate("contact", { returnObjects: true });
  const form = useRef();
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [formErrors, setFormErrors] = useState({ ...INITIAL_STATE });
  const [submitMessage, setSubmitMessage] = useState({
    message: "",
    show: false,
    status: null,
  });

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = contact.errors.name;
    }

    if (!formData.email.trim()) {
      errors.email = contact.errors.email.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = contact.errors.email.invalid;
    }

    if (!formData.message.trim()) {
      errors.message = contact.errors.message;
    }
    setFormErrors(errors);

    return Object.values(errors).every((error) => !error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm(
          "service_ohwoleh",
          "template_eetnjjr",
          form.current,
          "nj6QaBpnVjxb0UxEG"
        )
        .then(
          () => {
            setFormData({ ...INITIAL_STATE });
            setFormErrors({ ...INITIAL_STATE });
            setSubmitMessage({
              message: contact.submitMessage.success,
              show: true,
              status: true,
            });
            const timer = setTimeout(() => {
              setSubmitMessage({
                message: "",
                show: false,
                status: null,
              });
              clearTimeout(timer);
            }, 3000);
          },
          () => {
            setSubmitMessage({
              message: contact.submitMessage.error,
              show: true,
              status: false,
            });
            const timer = setTimeout(() => {
              setSubmitMessage({
                message: "",
                show: false,
                status: null,
              });
              clearTimeout(timer);
            }, 3000);
          }
        );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <main
      className="w-full flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        ref={form}
        className="lg:w-1/2 md:w-2/3 mx-auto bg-coffee-light p-12 rounded-xl mt-4 mx-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col sm:flex-row flex-wrap -m-2">
          <div className="p-2 w-full sm:w-1/2">
            <Input
              label="name"
              text={contact.name}
              value={formData.name}
              onChange={handleInputChange}
              error={formErrors.name}
            />
          </div>
          <div className="p-2 sm:w-1/2">
            <Input
              label="email"
              text={contact.email}
              value={formData.email}
              onChange={handleInputChange}
              error={formErrors.email}
            />
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                {contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full bg-gray-100 rounded-lg border ${
                  formErrors.message ? "border-red-500" : "border-gray-300"
                } focus:border-coffee-dark h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
              ></textarea>
              {formErrors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.message}
                </p>
              )}
            </div>
            {submitMessage.show && (
              <p
                className={`text-sm mt-1 text-center ${
                  submitMessage.status ? "text-green-500" : "text-red-500"
                }`}
              >
                {submitMessage.message}
              </p>
            )}
          </div>
          <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-coffee border-0 py-2 px-8 focus:outline-none hover:bg-coffee-dark rounded text-lg main-transition">
              {contact.send}
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

Input.propTypes = {
  label: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  type: propTypes.string,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  error: propTypes.string,
};
