"use client";

import { useFormik, FormikErrors } from "formik";
import * as Yup from "yup";
import { FC } from "react";

// Define TypeScript interface for form values
interface ContactFormValues {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const initialValues: ContactFormValues = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

// Validation schema
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("E-mail is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const ContactPage: FC = () => {
  const formik = useFormik<ContactFormValues>({
    initialValues,
    validationSchema,
    onSubmit: (values: ContactFormValues) => {
      console.log("Form submitted:", values);
      // Place form submission logic here
    },
  });

  return (
    <div className="min-h-[70%] bg-[#0067B1] text-white p-6 md:p-20 lg:px-52 lg:py-32 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-0 py-4">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Get in touch</h2>
          <div className="h-1 w-12 bg-white mb-6"></div>
          <p className="mb-6 text-lg">For general enquiries</p>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Address :</p>
              <p>110, 16th Road, Chembur, Mumbai – 400071</p>
            </div>
            <div>
              <p className="font-semibold">Phone :</p>
              <p>+91 22 25208822</p>
            </div>
            <div>
              <p className="font-semibold">Email :</p>
              <p>info@supremegroup.co.in</p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <form
          onSubmit={formik.handleSubmit}
          noValidate
          className="md:w-1/2 space-y-6"
        >
          {/* Full Name */}
          <div>
            <input
              name="fullName"
              type="text"
              placeholder="Full name"
              className="w-full bg-transparent border-b border-white py-2 px-1 placeholder-white outline-none"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <p className="text-sm text-red-300 mt-1">
                {formik.errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              className="w-full bg-transparent border-b border-white py-2 px-1 placeholder-white outline-none"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-sm text-red-300 mt-1">
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* Subject */}
          <div>
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border-b border-white py-2 px-1 placeholder-white outline-none"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.subject && formik.errors.subject && (
              <p className="text-sm text-red-300 mt-1">
                {formik.errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="w-full bg-transparent border-b border-white py-2 px-1 placeholder-white outline-none resize-none"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-sm text-red-300 mt-1">
                {formik.errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-transparent text-white px-10 py-3 rounded-full font-semibold transition hover:bg-gray-100 border-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
