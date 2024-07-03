import React from 'react';

interface StoryButtonProps {
  base?: boolean;
  neutral?: boolean;
  brand?: boolean;
}

const StoryButton: React.FC<StoryButtonProps> = ({ base, neutral, brand }) => {
  const buttonClass = `slds-button ${neutral ? 'slds-button_neutral' : ''} ${brand ? 'slds-button_brand' : ''}`;

  return <button className={buttonClass}>Button</button>;
};

export default StoryButton;
