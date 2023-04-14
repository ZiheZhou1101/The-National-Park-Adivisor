import React from 'react';
import styled, { keyframes } from 'styled-components';

// constant sizes
const SMALL = {
    width: '40px',
    height: '40px',
    border: '10px',
};
const MEDIUM = {
    width: '80px',
    height: '80px',
    border: '15px',
};
const LARGE = {
    width: '120px',
    height: '120px',
    border: '20px',
};

const sizeMap = { small: SMALL, medium: MEDIUM, large: LARGE };

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const StyledSpinner = styled.div`
  animation: 2s linear infinite ${rotate};
  animation-play-state: inherit;
  border: solid ${(props) => props.size.border} #8fbc8f;
  border-top: ${(props) => props.size.border} solid seagreen;
  border-radius: 50%;
  width: ${(props) => props.size.width};
  height: ${(props) => props.size.height};
  will-change: transform;
`;

const Spinner = ({ size }) => {
    const sizeObj = sizeMap[size];
    return <StyledSpinner size={sizeObj} />;
};

Spinner.defaultProps = {
    size: 'medium',
};

export default Spinner;