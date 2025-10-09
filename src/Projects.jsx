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
            My first game I created start to finish. Written using the Phaser.js
            platform. I gained extensive knowledge about how sprites work,
            camera movement, player movement, item creation, player collision,
            scene switching, and passing information between scenes with the
            Registry. Created for the Brackeys GameJam hosted on Itch.io.
          </p>
        </li>
        <br />
        <li>
          <span className="bold">Virtual Reality Drawing</span> |{" "}
          <a href="https://github.com/csu-hci-projects/CS465_EbertM_KivettN">
            Github
          </a>
          <p>
            A VR design project that allows the user to switch between two
            different drawing styles. It was used to experiment whether
            participants are more comfortable with drawing using 2-D or 3-D
            spaces in VR. Learned how to create and set up levels in UE5, add
            plugins for the Meta Quest headsets, teleportation in VR, drawing on
            surfaces in VR, spawning objects in VR, and casting rays for target
            acquisition.
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
            My first pico-8 project that I submitted to the Patch Notes game
            Jam. It is a simple pong game that I initially made to mess around
            with a particle system. I added intentional bugs to fit the theme of
            the game Jam. This project increased my knowledge about particle
            systems, player movement, npc movement, player and npc bounding, and
            collision and interactions without premade functions.
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
            A game I created in pico8. It mimics a game I would play in my free
            time during high school. Its simply random targets spawning on the
            screen. Click the targets to gain a score. This project help
            solidify scene switching for me in pico8. Its also a very different
            game for pico8 because it uses the memory address for the mouse as
            well as its inputs
          </p>
        </li>
      </ul>
    </div>
  );
}
export default Projects;
