import "./App.css";
import About from "./About";
import ContactMe from "./ContactMe";
import Experience from "./Experience";

function MainPage() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset in pixels from top
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <table className="page-nav center">
        <thead>
          <td>
            <a className="text-large" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
              About
            </a>
          </td>
          <td>
            <a className="text-large" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>
              Experience
            </a>
          </td>
          <td>
            <a className="text-large" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>
              Education
            </a>
          </td>
          <td>
            <a className="text-large" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
              Projects
            </a>
          </td>
        </thead>
      </table>

      <section>
        <section id="welcome">
          {/* <p className="center-text pad-top title pad-top-large">
            Hello!
          </p> */}
          <p className="center-text name pad-top-xlarge">Noah Kivett</p>
          <p className="center-text title">Software Developer</p>
          <br />
        </section>
        <section>
          <table className="center">
            <ContactMe />
          </table>
        </section>

        <section id="about">
          <About />
        </section>
      </section>
    </>
  );
}
export default MainPage;
