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
            animate={{ opacity: [0, 1], y: [75, 0] }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
          >
            Satistics are fun; until you{" "}
            <span className="become-one">become one</span>.
          </motion.h1>
          <a href="#WDYM">
            <div
              className="scroll"
            ></div>
          </a>
        </section>
        <section id="WDYM">
          <h1 ref={WDYM} className={wdymVisible ? "visible" : "hidden"}>
            What do you mean?
          </h1>
          <a href="#here-why">
            <div className="scroll"></div>
          </a>
        </section>
        <section id="here-why">
          <h1>Why beware of drowsy driving?</h1>
          <h2>Read this ↓</h2>
          <a href="#final">
            <div className="scroll"></div>
          </a>
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
