import "./SiteHeader.css";

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-name" href="#home">
        Akash M.
      </a>
      <nav aria-label="Main navigation">
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default SiteHeader;