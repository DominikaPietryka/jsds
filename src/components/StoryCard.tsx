import React, { ReactNode } from 'react';
import Image from 'next/image';

interface StoryCardProps {
  imgLink: string;
  collapsed?: boolean;
  loading?: boolean;
  header: ReactNode;
  body?: ReactNode;
}

const StoryCard: React.FC<StoryCardProps> = ({ imgLink, collapsed, loading, header, body }) => {
  return (
    <article className="slds-card">
      <div className="slds-card__header slds-grid">
        <header className="slds-media slds-media_center slds-has-flexi-truncate">
          <div className="slds-media__figure">
            <span className="slds-icon_container slds-icon-standard-account" title="account">
              <Image className="slds-icon slds-icon_small" aria-hidden="true" width={15} height={15} src={imgLink} alt="accounting" />
              <span className="slds-assistive-text">account</span>
            </span>
          </div>
          <div className="slds-media__body">
            <h2 className="slds-card__header-title">
              <a href="#" className="slds-card__header-link slds-truncate" title="Accounts">
                <span>{header}</span>
              </a>
            </h2>
          </div>
          {!loading && (
            <div className="slds-no-flex">
              <button className="slds-button slds-button_neutral">New</button>
            </div>
          )}
        </header>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        {!collapsed && body}
        {loading && (
          <div role="status" className="slds-spinner slds-spinner_small">
            <span className="slds-assistive-text">Loading</span>
            <div className="slds-spinner__dot-a"></div>
            <div className="slds-spinner__dot-b"></div>
          </div>
        )}
      </div>
    </article>
  );
};

export default StoryCard;
