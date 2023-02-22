import { useFormik } from "formik";
import "./ContactForm.scss";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Üzenet sikeresen elküldve", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          formik.handleReset();
          toast.success("Üzenet sikeresen elküldve", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.log(error.text);
          e.preventDefault();
        }
      );
    e.target.reset();
  };
  return (
    <div className="form-container">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h2>Küldjön üzenetet</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">
          Név
          <input
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            placeholder=""
            onChange={formik.handleChange}
            // onBlur={handleBlur}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="email"
            placeholder=""
            value={formik.values.email}
            onChange={formik.handleChange}
            // onBlur={handleBlur}
          />
        </label>
        <label htmlFor="phone">
          Telefon
          <input
            id="phone"
            name="phone"
            type="text"
            value={formik.values.phone}
            placeholder=""
            onChange={formik.handleChange}
            // onBlur={handleBlur}
          />
        </label>
        <label htmlFor="text">
          Üzenet
          <textarea
            name="message"
            id="message"
            cols="20"
            rows="5"
            placeholder="Üzenet szövege"
            value={formik.values.message}
            onChange={formik.handleChange}
          ></textarea>
        </label>
        <div className="button">
          <button>Elküld</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
