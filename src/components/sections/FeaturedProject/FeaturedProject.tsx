import "./FeaturedProject.css";
import ImageLightbox from "../../common/ImageLightbox/ImageLightbox";

function FeaturedProject() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="featured-project"
      id="projects"
    >
      <article>
        <header className="project-intro">
          <p className="project-label">Project · 01</p>
          <h2 id="projects-heading">Track It</h2>
          <p className="project-description">
            A personal finance tracker built to organize everyday expenses,
            pending payments, and money allocated to different purposes.
          </p>
        </header>

        <div className="project-layout">
          <figure className="project-preview">
            <ImageLightbox
              images={[
                {
                  alt: "Track It finance app collage showing the home, savings bucket, actions, and monthly reports screens",
                  src: "/track-it.png",
                },
              ]}
              thumbnailLabel="Open Track It app screenshots"
            />
            <figcaption>
              A look at the app's home, savings, transactions, and reporting
              screens.
            </figcaption>
          </figure>

          <div className="project-details">
            <section aria-labelledby="project-features-heading">
              <h3 id="project-features-heading">What it does</h3>
              <ul className="project-features">
                <li>
                  Record daily expenses and track payments that are still
                  pending.
                </li>
                <li>
                  Organize money into flexible buckets for savings, spending,
                  lending, and investments.
                </li>
                <li>
                  View monthly reports across expenses, receipts, transactions
                  and total savings.
                </li>
              </ul>
            </section>

            <section aria-labelledby="project-stack-heading">
              <h3 id="project-stack-heading">Technology</h3>
              <ul
                aria-label="Technology stack"
                className="tag-list project-stack"
              >
                <li>React Native</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Prisma</li>
              </ul>
            </section>
          </div>
        </div>
      </article>
    </section>
  );
}

export default FeaturedProject;