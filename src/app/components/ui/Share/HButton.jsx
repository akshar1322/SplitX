import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HButton = ({ text, link, newTab }) => {
  return (
    <StyledWrapper>
      <a
        href={link}
        target={newTab ? '_blank' : '_self'}
        rel={newTab ? 'noopener noreferrer' : ''}
        className="Btn-Container"
      >
        <span className="text">{text}</span>
        <span className="icon-Container">
          <svg
            width={16}
            height={19}
            viewBox="0 0 16 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.61321" cy="1.61321" r="1.5" fill="black" />
            <circle cx="5.73583" cy="1.61321" r="1.5" fill="black" />
            <circle cx="5.73583" cy="5.5566" r="1.5" fill="black" />
            <circle cx="9.85851" cy="5.5566" r="1.5" fill="black" />
            <circle cx="9.85851" cy="9.5" r="1.5" fill="black" />
            <circle cx="13.9811" cy="9.5" r="1.5" fill="black" />
            <circle cx="5.73583" cy="13.4434" r="1.5" fill="black" />
            <circle cx="9.85851" cy="13.4434" r="1.5" fill="black" />
            <circle cx="1.61321" cy="17.3868" r="1.5" fill="black" />
            <circle cx="5.73583" cy="17.3868" r="1.5" fill="black" />
          </svg>
        </span>
      </a>
    </StyledWrapper>
  );
};

HButton.propTypes = {
  text: PropTypes.string.isRequired, // Button text
  link: PropTypes.string.isRequired, // Navigation link
  newTab: PropTypes.bool,            // Open in new tab or same page
};

HButton.defaultProps = {
  newTab: false,
};

const StyledWrapper = styled.div`
  .Btn-Container {
    display: flex;
    width: 170px;
    height: fit-content;
    background-color: #1d2129;
    border-radius: 40px;
    box-shadow: 0px 0px 0px #bebebe;
    justify-content: space-between;
    align-items: center;
    border: none;
    cursor: pointer;
    text-decoration: none;
  }
  .icon-Container {
    width: 45px;
    height: 45px;
    background-color: #84cc16;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 3px solid #1d2129;
  }
  .text {
    width: calc(170px - 45px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.1em;
    letter-spacing: 1.2px;
  }
  .icon-Container svg {
    transition-duration: 1.5s;
  }
  .Btn-Container:hover .icon-Container svg {
    transition-duration: 1.5s;
    animation: arrow 1s linear infinite;
  }
  @keyframes arrow {
    0% {
      opacity: 0;
      margin-left: 0px;
    }
    100% {
      opacity: 1;
      margin-left: 10px;
    }
  }
`;

export default HButton;
