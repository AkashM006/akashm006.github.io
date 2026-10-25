import "./ProfessionalExperience.css";

function ProfessionalExperience() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="experience-section"
      id="experience"
    >
      <p className="experience-section-label">Professional Experience</p>
      <h2 id="experience-heading">
        Building software for real business needs.
      </h2>
      <article className="experience-entry">
        <header className="experience-header">
          <div>
            <h3>
              Product Engineer <span aria-hidden="true">·</span> Codingmart
              Technologies
            </h3>
            <p className="experience-employer">
              Building production frontend applications
            </p>
          </div>
        </header>

        <p className="experience-introduction">
          I build and improve production frontend applications, from
          high-traffic e-commerce storefronts to internal business tools.
        </p>

        <div className="experience-technologies">
          <h4>Technologies</h4>
          <ul aria-label="Technologies used" className="tag-list">
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Next.js</li>
            <li>Redux</li>
          </ul>
        </div>

        <ol
          aria-label="Professional achievements"
          className="experience-achievements"
        >
          <li>
            <h4>E-commerce at scale</h4>
            <p>
              Contributed to building and maintaining enterprise-grade D2C
              storefronts using Next.js, supporting e-commerce experiences
              across platforms serving <strong>1M+ monthly visits</strong>.
            </p>
          </li>
          <li>
            <h4>Internal no-code page builder</h4>
            <p>
              Built the frontend of an internal no-code page builder in React,
              enabling business teams to launch campaign pages faster with less
              reliance on engineering.
            </p>
          </li>
        </ol>
      </article>
    </section>
  );
}

export default ProfessionalExperience;