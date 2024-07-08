import React from 'react';

interface StoryButtonProps {
  base?: boolean;
  neutral?: boolean;
  brand?: boolean;
  className?: string;
}

const StoryButton: React.FC<StoryButtonProps> = ({ base, neutral, brand, className }) => {
  const buttonClass = `slds-button ${neutral ? 'slds-button_neutral' : ''} ${brand ? 'slds-button_brand' : ''} ${className || ''}`;

  return <button className={buttonClass}>Button</button>;
};

export default StoryButton;
