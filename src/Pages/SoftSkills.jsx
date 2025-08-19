import React from "react";
import "../styles/SoftSkills.css";

const softSkills = [
  {
    name: "Teamwork",
    description:
      "Did Multiple Activities that required working in a team and learning how to work effectively as part of a team.",
    example:
      "During my time at SE Factory, I worked in diverse groups on Clothing Ecommerce as the Backend Lead. This collaborative environment provided multiple opportunities to develop interpersonal skills and learn how to work effectively as part of a team.",
  },
  {
    name: "Stress Management",
    description:
      "Breaking down complex tasks into manageable steps, trying to keep calm and focused under pressure.",
    example:
      "Especially when presenting was it the general presentation or technical presentation or even public speaking I would be dying from stress, but now I became confident of what I am doing and talk clearly.",
  },
  {
    name: "Presentation & Public Speaking",
    description:
      "Structuring presentations with clear storylines, using visual aids effectively, and speaking with confidence to both technical and non-technical audiences.",
    example:
      "At the end of each project, I presented our work to mentors and peers, explaining technical concepts to both technical and non-technical audiences. I learned to structure presentations clearly and speak confidently. This helped me adapt my communication style.",
  },
];

function SoftSkills() {
  return (
    <div className="soft-skills-container">
      <div className="chat-header">
        <div className="chat-avatar">👨‍💻</div>
        <div className="chat-info">
          <div className="chat-name">Soft Skills Chat</div>
          <div className="chat-status">Online - SE Factory Graduate</div>
        </div>
      </div>

      <div className="chat-messages">
        <div className="message received">
          <div className="message-avatar">🤖</div>
          <div className="message-content">
            <div className="message-text">
              Hey! Let's talk about your soft skills development at SE Factory.
            </div>
            <div className="message-time">Just now</div>
          </div>
        </div>

        {softSkills.map((skill, index) => (
          <div key={skill.name} className="message sent">
            <div className="message-content">
              <div className="skill-message">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                </div>
                <div className="skill-description">{skill.description}</div>
                <div className="skill-example">{skill.example}</div>
              </div>
              <div className="message-time">Just now</div>
            </div>
          </div>
        ))}

        <div className="message received">
          <div className="message-avatar">🤖</div>
          <div className="message-content">
            <div className="message-text">
              Impressive Mahmoud! You've developed a well-rounded skill set.
              Ready for the real world!
            </div>
            <div className="message-time">Just now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoftSkills;
