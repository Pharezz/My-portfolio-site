import React from "react";
import Title from "../components/Title";
import { stacks } from "../utils/constant";

const Stacks = () => {
  return (
    <section id="stacks" className="mt-30">
      <div className="container">
        <Title
          title={"my"}
          highlight={"stacks"}
          subtitle={"the tools in my dev backpack"}
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stacks.map((stack) => (
            <div key={stack.id} className="flex items-center gap-2 flex-col">
              <img
                src={stack.icon}
                alt={stack.name}
                className="size-12 hover:-translate-y-2 transition-transform duration-500 ease-in-out md:size-16"
              />
              <span className="font-bold">{stack.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stacks;
