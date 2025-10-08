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
              <h3 className="title">About me</h3>
            </td>
            <td>
              <section className="right-align half-size">
                <p>
                  I was born and raised in Southern Colorado and while growing
                  up at home I learned how to be a leader participating in
                  sports. For a decade I played hockey as a goalie, guarding the
                  net and shouting callouts to my teammates on the ice. I
                  learned how to win and lose playing hockey which provided me
                  with the precious skill of controlling my emotions. This skill
                  became polished later in my sporting career when I started
                  shooting archery. Archery is a highly disciplined sport. To
                  perform well I mastered controlling my body fully;
                  emotionally, physically, and mentally. And after a few years
                  of shooting, I became a Level 1 Certified Coach. While I do
                  not currently coach due to college, I was a private coach with
                  a small team. In high school, I was commended for my
                  dedication to higher achievement with an honors STEM
                  certificate.
                </p>

                <p>
                  From a very young age I have been enticed with electronics.
                  The portable gaming consoles like the GameBoy Advance and the
                  DS systems sparked a love for gaming and electronics that has
                  stuck with me. I spent my time in college honing my
                  programming skills as well as learning about different
                  programming paradigms. Throughout my experiences in college I
                  have always felt the want to create something new and
                  exciting, but I always fumble trying to find the precise spot
                  where creativity and programming logic overlap to mold
                  something special. I want to create that feeling of excitement
                  and wonder for what is next for a gamer, similar to a feeling
                  I had when exploring the world of Pokemon Fire Red as a child.
                </p>

                <p>
                  On my free time I enjoy playing games such as Counter Strike
                  2, Elden ring, The God of War series, The Yakuza Series, and
                  Stardew Valley.
                </p>
                <section className="right-align">
                  <Experience />
                </section>

                <section className="right-align">
                  <Education />
                </section>

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
