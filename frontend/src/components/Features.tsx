import React from "react";
import { Feature } from "./Feature";
import TakeSnapshotIcon from '../assets/take-snapshot-icon.svg';
import RequestFeedbackIcon from '../assets/request-feedback-icon.svg';
import GiveFeedbackIcon from '../assets/give-feedback-icon.svg';
import ViewReportIcon from '../assets/view-report-icon.svg';

export const Features: React.FC = () => {
  const featuresList = [
    {
      title: "Take your Snapshot",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      resourceUrl: "https://auth0.com/docs/connections",
      icon: TakeSnapshotIcon,
    },
    {
      title: "Request Feedback",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      resourceUrl: "https://auth0.com/docs/multifactor-authentication",
      icon: RequestFeedbackIcon,
    },
    {
      title: "Give Feedback",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      resourceUrl: "https://auth0.com/docs/attack-protection",
      icon: GiveFeedbackIcon,
    },
    {
      title: "View Reports",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      resourceUrl: "https://auth0.com/docs/actions",
      icon: ViewReportIcon,
    },
  ];

  return (
    <div className="auth0-features">
      <h2 className="auth0-features__title">Explore Snapshot Features</h2>
      <div className="auth0-features__grid">
        {featuresList.map((feature) => (
          <Feature
            key={feature.resourceUrl}
            title={feature.title}
            description={feature.description}
            resourceUrl={feature.resourceUrl}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};
