import {
  Background,
  ButtonGroup,
  InputGroup,
  Wrapper,
} from './styles'
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import backgroundImage from '../../assets/images/background-login.jpg'
import logoInter from '../../assets/images/Inter-orange.png'
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const completeSignIn = () => {
    navigate('/dashboard');
  }
  return (
    <Wrapper>
      <Background image={backgroundImage}/>

      <Card width="403px">
        <img
          src={logoInter}
          width={172}
          alt="Logotipo Banco Inter"
        />

        <InputGroup>
          <Input placeholder="EMAIL" type="email" />
          <Input placeholder="SENHA" type="password" />
        </ InputGroup>

        <ButtonGroup>
          <Button type="button" onClick={completeSignIn}>
            Entrar
          </Button>
          <p>
            Ainda não é cadastrado? <Link to="/signup">Cadastre-se já</Link>
          </p>
        </ ButtonGroup>
      </ Card>
    </ Wrapper>
  );
}

export default SignIn;
