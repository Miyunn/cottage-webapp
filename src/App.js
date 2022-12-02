import React from "react";

import { Header, Footer, Intro, Features, Contact } from "./containers";
import { Navbar } from "./components";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Intro />
      <Contact />

      {/* <Brand />

        <Features />
        <Possiblity />
        <CTA />
        <Blog />
         */}

      <Footer />
    </div>
  );
};

export default App;
