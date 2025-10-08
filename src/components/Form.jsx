import React from "react";
import { toast } from "react-toastify";

const Form = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      toast.success("Message sent successfully!"); // ✅ Toast for success
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Try again."); // ❌ Toast for error
    }
  };

  return (
    <form
      name="contact v1"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact v1" />

      <div className="mb-4">
        <input
          type="text"
          name="name"
          required
          className="h-[45px] mb-2 w-full rounded-sm bg-slate-900 pl-4"
          placeholder="Name"
        />
      </div>

      <div className="mb-4">
        <input
          type="email"
          name="email"
          required
          className="h-[45px] w-full mb-2 rounded-sm bg-slate-900 pl-4"
          placeholder="Email"
        />
      </div>

      <div className="mb-4">
        <textarea
          name="message"
          rows={10}
          required
          className="w-full pt-4 rounded-sm bg-slate-900 pl-4"
          placeholder="Message"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 inline-block capitalize font-semibold bg-gradient-to-r from-indigo-700 to-purple-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-600 duration-500 transition-colors ease-in-out text-white rounded-md cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
