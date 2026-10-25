import "./Hero.css";

function Hero() {
  return (
    <section aria-labelledby="intro-heading" className="intro">
      <p className="intro-eyebrow">
        Product Engineer <span aria-hidden="true">·</span> Frontend
        Development <span aria-hidden="true">·</span> 3+ Years
      </p>
      <h1 id="intro-heading">Building frontend experiences at scale.</h1>
      <p className="intro-description">
        I&apos;m a frontend developer with 3+ years of experience building and
        modernizing production web applications, including e-commerce platforms
        serving over a million monthly visits. I focus on creating dependable
        user experiences and maintainable frontend systems.
      </p>
      <div className="intro-actions">
        <a className="intro-primary-action" href="#projects">
          Explore projects
        </a>
      </div>
    </section>
  );
}

export default Hero;