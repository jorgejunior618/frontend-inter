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

  const completeSignUp =  (event: React.FormEvent) => {
    event.preventDefault();
    navigate('/dashboard');
  }

  return (
    <Wrapper>
      <Background image={backgroundImage}/>

      <Card width="403px" hasShadow>
        <form action="submit" onSubmit={completeSignUp}>
          <img
            src={logoInter}
            width={172}
            alt="Logotipo Banco Inter"
          />

          <InputGroup>
            <Input
              required
              placeholder="NOME *"
              type="text"
            />
            <Input
              required
              placeholder="SOBRENOME *"
              type="text"
            />
            <Input
              required
              placeholder="EMAIL *"
              type="email"
            />
            <Input
              required
              placeholder="SENHA *"
              type="password"
            />
            <Input
              required
              placeholder="CONFIRMAR SENHA *"
              type="password"
            />
            <p style={{ fontSize: 12 }}>
              <span className="primary-color">*</span>&nbsp;
              Campos obrigatórios
            </p>
          </ InputGroup>

          <ButtonGroup>
            <Button type="submit" >
              Cadastrar
            </Button>
            <p>
              Já tem uma conta? <Link to="/signin">Entre já</Link>
            </p>
          </ ButtonGroup>
        </form>
      </ Card>
    </ Wrapper>
  );
}

export default SignUp;
