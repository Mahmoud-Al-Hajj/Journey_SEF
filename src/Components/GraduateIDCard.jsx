import React from "react";
import "../styles/GraduateIDCard.css";

function GraduateIDCard() {
  return (
    <div className="graduate-id-card">
      <div className="id-header">
        <div className="se-logo">SE</div>
        <div className="factory-text">FACTORY</div>
      </div>

      <div className="id-content">
        <div className="graduate-name">Mahmoud Al Hajj</div>
        <div className="program">Full-Stack Software Engineer</div>
        <div className="graduation">Graduated: Aug 2025</div>
      </div>

      <div className="id-footer">
        <div className="badge">Graduate</div>
      </div>
    </div>
  );
}

export default GraduateIDCard;
