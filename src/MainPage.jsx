import headshot from "./assets/pictures/Noah-12.jpg";
import "./App.css";

function MainPage() {
  return (
    <>
      <img
        className="headshot"
        src={headshot}
        height="390"
        alt="picture of me"
      />
      <section>
        <p>
          <span>Noah Kivett</span>
          <br />
          <span>Software Developer</span>
          <br />
          <span>
            <a href="https://github.com/nkiv">Github</a>
          </span>
          <br />
          <span>
            <a href="mailto:code@nkivett.work">code@nkivett.work</a>
          </span>
          <br />
          <span>
            <a href="" download>
              Resume
            </a>
          </span>
          <br />
          <span>720-708-8809</span>
          <br />
          <span>Highlands Ranch, CO</span>
        </p>
      </section>
    </>
  );
}
export default MainPage;
