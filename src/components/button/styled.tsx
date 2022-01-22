import styled from "styled-components/macro";
import { ButtonType, ComponentSize } from "./index";

export const sidePaddings: { [key in ComponentSize]: number } = {
  large: 30,
  default: 25,
  small: 20,
};

export const heights: { [key in ComponentSize]: number } = {
  large: 55,
  default: 45,
  small: 35,
};

type StateColors = {
  regular: string;
  hover: string;
};

export const typeColors: { [key in ButtonType]: StateColors } = {
  default: {
    regular: "#0018cf",
    hover: "#2e27cc",
  },
  danger: {
    regular: "#d93848",
    hover: "#eb4d5d",
  },
  ghost: {
    regular: "transparent",
    hover: "#dbdbdb",
  },
  secondary: {
    regular: "#000",
    hover: "#3d3d3d",
  },
};

interface StyledButtonProps {
  innerType: ButtonType;
  size: ComponentSize;
  withText: boolean;
}

/* Real tag is assigned dynamically based on `as` prop */
export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* Add margin in case of loading or icon */
  & > *:nth-child(1) {
    margin-left: ${(props) => (props.withText ? 7 : 0)}px;
  }
  font-size: 15px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => typeColors[props.innerType].regular};
  padding: 0 ${(props) => sidePaddings[props.size]}px;
  height: ${(props) => heights[props.size]}px;
  color: ${(props) =>
    props.innerType === "ghost" ? typeColors["default"].regular : "#fff"};
  ${(props) =>
    props.disabled
      ? `
        background-color: #a6a6a6;
        color: #5e5e5e;
        cursor: not-allowed;
        &:hover {
            background-color: #a6a6a6 !important;
            color: #5e5e5e !important;
        }
    `
      : ""}
  border-radius: 0;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 1px #fff,
      0 0 0 2px ${(props) => typeColors[props.innerType].regular};
  }
  &:hover {
    background-color: ${(props) => typeColors[props.innerType].hover};
  }
`;

export const StyledIcon = styled.div`
  height: 20px;
`;
