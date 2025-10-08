import React from "react";

const Form = () => {
  return (
    <form name="contact v1" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact v1" />
      <div className="mb-4">
        <input
          type="text"
          id="name"
          name="name"
          required
          className="h-[45px] mb-2 w-full rounded-sm bg-slate-900 pl-4"
          placeholder="Name"
        />
      </div>

      <div className="mb-4">
        <input
          type="email"
          id="email"
          name="email"
          required
          className="h-[45px] w-full mb-2 rounded-sm bg-slate-900 pl-4"
          placeholder="Email"
        />
      </div>

      <div className="mb-4">
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          className="w-full pt-4 rounded-sm bg-slate-900 pl-4"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <button className="w-full py-3 inline-block capitalize font-semibold bg-gradient-to-r from-indigo-700 to-purple-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-600 duration-500 transition-colors ease-in-out text-white rounded-md cursor-pointer">
        Send Message
      </button>
    </form>
  );
};

export default Form;
