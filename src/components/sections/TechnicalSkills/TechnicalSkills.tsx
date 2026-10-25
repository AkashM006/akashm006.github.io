import "./TechnicalSkills.css";

function TechnicalSkills() {
  return (
    <section
      aria-labelledby="skills-heading"
      className="technical-skills"
      id="skills"
    >
      <h2 id="skills-heading">Technical Skills</h2>
      <div className="skill-groups">
        <div className="skill-group">
          <h3>Frontend</h3>
          <ul className="tag-list">
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Next.js</li>
          </ul>
        </div>
        <div className="skill-group">
          <h3>State Management</h3>
          <ul className="tag-list">
            <li>Redux</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkills;