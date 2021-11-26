import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.repositories};
  padding: 12px;
  border-radius: 8px;
  
  margin: 16px 16px;
  width: 350px;
  height: 150px;
  align-content: center;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  word-break: break-all;
`;

export const WrapperTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`;

export const WrapperFullName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: ${props => props.theme.colors.text};
`;

export const WrapperLink = styled.a`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #3182ce;
`;
