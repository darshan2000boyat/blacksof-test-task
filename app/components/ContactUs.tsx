"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { FC } from "react";

interface ContactFormValues {
  name: string;
  email: string;
  company: string;
  message: string;
}

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  company: Yup.string().required("Company is required"),
  message: Yup.string().required("Message is required"),
});

const ContactPage: FC = () => {
  const formik = useFormik<ContactFormValues>({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      // API call or logic here
    },
  });

  const renderForm = () => (
    <form
      onSubmit={formik.handleSubmit}
      className="mx-auto w-full grid 2xl:gap-9 xl:gap-4 gap-4"
      noValidate
    >
      {/* Name */}
      <div className="relative">
        <input
          id="name"
          name="name"
          placeholder="Full name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="sg-translate text-white placeholder:text-opacity-90 focus:border-white border-[#ffffff5a] border- transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none"
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-400 text-sm mt-1">{formik.errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="relative">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          inputMode="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="text-white placeholder:text-opacity-90 focus:border-white border-[#ffffff5a] transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-400 text-sm mt-1">{formik.errors.email}</p>
        )}
      </div>

      {/* Company */}
      <div className="relative">
        <input
          id="company"
          name="company"
          placeholder="Company"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.company}
          className="text-white placeholder:text-opacity-90 focus:border-white border-[#ffffff5a] transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none"
        />
        {formik.touched.company && formik.errors.company && (
          <p className="text-red-400 text-sm mt-1">{formik.errors.company}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          className="text-white placeholder:text-opacity-90 focus:border-white border-[#ffffff5a] transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none"
        />
        {formik.touched.message && formik.errors.message && (
          <p className="text-red-400 text-sm mt-1">{formik.errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <div className="flex justify-center md:grid relative place-content-center md:place-content-start">
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="flex justify-center gap-1 w-full disabled:opacity-70 disabled:cursor-not-allowed relative outline-none !bg-transparent rounded-full transition-all duration-700 ease-in-out hover:text-black focus:text-black hover:!bg-white focus:!bg-white text-white stroke-dark hover:stroke-white font-semibold !hover:bg-white hover:border-transparent border border-white lg:text-base text-sm  px-8 md:px-12 py-3"
        >
          Send
        </button>
      </div>
    </form>
  );

  return (
    <div className="bg-[#0067B1] sm:pt-[14%] pt-[20%] pb-[4%]">
      <div className="max-w-[1380px] mx-auto px-1.5 lg:w-10/12 relative -mt-[4rem] md:-mt-[6rem] lg:-mt-[8rem] xl:-mt-[10rem] 2xl:-mt-[12rem]">
        <div className="bg-blueDark grid grid-cols-12 px-4 md:px-0 rounded-[10px] 2xl:grid-cols-11 py-8 md:py-10 lg:py-[3rem] xl:py-[3.5rem] 2xl:py-[5rem]">
          <div className="grid grid-cols-1 gap-y-10 col-start-1 md:grid-cols-2 md:col-start-2 col-end-13 md:col-end-12 2xl:col-end-11 text-white mb-3">
            <div>
              <span className="sg-translate text-2xl lg:text-[32px] xlg:text-3xl 2xl:text-4xl md:leading-snug lg:leading-snug 2xl:leading-snug font-bold font-manrope">
                Get in touch
              </span>
              <div className="h-[2px] w-12 bg-white my-3 md:my-5 lg:my-6 2xl:my-8" />

              {/* Mobile Form */}
              <div className="md:hidden mt-6 mb-8">{renderForm()}</div>

              <span className="sg-translate block font-normal text-base md:text-lg 2xl:text-2xl">
                For general enquiries
              </span>
              <ul className="list-none flex flex-col gap-3 md:gap-5 2xl:gap-7 pt-5 md:pt-7 2xl:pt-8">
                <li className="flex flex-col gap-px items-start">
                  <span className="sg-translate font-medium text-lg md:text-lg xl:text-xl">
                    Address :
                  </span>
                  <span className="sg-translate font-normal text-white text-opacity-90 text-sm md:text-base 2xl:text-xl">
                    110, 16th Road, Chembur, <br className="xl:hidden block" />
                    Mumbai - 400071
                  </span>
                </li>
                <li className="flex flex-col items-start gap-px text-base md:text-lg 2xl:text-xl">
                  <span className="sg-translate font-medium text-lg md:text-lg xl:text-xl">
                    Phone :
                  </span>
                  <a
                    href="tel:+912225208822"
                    className="font-normal hover:underline focus-visible:underline underline-offset-4 decoration-from-font outline-none focus-visible:outline-none text-white text-opacity-90 text-sm md:text-base 2xl:text-xl"
                  >
                    +91 22 25208822
                  </a>
                </li>
                <li className="flex flex-col items-start gap-px text-base md:text-lg 2xl:text-xl">
                  <span className="sg-translate font-medium text-lg md:text-lg xl:text-xl">
                    Email :
                  </span>
                  <a
                    href="mailto:info@supremegroup.co.in"
                    className="font-normal text-white hover:underline focus-visible:underline underline-offset-4 decoration-from-font outline-none focus-visible:outline-none text-opacity-90 text-sm md:text-base 2xl:text-xl"
                  >
                    info@supremegroup.co.in
                  </a>
                </li>
              </ul>
            </div>

            {/* Desktop Form */}
            <div className="hidden md:block">{renderForm()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
