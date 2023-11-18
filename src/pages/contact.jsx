import propTypes from "prop-types";
import { useTranslation } from "react-i18next";
import bg from "../assets/images/10.jpg";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const INITIAL_STATE = { name: "", email: "", message: "" };

const Input = ({ label, text, type, value, onChange, error }) => {
  return (
    <div className="relative">
      <label htmlFor={label} className="text-sm leading-7 text-gray-600">
        {text}
      </label>
      <input
        type={type || "text"}
        id={label}
        name={label}
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg border bg-gray-100 ${
          error ? "border-red-500" : "border-gray-300"
        } px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-coffee-dark`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
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
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_USER_ID
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
      className="flex h-screen w-full items-center justify-center px-4"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        ref={form}
        className=" mt-4 rounded-xl bg-coffee-light px-6 py-8 sm:px-12 md:w-2/3 lg:w-1/2"
        onSubmit={handleSubmit}
      >
        <div className="-m-2 flex flex-col flex-wrap sm:flex-row">
          <div className="w-full p-2 sm:w-1/2">
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
          <div className="w-full p-2">
            <div className="relative">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-gray-600"
              >
                {contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full rounded-lg border bg-gray-100 ${
                  formErrors.message ? "border-red-500" : "border-gray-300"
                } h-32 resize-none px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-coffee-dark`}
              ></textarea>
              {formErrors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {formErrors.message}
                </p>
              )}
            </div>
            {submitMessage.show && (
              <p
                className={`mt-1 text-center text-sm ${
                  submitMessage.status ? "text-green-500" : "text-red-500"
                }`}
              >
                {submitMessage.message}
              </p>
            )}
          </div>
          <div className="w-full p-2">
            <button className="main-transition mx-auto flex rounded border-0 bg-coffee px-8 py-2 text-lg text-white hover:bg-coffee-dark focus:outline-none">
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
