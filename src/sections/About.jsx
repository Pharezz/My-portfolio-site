import React from "react";
import AboutImg from "../assets/hero-img.jpg";
import Title from "../components/Title";

const About = () => {
  return (
    <section id="about" className="mt-30">
      <div className="container">
        <div className="md:grid md:grid-cols-2 gap-8 items-center">
          <div className="mb-8 md:mb-0">
            <img
              src={AboutImg}
              alt="about image"
              className="object-cover rounded-2xl"
            />
          </div>
          <div>
            <Title
              title={"about"}
              highlight={"me"}
              subtitle={"Writing code, building things, learning always"}
              IsCenter={false}
            />
            <p className="leading-7">
              I'm a full-stack software developer with a passion for delivering
              smart, effective web solutions that solve everyday problems. I've
              honed my skills in building modern, user-focused platforms that
              not only look great but also deliver real results. I believe every
              feature should serve a purpose—aligned with your goals and your
              users' needs. Whether it's crafting a responsive front end or
              designing scalable backend architecture, I'm here to turn your
              vision into a functional, intuitive product. Let's build something
              meaningful together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
