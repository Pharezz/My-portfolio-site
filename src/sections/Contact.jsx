import React from "react";
import Title from "../components/Title";
import Form from "../components/Form";
import {} from "lucide-react";
import { FaEnvelope, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container mt-30">
        <Title
          title={"contact"}
          highlight={"me"}
          subtitle={"ping me anytime "}
          IsCenter={false}
        />
        <div className="md:grid md:grid-cols-2 md:gap-16">
          <Form />
          <div className="mb-16 mt-8">
            <div className="mb-2 flex flex-wrap items-center justify-start gap-2">
              <FaWhatsapp className="size-5" />
              <a
                href="https://wa.me/2347035545577"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold transition-colors duration-300 hover:text-indigo-700 "
              >
                07035545577
              </a>
            </div>

            <div className="mb-4 flex flex-wrap items-center justify-start gap-2">
              <FaEnvelope className="size-5" />
              <a
                href="mailto:oguegbuikechukwu@gmail.com"
                target="_blank"
                className="text-lg font-semibold
                 transition-colors duration-300 hover:text-indigo-700"
              >
                oguegbuikechukwu@gmail.com
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-start gap-4">
              {/* <a href="https://www.facebook.com/iykeoguegbu">
              {" "}
              <FaFacebook className="size-5 hover:-translate-y-2 hover:text-blue-600 transition-transform duration-300 ease-in-out" />
            </a> */}
              <a
                href="https://www.linkedin.com/in/ikechukwu-oguegbu-921601248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                {" "}
                <FaLinkedin className="size-5 hover:-translate-y-2 hover:text-blue-600 transition-transform duration-300 ease-in-out" />
              </a>
              <a
                href="https://x.com/Pharrezz?t=Q69ycYuDKWt2sIjXbcw9_w&s=08"
                target="_blank"
              >
                {" "}
                <FaXTwitter className="size-5 hover:-translate-y-2 hover:text-blue-600 transition-transform duration-300 ease-in-out" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
