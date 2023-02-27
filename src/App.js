import "./App.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref: WDYM, inView: wdymVisible } = useInView();

  return (
    <div className="App">
      <section id="header" className="section">
        <motion.h1
          animate={{ opacity: [0, 1], y: [75, 0] }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
        >
          Satistics are fun; until you{" "}
          <span className="become-one">become one</span>.
        </motion.h1>
        <a href="#WDYM">
          <div className="scroll"></div>
        </a>
      </section>
      <section id="WDYM" className="section">
        <h1 ref={WDYM} className={wdymVisible ? "visible" : "hidden"}>
          WDYM?
        </h1>
        <a href="#final">
          <div className="scroll"></div>
        </a>
      </section>
      <section id="final" className="section">
        <h1>
          Will you <span className="become-one">become one</span>?
        </h1>
      </section>
    </div>
  );
}

export default App;
