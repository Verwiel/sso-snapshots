import { Resource } from "../models/resource";
import { PageFooterHyperlink } from "./PageFooterHyperlink";
import LensIconWhite from '../assets/lens-icon-white.svg';

export const PageFooter = () => {
  const resourceList: Resource[] = [
    {
      path: "https://insideoutdev.com/about-us",
      label: "Who is InsideOut",
    },
    {
      path: "https://insideoutdev.com/contact",
      label: "Contact InsideOut",
    },
    {
      path: "/",
      label: "Placeholder",
    },
    {
      path: "https://drew-verwiel.vercel.app/#contact",
      label: "Contact Me",
    },
  ];

  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <span>Built by </span>
              <PageFooterHyperlink path="https://drew-verwiel.vercel.app/#hero">
                Drew Verwiel
              </PageFooterHyperlink>
            </p>
            <p className="page-footer-message__description">
              <span>
                Created on behalf of {' '}
                <PageFooterHyperlink path="https://insideoutdev.com/">
                  InsideOut Development.
                </PageFooterHyperlink>
                Turning their community Snapshots into an Application.
              </span>
            </p>
          </div>
          <div className="page-footer-info__resource-list">
            {resourceList.map((resource) => (
              <div
                key={resource.path}
                className="page-footer-info__resource-list-item"
              >
                <PageFooterHyperlink path={resource.path}>
                  {resource.label}
                </PageFooterHyperlink>
              </div>
            ))}
          </div>
        </div>
        <div className="page-footer-grid__brand">
          <div className="page-footer-brand">
            <img
              className="page-footer-brand__logo"
              src={LensIconWhite}
              alt="InsideOut Development"
              width="20"
              height="22.22"
            />
            <PageFooterHyperlink path="/">
              InsideOut Development
            </PageFooterHyperlink>
          </div>
        </div>
      </div>
    </footer>
  );
};
