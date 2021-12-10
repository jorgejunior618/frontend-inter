import { Link, useNavigate } from "react-router-dom";

import {
  HeaderContainer,
  HeaderWrapper,
  UserInfo,
} from "./styles";

import logoInter from '../../assets/images/Inter-orange.png'
import UserIndicator from "../UserIndicator";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/signin');
  }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img
          src={logoInter}
          width={172}
          alt="Logotipo Banco Inter"
        />
        <UserInfo>
          <UserIndicator initials="JJ" />
          <div>
            <p>Olá, <span className="primary-color font-bold">Jorge</span></p>
            <strong>00000000-0</strong><br />
            <a href="#" onClick={handleLogout}>Sair</a>
          </div>
        </UserInfo>
      </HeaderWrapper>

    </HeaderContainer>
  );
}

export default Header;