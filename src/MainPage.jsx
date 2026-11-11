import "./App.css";
import About from "./About";
import ContactMe from "./ContactMe";
import EdgeArt from "./EdgeArt";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

const highlights = [
  { value: "500+", label: "test failures resolved" },
  { value: "10+", label: "services modernized" },
  { value: "345+", label: "regression runs triaged" },
];

function MainPage() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <EdgeArt />
      <nav className="page-nav" aria-label="Sections">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="wrap">
        <header className="hero">
          <div className="hero-intro">
            <div className="hero-center">
              <h1 className="name">Noah Kivett</h1>
              <p className="hero-title">Software Engineer</p>
            </div>
            <div className="hero-bottom">
              <p className="hero-tagline">
                Java · Spring Boot · AWS · Kubernetes
                <span className="hero-sep" aria-hidden="true"> | </span>
                <br className="hero-break" />
                OAuth2/OIDC Identity Platforms
              </p>
              <p className="hero-location">Littleton, CO</p>
            </div>
          </div>
          <ContactMe />

          <dl className="highlights">
            {highlights.map((h) => (
              <div key={h.label}>
                <dt>{h.value}</dt>
                <dd>{h.label}</dd>
              </div>
            ))}
          </dl>
        </header>

        <About />
      </main>
    </>
  );
}
export default MainPage;
