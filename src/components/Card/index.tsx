import { CardContainer } from "./styles";

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  hasShadow?: boolean;

}

const Card = ({
  children,
  width='100%',
  height='auto',
  hasShadow=false,
} : CardProps) => {
  return (
    <CardContainer
      width={width}
      height={height}
      hasShadow={hasShadow}
    >
      {children}
    </CardContainer>
  );
}

export default Card;