import React from "react";
import PropTypes from "prop-types";

import LinkTo from "../../atoms/Link/LinkTo";
import "./HeroHeader.scss";

export default function HeroHeader({
  title,
  subtitleL1,
  subtitleL2,
  link,
  linkText,
}) {
  return (
    <div className="hero-container">
      <div className="hero-header-img" data-testid="background">
        <div className="hero-header-content">
          <p className="hero-header-content-title">{title}</p>
          <p className="hero-header-content-subtitle">
            <span>{subtitleL1}</span>
            <span> {subtitleL2}</span>
          </p>
          <LinkTo
            to={link}
            className="hero-header-button hero-header-div-button"
          >
            {linkText}
          </LinkTo>
        </div>
      </div>
    </div>
  );
}

HeroHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitleL1: PropTypes.string.isRequired,
  subtitleL2: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
HeroHeader.defaultProps = {
  title: "Your Title",
  subtitleL1: "Your Subtitle 1",
  subtitleL2: "Your Subtitle 2",
  linkText: "Your Link text",
  link: "#",
};
