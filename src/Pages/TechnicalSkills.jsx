import React from "react";
import "../styles/TechnicalSkills.css";

const skills = [
  {
    name: "React",
    description:
      "Building interactive UIs and SPAs with modern hooks and context.",
  },
  {
    name: "Laravel",
    description:
      "Robust PHP backend framework with Eloquent ORM and Blade templating.",
  },
  {
    name: "MySQL",
    description:
      "Relational database design and optimization with complex queries.",
  },
  {
    name: "Redux",
    description:
      "State management for scalable applications with predictable patterns.",
  },
  {
    name: "REST APIs",
    description:
      "Designing and consuming RESTful APIs with proper HTTP methods.",
  },
  {
    name: "Git",
    description: "Version control and collaboration with branching strategies.",
  },
  {
    name: "Flutter",
    description:
      "Mobile app development with Dart, covering UI design and state management (Stateless & Stateful widgets).",
  },
  {
    name: "Docker",
    description:
      "Platform that developers to build, ship, and run applications within isolated environments called containers.",
  },
  {
    name: "Redis",
    description:
      "Used as cache, queue manager, and real-time data handler for event-driven applications.",
    level: "Intermediate",
  },
  {
    name: "Node.js & Express.js",
    description:
      "Building REST APIs, middleware, and server side logic for full stack applications.",
  },
  {
    name: "Automation Dev",
    description:
      "Building automation workflows for integrations (GitHub, email, APIs).",
  },
  {
    name: "CI/CD",
    description:
      "Setting up automated pipelines for testing, building, and deploying applications using tools like GitHub Actions.",
  },
  {
    name: "MVC design system",
    description:
      "Model-View-Controller pattern for maintainability and scalability.",
  },
  {
    name: "AWS Deployment",
    description:
      "Deploying and managing web applications on AWS, including EC2, RDS, and S3 services.",
  },
];

function TechnicalSkills() {
  return (
    <div className="tech-skills-container">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="btn red"></span>
            <span className="btn yellow"></span>
            <span className="btn green"></span>
          </div>
          <div className="terminal-title">skills@se-factory:~$</div>
        </div>

        <div className="terminal-content">
          <div className="command-line">
            <span className="prompt">$</span>
            <span className="command">cat skills.txt</span>
          </div>

          <div className="skills-output">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-line">
                <span className="tech-skill-name">{skill.name}</span>
                <span className="skill-desc">// {skill.description}</span>
              </div>
            ))}
          </div>

          <div className="command-line">
            <span className="prompt">$</span>
            <span className="command">echo "Ready for production!"</span>
          </div>
          <div className="output-line">
            <span className="output">Mahmoud is ready for the market!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkills;
