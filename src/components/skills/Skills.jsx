import React from "react";
import { Frontend } from "./Frontend";
import "./skills.css";
import { UI } from "./UI";
import SkillsLeft from "../../assets/skills_left.jpg";
import SkillsRight from "../../assets/skills_right.jpg";

const Skills = () => {
  return (
    <section
      className="skills section"
      id="skills"
    >
      <h2 className="section__title">How I Do It</h2>
      <span className="section__subtitle">-----</span>
      <div className="skills__container container grid">
        <Frontend />

        <UI />
      </div>
    </section>
  );
};

export default Skills;
