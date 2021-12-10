import Button from "../../components/Button";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Statement from "./Statement/indext";
import {
  DashboardBackgrund,
  BodyContainer,
  InlineContainer,
  InlineTitle,
} from "./styles";

const Dashboard = () => {

  const wallet = 0.0;
  return (
    <DashboardBackgrund>
      <Header />

      <BodyContainer>
        <div>
          <Card width="90%">
            <InlineTitle>
              <h2 className="h2">
                Saldo Atual
              </h2>

            </InlineTitle>
            
            <InlineContainer>
              <h3 className="wallet">
                {wallet.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
              </h3>
            </InlineContainer>
          </Card>
          
          <Card width="90%">
            <InlineTitle>
              <h2 className="h2">
                Receber Pix
              </h2>
            </InlineTitle>

            <InlineContainer>
              <Input
                style={{ flex: 1 }}
                placeholder="VALOR"
                type="number"
              />
              <Button >Gerar Código</Button>
            </InlineContainer>

            <p className="primary-color">Pix copia e cola</p>
            <p className="primary-color">dgfkgasdfjgjkgeriogmldfbgklkldfhmh</p>
          </Card>
          
          <Card width="90%">
            <InlineTitle>
              <h2 className="h2">
                Pagar Pix
              </h2>
            </InlineTitle>

            <InlineContainer>
              <Input
                style={{ flex: 1 }}
                placeholder="Insira a chave"
                type="text"
              />
              <Button >Pagar Pix</Button>
            </InlineContainer>
          </Card>
        </div>
        
        <div>
          <Card width="90%">
            <InlineTitle>
              <h2 className="h2">
                Extrato da Conta
              </h2>
            </InlineTitle>
            <Statement />
          </Card>
        </div>
      </BodyContainer>
    </DashboardBackgrund>
  );
}

export default Dashboard;
