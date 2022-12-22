import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LensIcon from '../assets/lens-icon.svg';

export const HeroBanner: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="hero-banner">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={LensIcon} alt="snapshot logo" />
      </div>
      <h1 className="hero-banner__headline">Welcome to Snapshots</h1>
      {/* Description should be different for these 3 usecases: public, signed in, admin */}
      {isAuthenticated ?
        <p className="hero-banner__description">
          Take your <strong>Snapshot</strong> or respond to your peers <strong>Feedback Requests</strong> to help them acheive their goals.
        </p>
      :
        <p className="hero-banner__description">
          Help your peers acheive their goals by filling out the <strong>Feedback Form</strong>.
        </p>
      }
      {/* <p className="hero-banner__description">
        Create new <strong>Snapshots</strong>, take a <strong>Snapshot</strong>, or respond to your peers <strong>Feedback Requests</strong> to help them acheive their goals.
      </p> */}
      <a
        id="cta-link"
        target="_blank"
        rel="noopener noreferrer"
        href="/"
        className="button button--secondary"
      >
        CTA BUTTON
      </a>
    </div>
  );
};
