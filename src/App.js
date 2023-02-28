import "./App.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function App() {
  // Refs for AoS
  const { ref: WDYM, inView: wdymVisible } = useInView();
  const { ref: final, inView: finalVisible } = useInView();

  return (
    <div className="App">
      <main>
        <section id="header">
          <motion.h1
            animate={{ opacity: [0, 1], y: [75, 0], delay: 0.5 }}
            transition={{
              type: "spring",
              duration: 0.6,
              bounce: 0.3,
              delay: 0.5,
            }}
          >
            Statistics are fun; until you{" "}
            <span className="become-one">become one</span>.
          </motion.h1>
          <motion.h1
            className="sub"
            animate={{ opacity: [0, 1], y: [75, 0], delay: 0.5 }}
            transition={{
              type: "spring",
              duration: 0.6,
              bounce: 0.3,
              delay: 0.5,
            }}
          >
            (Especially for drowsy driving)
          </motion.h1>
          <a href="#WDYM">
            <div className="scroll"></div>
          </a>
        </section>
        <section id="WDYM">
          <h1 ref={WDYM} className={wdymVisible ? "visible" : "hidden"}>
            What do you mean?
            <br /> Why beware of drowsy driving?
            <br />
            Why worry so early?
          </h1>
        </section>
        <section id="facts">
          <h1>The stuff to back it up</h1>
          <div className="card-container">
            <div className="card">
              <h1>Crashes</h1>
              <p className="card-text">
                In 2017 there were ~91,000 crashes with drowsy drivers with
                ~50,000 injured and ~800 deaths
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.nhtsa.gov/risky-driving/drowsy-driving"
                className="link"
              >
                from nhsta.gov
              </a>
            </div>
            <div className="card">
              <h1>When?</h1>
              <li>
                <ul className="card-text">
                  Between midnight and 6:00 a.m. or late afternoon
                </ul>
                <ul className="card-text">Often only the driver in the car</ul>
                <ul className="card-text">Usually rural roads and highways</ul>
              </li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.nhtsa.gov/risky-driving/drowsy-driving"
                className="link"
              >
                from nhsta.gov
              </a>
            </div>
            <div className="card">DIV</div>
            <div className="card">DIV</div>
          </div>
        </section>
        <section id="final">
          <h1
            ref={final}
            className={finalVisible ? "final-visible" : "final-hidden"}
          >
            Will you <span className="become-one">become one</span>?
          </h1>
        </section>
      </main>
    </div>
  );
}

export default App;
