import styled from "styled-components/native";

const Base = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const Body = styled(Base)`
  font-size: 14px;
`;
