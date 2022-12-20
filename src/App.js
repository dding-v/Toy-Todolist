import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./global-style.css";
import Todo from "./Pages/Todo";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <section>
            <Routes>
              <Route path="/" element={<Todo />} />
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
