import React, { useState } from "react";

type PropsType = {
  items: Array<{ title: string; url: string }>;
};

function Accordion({ items }: PropsType) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        {isOpen ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </div>
      {isOpen && (
        <div className="accordion-content">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Accordion;
