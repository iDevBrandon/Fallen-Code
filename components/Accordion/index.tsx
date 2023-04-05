import React, { useState } from "react";
import styled from "styled-components";

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

const AccordionContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const AccordionTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const AccordionTab = styled.div<{ active: boolean }>`
  flex-basis: calc(33.33% - 8px);
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }

  ${({ active }) =>
    active &&
    `
    border-color: #0077cc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `}
`;

const AccordionTitle = styled.div`
  padding: 12px;
  font-weight: bold;
`;

const AccordionProblem = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  justify-content: space-between;
  display: flex;
`;

const AccordionContent = styled.div`
  padding: 12px;
  border-top: 1px solid #ccc;
`;

const Accordion: React.FC<AccordionProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AccordionContainer>
      <AccordionTabs>
        {tabs.map((tab, index) => (
          <AccordionTab
            key={index}
            active={activeIndex === index}
            onClick={() => toggleAccordion(index)}
          >
            <AccordionTitle>{tab.title}</AccordionTitle>
          </AccordionTab>
        ))}
      </AccordionTabs>
      {tabs.map(
        (tab, index) =>
          activeIndex === index && (
            <AccordionContent key={index}>
              <p>{tab.content}</p>
              {tab.problems.map((problem, i) => (
                <AccordionProblem key={i}>
                  {typeof problem === "string" ? (
                    problem
                  ) : (
                    <>
                      <a href={problem.url}>{problem.title}</a>
                      {problem.video && (
                        <a
                          href={problem.video}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span> (video)</span>
                        </a>
                      )}
                      {problem.blog && (
                        <a
                          href={problem.blog}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span> (blog)</span>
                        </a>
                      )}
                    </>
                  )}
                </AccordionProblem>
              ))}
            </AccordionContent>
          )
      )}
    </AccordionContainer>
  );
};

export default Accordion;
