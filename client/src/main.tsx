import { createRoot } from "react-dom/client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import LoadingScreen from "./components/LoadingScreen";

function Root() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const done = () => {
      // tiny delay so the transition is visible and feels intentional
      const t = setTimeout(() => setLoaded(true), 200);
      return () => clearTimeout(t);
    };

    if (document.readyState === "complete") {
      done();
    } else {
      const onLoad = () => done();
      window.addEventListener("load", onLoad, { once: true });
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  return (
    <>
      <LoadingScreen visible={!loaded} />
      <App />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

