import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useI18next } from "gatsby-plugin-react-i18next";
import { navigate } from "gatsby";

import Button from "../../components/basic/button/Button";
import FileUpload from "../../components/careers/FileUpload";

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const encode = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((k) => {
    formData.append(k, data[k]);
  });
  return formData;
};

const ResumeForm = ({ pageData }) => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const { language } = useI18next();

  const validationSchema = Yup.object({
    name: Yup.string().required(language === "en" ? "First Name is a required field." : "Nome é um campo obrigatório."),
    phone: Yup.string()
      .matches(phoneRegExp, language === "en" ? "Phone number is not valid." : "O número de telefone não é válido.")
      .required(language === "en" ? "Phone Number is a required field." : "Número de telefone é um campo obrigatório."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      profession: "",
      phone: "",
      city: "",
      file: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      fetch("/?no-cache=1", {
        method: "POST",
        body: encode({
          "form-name": "resume",
          ...values,
        }),
      })
        .then(() => {
          navigate("/careers");
        })
        .catch((error) => {
          console.log("Form Submission Failed!");
        });
    },
  });

  return (
    <form
      action="/careers"
      name="resume"
      className="text-[18px] leading-[22px] font-inter"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="resume" />
      <input name="bot-field" className="hidden" />
      <label className="block w-full mb-3 font-bold" for="name">
        {pageData.firstName}
      </label>
      <input
        className={`w-full px-4 py-5 mb-3 bg-pink border ${
          formik.errors.name && isButtonPressed ? "border-red-500" : "border-dark-gold"
        }`}
        type="text"
        name="name"
        id="name"
        placeholder={pageData.firstName}
        onChange={formik.handleChange}
      />
      <label className="block w-full mb-3 font-bold" for="surname">
        {pageData.surname}
      </label>
      <input
        className="w-full px-4 py-5 mb-3 bg-pink border border-dark-gold"
        type="text"
        name="surname"
        id="surname"
        placeholder={pageData.surname}
        onChange={formik.handleChange}
      />
      <label className="block w-full mb-3 font-bold" for="profession">
        {pageData.profession}
      </label>
      <input
        className="w-full px-4 py-5 mb-3 bg-pink border border-dark-gold"
        type="text"
        name="profession"
        id="profession"
        placeholder={pageData.profession}
        onChange={formik.handleChange}
      />
      <label className="block w-full mb-3 font-bold" for="phone">
        {pageData.phoneNumber}
      </label>
      <input
        className={`w-full px-4 py-5 mb-3 bg-pink border ${
          formik.errors.phone && isButtonPressed ? "border-red-500" : "border-dark-gold"
        }`}
        type="phone"
        name="phone"
        id="phone"
        placeholder={pageData.phoneNumber}
        onChange={formik.handleChange}
      />
      <label className="block w-full mb-3 font-bold" for="city">
        {pageData.city}
      </label>
      <input
        className="w-full px-4 py-5 mb-3 bg-pink border border-dark-gold"
        type="text"
        name="city"
        id="city"
        placeholder={pageData.city}
        onChange={formik.handleChange}
      />
      <label className="block w-full mb-3 font-bold">{pageData.uploadResume}</label>
      <FileUpload onChange={(value) => formik.setFieldValue("file", value)} name="file" accept=".doc,.docx,.pdf" />
      {formik.errors.name && isButtonPressed && (
        <p className="text-[14px] leading-[20px] font-medium text-red-500 mt-5">{formik.errors.name}</p>
      )}
      {formik.errors.phone && isButtonPressed && (
        <p className="text-[14px] leading-[20px] font-medium text-red-500 mt-5">{formik.errors.phone}</p>
      )}
      <Button
        onClick={(e) => {
          e.preventDefault();
          setIsButtonPressed(true);
          formik.handleSubmit();
        }}
        type="submit"
        buttonClasses="mt-10 py-[14px] bg-gold"
      >
        {pageData.formButtonLabel}
      </Button>
    </form>
  );
};

export default ResumeForm;
