import React from "react";
import { Projects } from "./component/Projects/index.jsx";
import { useSelector } from "react-redux";
import { Issues } from "./component/Issues/index.jsx";

function App() {
  const { project } = useSelector((state) => state.toDo);

  return (
    <div>
      <section>
        <h2>Projects</h2>
        <Projects />
      </section>
      {project && (
        <section>
          <Issues />
        </section>
      )}
    </div>
  );
}

export default App;
