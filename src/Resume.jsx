function Resume() {
  return (
    <>
      <section className="half-size center">
        <h2>Work Experience</h2>
        <ul>
          <h4>IT Support Technician</h4>
          <li>
            <a href="https://www.engr.colostate.edu/ets/">
              Engineering Technology Services
            </a>
            <span className="right-align">
              Employed: October 2023 May 2025 IT Support & Helpdesk, Student
              Account Management, Computer Assembly & System Software Deployment
            </span>
          </li>
          <h4>Customer Service Representative</h4>
          <li>
            <a href="https://www.microcenter.com/">Micro Center Denver</a>
            <span className="right-align">
              Employed: August 2020 October 2020 Cashier, Product Sales,
              Computer & Systems information
            </span>
          </li>
          <h4>Tire Technician</h4>
          <li>
            <a href="https://www.discounttire.com/">Discount Tire</a>
            <span className="right-align">
              Employed: October 2020 June 2021 Tire Repair, Installation,
              Maintenance, Working With a Smile, All weather condition
            </span>
          </li>
          <h4>Sales Associate</h4>
          <li>
            <a href="https://www.pioneerco.com/">Pioneer Landscape Center</a>
            <span className="right-align">
              Employed: May 2022 October 2022 Yard Labor, Customer Service,
              Product Quota
            </span>
          </li>
        </ul>
        <div>
          <h2>Education</h2>
          <ul>
            <li>
              <a href="https://www.colostate.edu/">Colorado State University</a>
              <span className="right-align">
                Bachelors Degree Area of Study: Computer Science
              </span>
            </li>
          </ul>
          <ul>
            <ul>
              <li>Honors Certificate in Stem</li>
            </ul>
          </ul>
        </div>
        <div>
          <h2>Projects</h2>
          <ul>
            <li>
              Biscuits from Outerspace |
              <a href="https://github.com/nkiv/Biscuits-from-Outerspace">
                Github
              </a>
              |
              <a href="https://nkiv.itch.io/biscuits-from-outerspace">
                Itch.io
              </a>
              | #1681 | <a href="">Play Me!</a>
              <p>
                My first game I created start to finish. Written using the
                Phaser.js platform. I gained extensive knowledge about how
                sprites work, camera movement, player movement, item creation,
                player collision, scene switching, and passing information
                between scenes with the Registry. Created for the Brackeys
                GameJam hosted on Itch.io.
              </p>
            </li>
            <li>
              Virtual Reality Drawing |
              <a href="https://github.com/csu-hci-projects/CS465_EbertM_KivettN">
                Github
              </a>
              <p>
                A VR design project that allows the user to switch between two
                different drawing styles. It was used to experiment whether
                participants are more comfortable with drawing using 2-D or 3-D
                spaces in VR. Learned how to create and set up levels in UE5,
                add plugins for the Meta Quest headsets, teleportation in VR,
                drawing on surfaces in VR, spawning objects in VR, and casting
                rays for target acquisition.
              </p>
            </li>
            <li>
              Glitch Pong |{" "}
              <a href="https://github.com/nkiv/pico-8-projects/tree/main/broken-pong">
                Github
              </a>{" "}
              | <a href="https://nkiv.itch.io/glitch-pong">Itch.io</a> |{" "}
              <a href="">Play Me!</a>
              <p>
                My first pico-8 project that I submitted to the Patch Notes game
                Jam. It is a simple pong game that I initially made to mess
                around with a particle system. I added intentional bugs to fit
                the theme of the game Jam. This project increased my knowledge
                about particle systems, player movement, npc movement, player
                and npc bounding, and collision and interactions without premade
                functions.
              </p>
            </li>
            <li>
              Aim Lab |{" "}
              <a href="https://github.com/nkiv/pico-8-projects/tree/main/aim-lab">
                Github
              </a>{" "}
              | <a href="https://nkiv.itch.io/aim-lab">Itch.io</a> |{" "}
              <a href="">Play Me!</a>
              <p>
                A game I created in pico8. It mimics a game I would play in my
                free time during high school. Its simply random targets spawning
                on the screen. Click the targets to gain a score. This project
                help solidify scene switching for me in pico8. Its also a very
                different game for pico8 because it uses the memory address for
                the mouse as well as its inputs
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default Resume;
