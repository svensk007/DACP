import "./App.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function App() {
  // Refs for AoS
  const { ref: WDYM, inView: wdymVisible } = useInView();
  const { ref: final, inView: finalVisible } = useInView();
  const { ref: remember, inView: rememberVisible } = useInView();
  const { ref: card, inView: cardVisible } = useInView();

  return (
    <div className="App">
      <main>
        <section id="header">
          <motion.h1
            defer
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
            defer
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
            Why worry? I don't even have my license yet!
          </h1>
        </section>
        <section id="facts">
          <h1
            ref={remember}
            className={rememberVisible ? "remember-visible" : "remember-hidden"}
          >
            things to remember
          </h1>
          <div className="card-container">
            <div
              ref={card}
              className={cardVisible ? "card-visible" : "card-hidden"}
            >
              <h1 className="card-title">Risks</h1>
              <ul className="card-text">
                In 2017 there were ~91,000 crashes with drowsy drivers with
                ~50,000 injured and ~800 deaths
              </ul>
              <ul className="card-text">
                Drowsy driving related accidents are underreported because
                investigators can only look for clues
              </ul>
              <ul className="card-text">
                When you are drowsy you can also have ???micro sleeps??? or brief
                sleeps that can last for 4-5 seconds and at 55 miles per hour,
                thats over 100 yards down the road asleep
              </ul>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.nhtsa.gov/risky-driving/drowsy-driving"
                className="source"
              >
                nhsta.gov
              </a>
            </div>
            <div
              ref={card}
              className={cardVisible ? "card-visible" : "card-hidden"}
            >
              <h1 className="card-title">When?</h1>
              <ul>
                <li className="card-text">
                  Between midnight and 6:00am or late afternoon
                </li>
                <li className="card-text">Often only the driver in the car</li>
                <li className="card-text">Usually rural roads and highways</li>
              </ul>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.nhtsa.gov/risky-driving/drowsy-driving"
                className="source"
              >
                nhsta.gov
              </a>
            </div>
            <div
              ref={card}
              className={cardVisible ? "card-visible" : "card-hidden"}
            >
              <h1 className="card-title">Drive Alert</h1>
              <ul>
                <li className="card-text">Get good sleep (7-8 hours)</li>
                <li className="card-text">Most teens don't get enough sleep</li>
                <li className="card-text">
                  Some medications can cause sleepiness
                </li>
                <li className="card-text">
                  Avoid driving in those peak sleepiness periods
                  (12:00am-6:00am)
                </li>
                <li className="card-text">
                  Once you are 21 don't drink alcohol before driving because it
                  slows you down and makes you sleepy
                </li>
              </ul>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.nhtsa.gov/risky-driving/drowsy-driving"
                className="source"
              >
                nhsta.gov
              </a>
            </div>
            <div
              ref={card}
              className={cardVisible ? "card-visible" : "card-hidden"}
            >
              <h1 className="card-title">Legal</h1>
              <ul className="card-text">
                Only two states have legal consequences for people who drive
                drowsy and injure/kill someone
              </ul>
              <ul className="card-text">
                Both need proof that you were awake in excess of 24 consecutive
                hours
              </ul>
              <ul className="card-text">
                Arkansas - Must be a death and can give up to 20 years in jail
              </ul>
              <ul className="card-text">
                New Jersey - In the even of an accident you can be charged up to
                10 years in prison and a $100,000 fine
              </ul>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.ghsa.org/state-laws/issues/drowsy-driving"
                className="source"
              >
                ghsa.gov
              </a>
            </div>
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
