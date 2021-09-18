import { useState } from "react";
import styled, { keyframes } from "styled-components";

const media = {
  mobile: "@media (max-width: 500px)",
};

const rotate = keyframes`
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading = styled.div.attrs((props) => ({
  size: props.size || 50,
  color: props.color || "#333",
}))`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: ${({ size }) => (size * 8) / 100}px solid #9991;
  border-top-color: ${({ color }) => color};
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;
  animation-play-state: ${({ isLoading }) =>
    isLoading ? "running" : "paused"};

  &:hover {
    cursor: pointer;

    ${media.mobile} {
      cursor: none;
    }
  }
`;

export default function Loader({ size, color }) {
  const [isLoading, setIsLoading] = useState(true);

  const toggle = () => setIsLoading((prevState) => !prevState);

  return (
    <>
      <Loading
        size={size}
        color={color}
        isLoading={isLoading}
        onClick={toggle}
      />
    </>
  );
}

// Loader.defaultProps = {
//   size: 50,
//   color: "silver",
// };
