import checkmark from "../assets/image/checkmark.png";
import React from "react";
interface ExperienceProps {
    readonly title: string;
    readonly level: string;
  }
  
  const Experience: React.FC<ExperienceProps> = ({  title, level }: ExperienceProps) => {
    return (
      <article>
        <img
          src={checkmark}
          alt="Experience icon"
          className="icon"
        />
        <div>
          <h3>{title}</h3>
          <p>{level}</p>
        </div>
      </article>
    );
  };
  
  export default Experience;
  