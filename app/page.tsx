import React from "react";
import Header from "@/components/Header";
import { Algorithms, DataStructures, Implementation } from "../lib/Data";
import Accordion from "@/components/Accordion";

const App = () => {
  return (
    <div>
      <Header />
      <div className="grid md:grid-cols-2 justify-center">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">{`Today's random problems`}</h2>
          <div>
            <p>Problem 1</p>
            <p>Problem 2</p>
            <p>Problem 3</p>
            <p>Problem 4</p>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Data Structures</h2>
          <Accordion tabs={DataStructures} />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Algorithms</h2>
          <Accordion tabs={Algorithms} />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Implementation</h2>
          <Accordion tabs={Implementation} />
        </div>
      </div>
    </div>
  );
};

export default App;
