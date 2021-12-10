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

const SignUp = () => {
  const navigate = useNavigate();

  const completeSignUp = () => {
    navigate('/dashboard');
  }
  return (
    <Wrapper>
      <Background image={backgroundImage}/>

      <Card width="403px" hasShadow>
        <img
          src={logoInter}
          width={172}
          alt="Logotipo Banco Inter"
        />

        <InputGroup>
          <Input placeholder="NOME" type="text" />
          <Input placeholder="SOBRENOME" type="text" />
          <Input placeholder="EMAIL" type="email" />
          <Input placeholder="SENHA" type="password" />
          <Input placeholder="CONFIRMAR SENHA" type="password" />
        </ InputGroup>

        <ButtonGroup>
          <Button type="button" onClick={completeSignUp}>
            Cadastrar
          </Button>
          <p>
            Já tem uma conta? <Link to="/signin">Entre já</Link>
          </p>
        </ ButtonGroup>
      </ Card>
    </ Wrapper>
  );
}

export default SignUp;
