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

  const completeSignIn = (event: React.FormEvent) => {
    event.preventDefault();
    navigate('/dashboard');
  }

  return (
    <Wrapper>
      <Background image={backgroundImage}/>

      <Card width="403px" hasShadow>
        <form action="submit" onSubmit={completeSignIn}>
          <img
            src={logoInter}
            width={172}
            alt="Logotipo Banco Inter"
          />

          <InputGroup>
            <Input
              required
              placeholder="EMAIL"
              type="email"
            />
            <Input
              required
              placeholder="SENHA"
              type="password"
            />
          </ InputGroup>

          <ButtonGroup>
            <Button type="submit">
              Entrar
            </Button>
            <p>
              Ainda não é cadastrado? <Link to="/signup">Cadastre-se já</Link>
            </p>
          </ ButtonGroup>
        </form>
      </ Card>
    </ Wrapper>
  );
}

export default SignIn;
