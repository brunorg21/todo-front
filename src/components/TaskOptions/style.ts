import { Button } from "@radix-ui/themes";
import { styled } from "styled-components";

export const OptionsButton = styled(Button)`
  color: ${(props) => props.theme["green-300"]};
  background-color: ${(props) => props.theme["gray-900"]};

  svg {
    &:hover {
      opacity: 0.4s;
      color: ${(props) => props.theme["gray-500"]};
      transition: color 0.2s, border-color 0.2s;
      cursor: pointer;
    }
  }
`;
