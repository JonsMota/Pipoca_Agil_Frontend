import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${(props) => props.theme.white};
  width: 120px;
  height: 60px;
  border-radius: 70px;
  border: 1px solid ${(props) => props.theme.colorText};
  color: ${(props) => props.theme.colorText};
  font-weight: bold;
`