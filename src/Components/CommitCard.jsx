import React from "react";
import "../styles/CommitCard.css";

function CommitCard({ commit }) {
  return (
    <div className="commit-card">
      <div className="commit-header">
        <div className="commit-date">{commit.date}</div>
      </div>
      <div className="commit-image-container">
        <img
          src={commit.image}
          alt={`Commit from ${commit.project}`}
          className="commit-image"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>
      <div className="commit-content">
        <p className="commit-message">{commit.message}</p>
        <div className="commit-project">{commit.project}</div>
      </div>
    </div>
  );
}

export default CommitCard;
