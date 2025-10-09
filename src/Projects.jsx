function Projects() {
  return (
    <div id="projects">
      <h2 className="title pop">Projects</h2>
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
  );
}
export default Projects;
