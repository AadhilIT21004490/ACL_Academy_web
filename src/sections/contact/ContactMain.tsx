"use client"
import React, { useState } from "react";
import contactIcon from "../../../public/assets/images/icon/contact-form-icon-1.png";
import Image from "next/image";

interface ContactItem {
  icon: string;
  title: string;
  text: string | React.ReactNode;
}

const contactInfo: ContactItem[] = [
  {
    icon: "icon-pin",
    title: "Our Location",
    text: "Sri Lanka",
  },
  {
    icon: "icon-user",
    title: "Contact Info",
    text: (
      <>
        <a href="tel:+94763136718">+94763136718</a>
        <br />
        <a href="mailto:aclacademy123@gmail.com">aclacademy123@gmail.com</a>
      </>
    ),
  },
  {
    icon: "icon-live-chat",
    title: "Live Support",
    text: "We are available for live chat via Whatsapp.",
  },
  {
    icon: "icon-time",
    title: "Contact Hours",
    text: (
      <>
        10:00 AM - 6:00 PM <br /> Monday - Friday
      </>
    ),
  },
];
const WHATSAPP_NUMBER = "+94763136718";
const ContactMain: React.FC = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = [
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*Subject:* ${form.subject}`,
      `*Message:*\n${form.message}`,
    ].join("\n");

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

    window.open(url, "_blank");
  };


  return (
    <>
      {/* ================= Contact Page ================= */}
      <section className="contact-page" id='contact'>
        <div className="container">
          <div className="row">
            {/* LEFT SIDE CONTACT INFO */}
            <div className="col-xl-6 col-lg-6">
              <div className="contact-page__left">
                <div className="row">
                  {contactInfo.map((item: ContactItem, i) => (
                    <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                      <div className="contact-page__contact-single">
                        <div className="contact-page__contact-icon">
                          <span className={item.icon}></span>
                          <div className="contact-page__contact-icon-shape"></div>
                        </div>
                        <h3 className="contact-page__contact-single-title">
                          {item.title}
                        </h3>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* RIGHT SIDE FORM */}
            <div className="col-xl-6 col-lg-6">
              <div className="contact-page__right">
                <div className="contact-page__contact-form-title-box">
                  <div className="contact-page__contact-form-title-icon">
                    <Image src={contactIcon} width={24} height={20} alt="Contact Icon" />
                  </div>
                  <h3 className="contact-page__contact-form-title">Send Us Message</h3>
                </div>

                <form
                  className="contact-form-validated contact-page__form"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="contact-page__input-box">
                        <div className="contact-page__input-icon">
                          <span className="icon-user"></span>
                        </div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="contact-page__input-box">
                        <div className="contact-page__input-icon">
                          <span className="icon-envelope"></span>
                        </div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="contact-page__input-box">
                        <div className="contact-page__input-icon">
                          <span className="icon-resume"></span>
                        </div>
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value={form.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-xl-12">
                      <div className="contact-page__input-box text-message-box">
                        <div className="contact-page__input-icon">
                          <span className="icon-write"></span>
                        </div>
                        <textarea
                          name="message"
                          placeholder="Message"
                          value={form.message}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="contact-page__btn-box">
                        <button type="submit" className="thm-btn contact-page__btn">
                          <span className="icon-right"></span> SEND MESSAGE
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="result"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= Google Map ================= */}
      <section className="google-map-one">
        <div className="container">
          <div className="google-map-one__inner">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37808.89117226594!2d81.82936885622058!3d7.219975188286429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae512c72a6c5d7d%3A0xfe285f1793f6b16f!2sAkkaraipattu!5e1!3m2!1sen!2slk!4v1776664915145!5m2!1sen!2slk"
              className="google-map__one"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMain;
