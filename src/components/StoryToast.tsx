import React from 'react';
import clsx from 'clsx';

interface StoryToastProps {
  type?: 'success' | 'warning' | 'error' | 'info';
  children: React.ReactNode;
}

const ICONS = {
  success: '✅',
  warning: '❗',
  error: '⛔',
  info: '🛈',
};

const ICON_CLASSES = {
  success: 'slds-icon-utility-success',
  warning: 'slds-icon-utility-warning',
  error: 'slds-icon-utility-error',
  info: 'slds-icon-utility-info',
};

const StoryToast: React.FC<StoryToastProps> = ({ type = 'info', children }) => {
  const toastClass = clsx('slds-notify', 'slds-notify_toast', {
    [`slds-theme_${type}`]: type,
  });

  return (
    <div className="slds-notify_container slds-is-relative" style={{ width: '100%' }}>
      <div className={toastClass} role="status">
        <span className="slds-assistive-text">{type}</span>
        <span
          className="slds-icon_container slds-icon-utility-info slds-m-right_small slds-no-flex slds-align-top"
          title={type}
        >
          <span className={`slds-icon slds-icon_small ${ICON_CLASSES[type]}`} aria-hidden="true" style={{ fontSize: '25px' }}>
            {ICONS[type]}
          </span>
        </span>
        <div className="slds-notify__content">
          <h2 className="slds-text-heading_small">{children}</h2>
        </div>
        <div className="slds-notify__close">
          <button className="slds-button slds-button_icon slds-button_icon-inverse" title="Close">
            <span className="slds-button__icon slds-button__icon_large" aria-hidden="true" style={{ fontSize: '25px' }}>
              ⨯
            </span>
            <span className="slds-assistive-text">Close</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryToast;
