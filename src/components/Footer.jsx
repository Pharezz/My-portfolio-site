import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 pb-6 text-center">
      <div className="container">
        <p className="text-gray-400">
            &copy; Ikechukwu Oguegbu {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
