import styled from "styled-components";
import { FaSearch } from 'react-icons/fa'


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  margin: 10px 0; 
  position: relative;
`

export const Input = styled.input`
  background-color:${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  border: 0;
  font-size: 18px;
  padding: 15px 45px 15px 15px;
  height: 40px;
  width: 80%;
  border-radius: 30px;
  &:focus{
    outline: none;
  }
`

export const Button = styled(FaSearch)`
  color: ${props => props.theme.colors.text};
  border: 0;
  cursor: pointer;
  font-size: 20px;
  margin-left: -40px;
  height: 20px;
  width: 30px;
  border-radius: 50%;
`

