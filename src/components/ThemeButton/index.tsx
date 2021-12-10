import { ButtonHTMLAttributes } from "react";
import { ThemeButtonContainer } from "./styles";
import { CgDarkMode } from 'react-icons/cg'

const ThemeButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ThemeButtonContainer {...props}>
      <CgDarkMode size={20}/>
    </ThemeButtonContainer>
  );
}

export default ThemeButton;
