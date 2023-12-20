// Imports
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// Contact Container
const Contact = () => {
  // useRef
  const formRef = useRef();

  // useStates
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Form Values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_vjk26hb",
        "template_weak47g",
        {
          from_name: form.name,
          to_name: "Ian",
          from_email: form.email,
          to_email: "codebyian254@gmail.com",
          message: form.message,
        },
        "Y1OK4YEBcsENY0bod"
      )
      .then(() => {
        setLoading(false);
        alert("Thank You. I Will get back to you as soon as possible.");
      });

    setForm({ name: "", email: "", message: "" }, (error) => {
      setLoading(false), console.log(error);
      alert("Something went wrong. Could not send Email.");
    });
  };

  return (
    <div className="xl:mt-12  xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 mb-20 flex flex-col gap-8"
        >
          {/* Name */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bh-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Email */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bh-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Message */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can i help?"
              className="bh-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium  resize-none"
            />
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <p className="text-center">
          Developed By <span className="blue-text-gradient">CodebyIan </span>.{" "}
          <br /> Copyright © 2024, All Rights Reserved.
        </p>
      </motion.div>

      {/* 3D Earth Model */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

// Export
export default SectionWrapper(Contact, "contact");
