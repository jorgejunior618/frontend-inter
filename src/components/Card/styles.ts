import styled, { css } from "styled-components";

export const CardContainer = styled.div<{
  width: string;
  height: string;
  hasShadow: boolean;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  background-color: ${({ theme }) => theme.colors.background};

  ${({ hasShadow }) => hasShadow && css`
    box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.25);
  `}

  border-radius: 28px;

  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  z-index: 5000;
`;