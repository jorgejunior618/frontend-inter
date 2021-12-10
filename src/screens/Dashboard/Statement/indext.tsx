import {
  StatementContainer, StatementItemContainer, StatementItemImage, StatementItemInfo,
} from "./styles";
import { format } from 'date-fns';
import { FiDollarSign } from 'react-icons/fi';

interface IStatementItem {
  user: {
    firstName: string,
    lastName: string,
  },
  value: number,
  type: 'pay' | 'received',
  updatedAt: Date,
}

const StatementItem = ({
  user,
  value,
  type,
  updatedAt,
}: IStatementItem) => {
  return (
    <StatementItemContainer>
      <StatementItemImage type={type}>
        <FiDollarSign size={24}/>
      </StatementItemImage>
      <StatementItemInfo>
        <p className="primary-color">
          {value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
        </p>

        <p>
          {type === 'pay' ? 'Pago a ' : 'Recebido de '}
          <strong>{user.firstName} {user.lastName}</strong>
        </p>

        <p>{format(updatedAt, "dd/MM/yyyy 'às' HH:mm 'h'")}</p>
      </StatementItemInfo>
    </StatementItemContainer>
  );
}

const Statement = () => {
  const statements: IStatementItem[] = [
    {
      user: {
        firstName: 'User',
        lastName: 'One',
      },
      value: 50.0,
      type: 'pay',
      updatedAt: new Date(),
    },
    {
      user: {
        firstName: 'User',
        lastName: 'Two',
      },
      value: 70.0,
      type: 'received',
      updatedAt: new Date(),
    },
    {
      user: {
        firstName: 'User',
        lastName: 'Three',
      },
      value: 40.0,
      type: 'pay',
      updatedAt: new Date(),
    },
  ]
  return (
    <StatementContainer>
      {statements.map(statement => (
        <StatementItem {...statement} />
      ))}
    </StatementContainer>
  );
}

export default Statement;