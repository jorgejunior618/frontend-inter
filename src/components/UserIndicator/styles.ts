import styled from "styled-components";

export const CircleContainer = styled.div`
  width: 74px;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  font-weight: 300;
  font-size: 2rem;

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  color: ${({ theme }) => theme.colors.primary};
`;