import "./App.css";
import About from "./About";
import ContactMe from "./ContactMe";
import Experience from "./Experience";

function MainPage() {
  return (
    <>
      <table className="page-nav center">
        <thead>
          <td>
            <a href="/#about">About</a>
          </td>
          <td>
            <a href="/#experience">Experience</a>
          </td>
          <td>
            <a href="/#projects">Projects</a>
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
