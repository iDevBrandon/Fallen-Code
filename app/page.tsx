import React from "react";
import Header from "@/components/Header";
import Accordion from "@/components/Accordion";

const Algorithms = [
  {
    title: "Sorting Algorithms",
    content: "Different types of sorting algorithms",
    problems: [],
  },
  {
    title: "Searching Algorithms",
    content: "Different types of searching algorithms",
    problems: [],
  },
  // More topics...
];

const DataStructures = [
  { title: "Arrays", content: "Introduction to arrays", problems: [] },
  {
    title: "Linked Lists",
    content: "Introduction to linked lists",
    problems: [],
  },
  // More topics...
];

const WebDevelopment = [
  {
    title: "HTML & CSS",
    content: "Introduction to HTML and CSS",
    problems: [],
  },
  {
    title: "JavaScript Basics",
    content: "Understanding Data Types, Variables, and Operators",
    problems: [],
  },
];

const AdvancedJavaScript = [
  {
    title: "Single-threaded Nature",
    content: "How JavaScript executes code",
    problems: [],
  },
  {
    title: "Callbacks & Promises",
    content: "Asynchronous JavaScript explained",
    problems: [],
  },
  // More topics...
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Top Left: Random Problems */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-blue-500">{`Today's Random Problems`}</h2>
            <div className="space-y-3 text-lg">
              <p>Problem 1</p>
              <p>Problem 2</p>
              <p>Problem 3</p>
              <p>Problem 4</p>
            </div>
          </div>

          {/* Top Right: Study Posts */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-blue-500">
              Study Posts
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  #1 [idevbrandon] Daily Progress
                </h3>
                <p className="text-gray-800">
                  Main Points: 1. Baekjoon Golden Path - Brute Force, DP -
                  Decided not to use full search based on greedy approach -&gt;
                  Thought it would be feasible to calculate full search with
                  many edge cases -&gt; Solved using DP backtracking
                </p>
              </div>
            </div>
          </div>

          {/* Algorithms */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-blue-500">
              Algorithms
            </h2>
            <Accordion tabs={Algorithms} />
          </div>

          {/* Data Structures */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-blue-500">
              Data Structures
            </h2>
            <Accordion tabs={DataStructures} />
          </div>

          {/* Computer Science */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-blue-500">
              Computer Science
            </h2>
            <Accordion tabs={AdvancedJavaScript} />
          </div>

          {/* Web Development */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-blue-500">
              Web Development
            </h2>
            <Accordion tabs={WebDevelopment} />
          </div>

          {/* JavaScript */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-blue-500">
              JavaScript
            </h2>
            <Accordion tabs={AdvancedJavaScript} />
          </div>

          {/* Framework - React */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-blue-500">
              Framework - React
            </h2>
            <Accordion tabs={AdvancedJavaScript} />
          </div>

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default App;
