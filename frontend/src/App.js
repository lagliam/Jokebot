import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Home, About, Navigation, AddJoke } from "./components";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

  // get data from backend
  useEffect(() => {
    const getJoke = async () => {
      const jokeFromServer = await fetchJoke();
      setJoke(jokeFromServer);
    };
    getJoke();
  }, []);

  const fetchJoke = async () => {
    const res = await fetch("/api/jokes/random");
    let data = {};
    if (res !== ''){
       data = await res.json();
    }
    return data;
  };

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home joke={joke} />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/addJoke" exact component={() => <AddJoke />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
