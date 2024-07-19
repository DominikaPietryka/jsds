import React, { useState } from 'react';

interface AccordionItem {
  label: string;
  content: string;
}

interface StoryAccordionProps {
  items: AccordionItem[];
}

const StoryAccordion: React.FC<StoryAccordionProps> = ({ items }) => {
  const [isOpens, setIsOpens] = useState(items.map(() => false));

  const toggleAccordion = (index: number) => {
    setIsOpens((arr) => arr.map((item, idx) => (idx === index ? !item : item)));
  };

  return (
    <div className="slds-card">
      <ul className="slds-accordion">
        {items.map((item, index) => (
          <li key={item.label} className="slds-accordion__list-item">
            <section
              className={`slds-accordion__section ${
                isOpens[index] ? 'slds-is-open' : ''
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="slds-accordion__summary">
                <h2 className="slds-accordion__summary-heading">
                  <button
                    className="slds-button slds-button_reset slds-accordion__summary-action"
                    aria-controls={`accordion-content-${index}`}
                    aria-expanded={isOpens[index]}
                    title="Accordion summary"
                  >
                    <div className="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left">
                      ▼
                    </div>
                    <span className="slds-accordion__summary-content">
                      {item.label}
                    </span>
                  </button>
                </h2>
              </div>
              {isOpens[index] && (
                <div
                  className="slds-accordion__content"
                  id={`accordion-content-${index}`}
                >
                  {item.content}
                </div>
              )}
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoryAccordion;
