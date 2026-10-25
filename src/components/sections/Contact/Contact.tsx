import "./Contact.css";

function Contact() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="contact-section"
      id="contact"
    >
      <h2 id="contact-heading">Let&apos;s connect.</h2>
      <p className="contact-invitation">
        Have a question or an idea? I&apos;d love to hear from you.
      </p>
      <ul aria-label="Contact details" className="contact-links">
        <li>
          <span>GitHub</span>
          <a
            aria-label="GitHub profile"
            className="contact-placeholder"
            href="https://github.com/AkashM006"
            rel="noreferrer"
            target="_blank"
          >
            https://github.com/AkashM006
          </a>
        </li>
        <li>
          <span>LinkedIn</span>
          <a
            aria-label="LinkedIn profile"
            className="contact-placeholder"
            href="https://www.linkedin.com/in/akashm006/"
            rel="noreferrer"
            target="_blank"
          >
            https://www.linkedin.com/in/akashm006/
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;