"use client";

import React, { useState } from "react";

interface Problem {
  title: string;
  url?: string; // make url optional
}

interface Tab {
  title: string;
  content: string;
  problems: (
    | string
    | { title: string; url: string; video?: string; blog?: string }
  )[];
}

interface AccordionProps {
  tabs: Tab[];
}

const Accordion: React.FC<AccordionProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex flex-wrap justify-between">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex-basis-[calc(33.33%-8px)] border rounded mb-2 cursor-pointer transition-all ease-in-out ${
              activeIndex === index
                ? "border-blue-500 shadow-md"
                : "border-gray-300"
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="p-3 font-bold">{tab.title}</div>
          </div>
        ))}
      </div>
      {tabs.map(
        (tab, index) =>
          activeIndex === index && (
            <div key={index} className="p-3 border-t border-gray-300 bg-white">
              <p>{tab.content}</p>
              {tab.problems.map((problem, i) => (
                <div
                  key={i}
                  className="text-sm font-bold mb-2 flex justify-between"
                >
                  {typeof problem === "string" ? (
                    problem
                  ) : (
                    <>
                      <a
                        href={problem.url}
                        className="text-blue-500 hover:underline"
                      >
                        {problem.title}
                      </a>
                      {problem.video && (
                        <a
                          href={problem.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          <span> (video)</span>
                        </a>
                      )}
                      {problem.blog && (
                        <a
                          href={problem.blog}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          <span> (blog)</span>
                        </a>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          )
      )}
    </div>
  );
};

export default Accordion;
