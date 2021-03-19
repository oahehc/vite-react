import { useState } from "react";
import ShowEnv from "./ShowEnv";
import logo from "./asset/logo.svg";
import style from "./style/App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={style.App}>
      <header className={style["App-header"]}>
        <img src={logo} className={style["App-logo"]} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className={style["App-link"]}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className={style["App-link"]}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        <ShowEnv />
      </header>
    </div>
  );
}

export default App;
