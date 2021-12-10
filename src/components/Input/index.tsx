import { InputHTMLAttributes } from "react";
import CurrencyInput, { CurrencyInputProps } from "react-currency-input-field";
import { InputContainer } from "./styles";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <InputContainer>
      <input {...props}/>
    </InputContainer>
  );
}

export const InputCurrency = (props: CurrencyInputProps) => {
  return (
    <InputContainer>
      <CurrencyInput
        style={{ flex: 1 }}
        placeholder="VALOR"
        intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
        {...props}
      /> 
    </InputContainer>
  );
}

export default  Input;
