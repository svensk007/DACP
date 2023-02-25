import logo from "./logo.svg";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <header id="head" className="section">
        <motion.h1 animate={{ opacity: [0, 1], y: [75, 0] }}>
          Satistics are interesting; until you{" "}
          <span className="become-one">become one</span>.
        </motion.h1>
        <motion.div class="scroll"></motion.div>
      </header>
      <section id="WDYM" className="section">
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
