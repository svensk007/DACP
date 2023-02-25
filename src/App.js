import logo from "./logo.svg";
import "./App.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function App() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="App">
      <section id="header" className="section">
        <motion.h1 animate={{ opacity: [0, 1], y: [75, 0] }}>
          Satistics are fun; until you{" "}
          <span className="become-one">become one</span>.
        </motion.h1>
        <a href="#WDYM">
          <div class="scroll"></div>
        </a>
      </section>
      <section ref={ref} id="WDYM" className="section">
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.1 }}
        >
          WDYM?
        </motion.h1>
      </section>
    </div>
  );
}

export default App;
