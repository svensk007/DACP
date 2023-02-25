import logo from "./logo.svg";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.h1 animate={{ opacity: [0, 1], y: [75, 0] }}>
          Satistics are interesting; until you become one.
        </motion.h1>
      </header>
      <section></section>
    </div>
  );
}

export default App;
