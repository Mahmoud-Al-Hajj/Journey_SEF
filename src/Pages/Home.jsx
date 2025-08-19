import React from "react";
import { projects, commits } from "../data/projects";
import ProjectsCard from "../Components/ProjectsCard";
import CommitCard from "../Components/CommitCard";
import FloatingTechIcons from "../Components/FloatingTechIcons";
import GraduateIDCard from "../Components/GraduateIDCard";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <FloatingTechIcons />
      <div className="hero-section">
        <GraduateIDCard />
        <h1 className="hero-title">My SE Factory Journey</h1>
        <p className="hero-subtitle">
          Documenting my growth through the SE Factory Full-Stack Engineering
          program
        </p>
      </div>

      <section className="company-section">
        <h2 className="section-title">Company & Role</h2>
        <div className="company-content">
          <div className="company-info">
            <h3>SE Factory Full-Stack Software Engineering Bootcamp</h3>
            <p className="company-description">
              In Summer 2025, I participated in SE Factory's Full-Stack Software
              Engineering Bootcamp. This intensive 8-week program provided
              hands-on experience in backend and frontend development, modern
              web technologies, and professional collaboration in a fast-paced
              environment. The bootcamp was hybrid, online and in-person
              sessions at Beirut Digital District (BDD).
            </p>
          </div>

          <div className="activities-info">
            <h4>Bootcamp Activities</h4>
            <ul className="activities-list">
              <li>
                Actively participated in the 14 week SE Factory Full-Stack
                Software Engineering program, engaging in daily coding
                challenges, project sprints, and peer code reviews.
              </li>
              <li>
                Designed, developed, and deployed full-stack web applications
                using industry-standard technologies and best practices.
              </li>
              <li>
                Wrote clean, maintainable, and well-documented code, ensuring
                scalability and security for all applications.
              </li>
              <li>
                Integrated RESTful APIs and managed both frontend and backend
                development, including database schema design and cloud
                deployment.
              </li>
              <li>
                Used Git & GitHub for version control and collaborative coding,
                implementing branching strategies and resolving merge conflicts.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="journey-section">
        <h2 className="section-title">My Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-image"></div>
              <h3>Week 1: Fixing the Cracks in the Foundation</h3>
              <ul>
                <li>
                  Debugging, Tracing, and Data Structures Recap and OOP (PHP)
                </li>
                <li>GitHub Version Control: Branches and PRs</li>
                <li>Testing & Test-Driven Development</li>
                <li>Cloud Hosting & AWS Introduction</li>
                <li>Project 1 Launch: Vanilla PHP & SQL Backend Project</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-image"></div>
              <h3>Week 2: From Order to Chaos</h3>
              <ul>
                <li>Software Development Lifecycle (SDLC)</li>
                <li>System Modeling & Design Patterns</li>
                <li>Clean Code & Best Practices</li>
                <li>Project 1 Presentation & Project 2 Launch</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-image"></div>
              <h3>Week 3: Patterns that Make the Code Dance</h3>
              <ul>
                <li>Design Patterns (Singleton, Factory, MVC, Observer)</li>
                <li>SOLID Principles</li>
                <li>CI/CD & GitHub Actions Introduction</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-image"></div>
              <h3>Week 4: The School</h3>
              <ul>
                <li>Laravel Basics for Full Stack Development</li>
                <li>Relational & NoSQL Databases (MongoDB)</li>
                <li>Security in Web Dev(XSS, SQL Injection)</li>
                <li>Mid-Program Evaluations & Nominations</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-image"></div>
              <h3>Week 5: Going Advanced</h3>
              <ul>
                <li>Jobs, Listeners, and Observers in Laravel</li>
                <li>Service Providers & Events in Laravel</li>
                <li>Advanced SQL</li>
                <li>
                  Project 2 Presentation & Project 3 (Group Project) Launch
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-image"></div>
              <h3>Week 6: The Pulse of Real-Time Web</h3>
              <ul>
                <li>Performance Optimization</li>
                <li>Node.js & WebSockets</li>
                <li>Security in Web Applications</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-image">
                <img
                  src="/Images/TechTalk.jpg"
                  alt="Week 7: Voices from Experts"
                />
              </div>
              <h3>Week 7: Voices from the Experts</h3>
              <ul>
                <li>Special sessions on AI, Machine Learning, and IoT</li>
                <li>Real-world case studies & industry guidance</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-image">
                <img
                  src="/Images/Tech2.jpg"
                  alt="Week 7: Voices from Experts"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectsCard key={index} project={project} />
          ))}
        </div>
      </section>

      <section className="commits-section">
        <h2 className="section-title">Commit & Cry: Mahmoud’s Edition</h2>
        <div className="commits-grid">
          {commits.map((commit, index) => (
            <CommitCard key={index} commit={commit} />
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">About My Journey</h2>
        <div className="about-content">
          <p>
            My journey at SE Factory has been transformative. Starting with
            basic web technologies, I've grown into a confident full stack
            software engieer capable of building complete applications from
            frontend to backend, to the CI/CD and to deployment.
          </p>
          <p>
            Through intensive hands-on projects, collaborative team work, and
            mentorship from industry professionals, I've developed not just
            technical skills but also the mindset and work ethic needed for
            real-world software development.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
