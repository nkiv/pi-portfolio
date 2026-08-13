import "./App.css";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";

function About() {
  return (
    <section className="about-container">
      <div className="about-section">
        <div className="section-header">
          <h3 className="title nowrap">About me</h3>
        </div>
        <div className="section-content">
          <p className="text-medium tab">
            Java engineer working on auth microservices at Charter. I've traced
            production bugs through distributed systems, built integration test
            suites from scratch, reviewed code across dozens of services,
            and manage/debug a testing environment for developers. I like
            understanding how things work before I can change them. I use AI
            to document everything.
          </p>
          <p className="text-medium pad-bottom tab">
            Most of my time is spent writing tests that catch real bugs, tracing
            errors through distributed logs, fixing broken and flaky tests, and
            writing clean code that other developers can work with. When I am not
            working, I am tinkering with servers on Raspberry Pi or experimenting
            with game development. Either way I am always hungry to learn!
          </p>
        </div>
      </div>

      <div className="about-section" id="experience">
        <div className="section-header">
          <h2 className="title">Experience</h2>
        </div>
        <div className="section-content">
          <h3 className="text-large bold">Software Developer I</h3>
          <a href="https://www.spectrum.com/">
            <span className="text-large">Charter Communications</span>
          </a>
          <p className="text-medium">
            <span>November 2025 - Present</span>
          </p>
          <p className="pad-bottom text-medium">
            Distributed OAuth2 Platform · 50+ Microservices · Consumer and Enterprise Authentication · Test Environment Management · Release Management · WireMock Integration Tests · Root-Cause Production Bugs · Scripting and AI Automation
          </p>

          <h3 className="text-large bold">Information Technology Help Desk Technician</h3>
          <a href="https://www.engr.colostate.edu/ets/">
            <span className="text-large">Engineering Technology Services</span>
          </a>
          <p className="text-medium">
            <span>October 2023 - May 2025</span>
          </p>
          <p className="pad-bottom text-medium">
            Engineering Help Desk · In-Person and Remote Support · TeamViewer and RDP · Student Account Management · Computer Assembly · System Software Deployment
          </p>
        </div>
      </div>

      <div className="about-section" id="education">
        <div className="section-header">
          <h2 className="title">Education</h2>
        </div>
        <div className="section-content">
          <a href="https://www.colostate.edu/">
            <span className="text-large bold">Colorado State University</span>
          </a>
          <p className="pad-bottom text-medium">
            Bachelor of Science <br /> <br /> Area of Study:{"\t"}Computer Science <br /> <br /> August 2021 - August 2025
          </p>
        </div>
      </div>

      <div className="about-section" id="projects">
        <div className="section-header">
          <h2 className="title">Projects</h2>
        </div>
        <div className="section-content">
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
        </div>
      </div>
    </section>
  );
}
export default About;
