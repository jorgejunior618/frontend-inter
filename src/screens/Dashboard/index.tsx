import { useState } from "react";

import Button from "../../components/Button";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Input, { InputCurrency } from "../../components/Input";
import Statement from "./Statement/indext";
import {
  DashboardBackgrund,
  BodyContainer,
  InlineContainer,
  InlineTitle,
  CircledButton,
  InlineContainerPix,
} from "./styles";
import { MdContentCopy } from 'react-icons/md';

const Dashboard = () => {
  const [copiado, setcopiado] = useState(false);

  function copiarChavePix() {
    var chavePixElement = document.querySelector('p#pixCopiaCola');

    var chavePix = chavePixElement?.textContent || "";

    navigator.clipboard.writeText(chavePix);
    
    setcopiado(true);
    setTimeout(
      () =>{
        setcopiado(false);
      },
      5000,
    );
  }

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
              <InputCurrency
                name="Valor a receber"
                onValueChange={(value, name) => {
                  console.log(value, name);
                }}
              />
              <Button >Gerar Código</Button>
            </InlineContainer>

            <p className="primary-color">Pix copia e cola</p>
            
            <InlineContainerPix >
              <p className="primary-color" id="pixCopiaCola">
                dgfkgasdfjgjkgeriogmldfbgklkldfhmh
              </p>

              <CircledButton onClick={copiarChavePix}>
                <MdContentCopy size={16} />
              </CircledButton>

              {copiado ? (
                <p className="ok-text">
                  ✓ Copiado
                </p>
              )
              : (<></>)}
            </InlineContainerPix>
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
