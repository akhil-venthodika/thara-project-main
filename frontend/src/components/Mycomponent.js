import styled from 'styled-components';

const HoverablePath = styled.path`
  &.default {
    fill: #00f; /* default fill color */
    transition: fill 0.3s; /* optional: add a smooth transition effect */
  }

  &.hovered {
    fill: #f00; /* fill color on hover */
  }

  &:hover {
    &.hovered {
      fill: #ff0; /* fill color during hover, you can change this to the desired color */
    }
  }
`;

const MyComponent = () => {
  return (
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <HoverablePath className="default" d="M10 10 L90 10 L50 90 Z" />
    </svg>
  );
};

export default MyComponent;
