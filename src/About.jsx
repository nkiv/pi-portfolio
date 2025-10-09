import "./App.css";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";

function About() {
  return (
    <>
      <section>
        <table>
          <thead>
            <td colSpan={5} className="float-top">
              <h3 className="title nowrap">About me</h3>
            </td>
            <td>
              <section className="right-align half-size">
                <p className="text-medium tab">
                  I have been coding for over a decade, starting in a middle
                  school coding club where we made games in Xcode. In high
                  school I learned Java and cracked coding challenges on{" "}
                  <a href="codingbat.com">codingbat.com</a>. I went on to major
                  in Computer Science, gaining exposure to a wide range of
                  languages and paradigms such as Python, JavaScript, Scala. As
                  well as learning core topics like algorithms, distributed
                  systems, and programming language development.
                </p>
                <p className="text-medium pad-bottom tab">
                  For the past year post-grad I have focused on learning React
                  and Node to build web applications that are fast, scalable,
                  and user friendly. When I am not exploring new coding
                  concepts, I am tinkering with servers on Raspberry Pi or
                  experimenting with game development using Phaser.js and
                  Pico‑8.
                </p>

                <Experience />

                <Education />

                <section className="right-align">
                  <Projects />
                </section>
              </section>
            </td>
          </thead>
        </table>
      </section>
    </>
  );
}
export default About;
