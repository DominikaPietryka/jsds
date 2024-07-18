import React, { useState } from 'react';

interface AccordionItem {
  label: string;
  content: string;
}

interface StoryAccordionProps {
  items: AccordionItem[];
}

const StoryAccordion: React.FC<StoryAccordionProps> = ({ items }) => {
  const [accordionItems, setAccordionItems] = useState(
    items.map((item) => ({ ...item, isOpen: false }))
  );

  const toggleAccordion = (index: number) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item, idx) =>
        idx === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div className="slds-card">
      <ul className="slds-accordion">
        {accordionItems.map((item, index) => (
          <li key={item.label} className="slds-accordion__list-item">
            <section
              className={`slds-accordion__section ${
                item.isOpen ? 'slds-is-open' : ''
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="slds-accordion__summary">
                <h2 className="slds-accordion__summary-heading">
                  <button
                    className="slds-button slds-button_reset slds-accordion__summary-action"
                    aria-controls={`accordion-content-${index}`}
                    aria-expanded={item.isOpen}
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
              {item.isOpen && (
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
