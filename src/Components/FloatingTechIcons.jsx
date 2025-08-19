import React from "react";
import {
  SiLaravel,
  SiReact,
  SiRedis,
  SiPhp,
  SiExpress,
  SiNodedotjs,
  SiFlutter,
  SiGithub,
  SiDocker,
} from "react-icons/si";
import "../styles/FloatingTechIcons.css";

const FloatingTechIcons = () => {
  const techIcons = [
    { icon: SiLaravel, name: "Laravel", delay: 0 },
    { icon: SiReact, name: "React", delay: 1 },
    { icon: SiRedis, name: "Redis", delay: 2 },
    { icon: SiPhp, name: "PHP", delay: 3 },
    { icon: SiExpress, name: "ExpressJS", delay: 4 },
    { icon: SiNodedotjs, name: "NodeJS", delay: 5 },
    { icon: SiFlutter, name: "Flutter", delay: 6 },
    { icon: SiGithub, name: "GitHub", delay: 7 },
    { icon: SiDocker, name: "Docker", delay: 8 },
  ];

  return (
    <div className="floating-icons-container">
      {techIcons.map((tech, index) => {
        const IconComponent = tech.icon;
        return (
          <div
            key={index}
            className="floating-icon"
            style={{ animationDelay: `${tech.delay}s` }}
            title={tech.name}
          >
            <IconComponent />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingTechIcons;
