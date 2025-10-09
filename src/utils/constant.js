// project images
import Project1 from "../assets/project-1.png";
import Project3 from "../assets/project-2.png";
import Project2 from "../assets/project-3.png";

// skills images
import Html from "../assets/html5.svg";
import Css from "../assets/css.svg";
import Js from "../assets/javascript.svg";
import React from "../assets/react.svg";
import Node from "../assets/nodejs.svg";
import Express from "../assets/express.svg";
import Tailwind from "../assets/tailwindcss.svg";
import Git from "../assets/git.svg";
import Mongodb from "../assets/mongodb.svg";
import Vercel from "../assets/vercel.svg";

export const projects = [
  {
    id: 1,
    title: "QuickMart",
    description:
      "QuickMart is a modern e-commerce website built with Next.js, featuring a sleek design powered by Tailwind CSS. It offers an intuitive user interface to explore products, and make purchases seamlessly.",
    image: Project1,
    stack: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "https://quick-mart-store.vercel.app/",
    sourceUrl: "https://github.com/Pharezz/QuickMart-Store.git",
  },

  {
    id: 2,
    title: "Cloudz",
    description:
      "Cloudz is clean and responsive weather app built to display real-time weather data for any location. It fetches live weather information using a public API and displays key data such as temperature, weather conditions, humidity, and wind speed. Users can search for cities and receive instant updates with a smooth, intuitive UI.",

    image: Project2,
    stack: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://clouddz.netlify.app/",
    sourceUrl: "https://github.com/Pharezz/cloudz-weather-app.git",
  },

  {
    id: 3,
    title: "Noter",
    description:
      "Noter is a lightweight, user-friendly note-taking app designed for quickly jotting down ideas, tasks, reminders, or thoughts. Built with a focus on simplicity and clean design, it allows users to create, edit, and delete notes effortlessly.",
    image: Project3,
    stack: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://noter-note-app.vercel.app/",
    sourceUrl: "https://github.com/Pharezz/Noter-note-app.git",
  },
];

export const stacks = [
  {
    id: 1,
    name: "HTML",
    icon: Html,
  },

  {
    id: 2,
    name: "CSS",
    icon: Css,
  },

  {
    id: 3,
    name: "JavaScript",
    icon: Js,
  },

  {
    id: 4,
    name: "React",
    icon: React,
  },

  {
    id: 7,
    name: "Tailwind",
    icon: Tailwind,
  },

  {
    id: 5,
    name: "Node",
    icon: Node,
  },

  {
    id: 6,
    name: "Express",
    icon: Express,
  },

  {
    id: 8,
    name: "MongoDB",
    icon: Mongodb,
  },
  {
    id: 9,
    name: "Git (With GitHub)",
    icon: Git,
  },
  {
    id: 10,
    name: "Vercel",
    icon: Vercel,
  },
];
