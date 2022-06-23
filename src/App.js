/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import "./App.css";
import "./appa.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

let WebTitle = "TextUtils";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const ShowAlertFunction = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleFunction = () => {
    if (mode === "light") {
      setMode("dark");

      ShowAlertFunction("Dark Mode has been enabled", "success");
    } else {
      setMode("light");

      ShowAlertFunction("Light Mode has been enabled", "info");
    }
  };

  return (
    <>
      <Router>
        <div>
          <Navbar
            title={WebTitle}
            about="About Me"
            toggle={toggleFunction}
            mode={mode}
          />

          <Alert alert={alert} />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <div className="container my-3"></div>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={ShowAlertFunction}
                  heading="Enter the Text to analyse"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
