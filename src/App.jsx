import React from "react";
import "./App.css";
import LoadMore from "./components/LoadMore";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
const App = () => {
  return (
    <main>
      <HeroSection />
      <Card />
      <LoadMore />
    </main>
  );
};

export default App;
