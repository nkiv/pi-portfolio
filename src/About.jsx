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
              <section className="right-align three-quarter-size">
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
              </section>
            </td>
          </thead>
          <thead id="experience">
            <td colSpan={5} className="float-top">
              <h2 className="title">Experience</h2>
            </td>
            <td>
              <section className="right-align three-quarter-size">
                <h3 className="text-large bold">IT Support Technician</h3>
                <a href="https://www.engr.colostate.edu/ets/">
                  <span className="text-large ">Engineering Technology Services</span>
                </a>
                <p className="pad-bottom text-medium">
                  <span className="right-align">Employed: October 2023 to May 2025</span>
                  <br /> <br /> IT Support & Helpdesk, Student Account Management, Computer
                  Assembly & System Software Deployment
                </p>
              </section>
            </td>
          </thead>
          <thead id="education">
            <td colSpan={5} className="float-top">
              <h2 className="title">Education</h2>
            </td>
            <td>
              <section className="right-align three-quarter-size">
                <a href="https://www.colostate.edu/">
                  <span className="text-large bold">Colorado State University</span>
                </a>
                <p className="pad-bottom text-medium">
                  Bachelors of Science <br /> <br /> Area of Study:{" "}
                  <span className="right-align">Computer Science</span>
                </p>
              </section>
            </td>
          </thead>
          <thead id="projects">
            <td colSpan={5} className="float-top">
              <h2 className="title">Projects</h2>
            </td>
            <td>
              <section className="right-align three-quarter-size">
                <ul className="text-medium">
                  <li>
                    <span className="bold">Biscuits from Outerspace</span> |{" "}
                    <a href="https://github.com/nkiv/Biscuits-from-Outerspace">Github</a>{" "}
                    | <a href="https://nkiv.itch.io/biscuits-from-outerspace">Itch.io</a>{" "}
                    | #1681
                    <p>
                      <span className="terminal">~$</span>
                      {"\t"}
                      Demonstrated my ability to learn and use a new framework. Created a
                      prototype with limited time using manuals and tutorials.
                      Strengthened proficiency in Javascript and Game Development.
                      Submission was judged by peer game developers.
                    </p>
                  </li>
                  <br />
                  <li>
                    <span className="bold">Virtual Reality Drawing</span> |{" "}
                    <a href="https://github.com/csu-hci-projects/CS465_EbertM_KivettN">
                      Github
                    </a>
                    <p>
                      <span className="terminal">~$</span>
                      {"\t"}A VR project that allows the user to test two different
                      drawing styles. It was used to experiment whether participants are
                      more comfortable with drawing using 2D or 3D spaces in VR. Gained
                      experience in designing levels in UE5, troubleshooting compatibility,
                      importing and using plugins, player movement, ray casting combined
                      with detection for 2d drawing, creating and destroying objects from
                      events, and coding/debugging Blueprint Graphs.
                    </p>
                  </li>
                  <br />
                  <li>
                    <span className="bold">Glitch Pong</span> |{" "}
                    <a href="https://github.com/nkiv/pico-8-projects/tree/main/broken-pong">
                      Github
                    </a>{" "}
                    | <a href="https://nkiv.itch.io/glitch-pong">Itch.io</a> |
                    <p>
                      <span className="terminal">~$</span>
                      {"\t"}
                      Demonstrated ability to create a prototype in a new programming
                      language with a time constraint. Pong style game with intentional
                      bugs (jam theme). Created a particle system for the ball. Learned
                      basic collision detection for different object types without
                      pre-made methods.
                    </p>
                  </li>
                  <br />
                  <li>
                    <span className="bold">Aim Lab</span> |{" "}
                    <a href="https://github.com/nkiv/pico-8-projects/tree/main/aim-lab">
                      Github
                    </a>{" "}
                    | <a href="https://nkiv.itch.io/aim-lab">Itch.io</a> |
                    <p>
                      <span className="terminal">~$</span>
                      {"\t"}
                      Uses memory addresses to discern the position of the mouse. Side
                      project for solidifying my PICO-8 game loop knowledge. Uses scene
                      switching, time, as well as memory passing between scenes.
                    </p>
                  </li>
                </ul>
              </section>
            </td>
          </thead>
        </table>
      </section>
    </>
  );
}
export default About;
