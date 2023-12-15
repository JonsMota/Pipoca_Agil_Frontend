import styled from 'styled-components'

import Navbar from '@/components/layout/Navbar'
import SpaceContainer from '@/components/layout/SpaceContainer'

const FormContainerOut = styled.div`
  border: 1px solid ${(props) => props.theme.inputBorder};
  border-radius: 12px;
  background-color: white;
`

const FormContainer = styled.div`
  margin-top: 20px;
  padding-top: 10px;
  padding: 40px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  margin: 20px 0;
  gap: 20px;
`

const Text = styled.p`
  text-align: center;
`

const Title = styled.p`
  padding: 30px 0px 0px 0px;
`

function RegisterPage() {
  return (
    <>
      <Navbar />
      <SpaceContainer>
        <FormContainerOut>
          <Title>Cadastro</Title>
          <FormContainer>
            <Form>
              <input type="text" placeholder="Digite seu nome completo" required />
              <input type="email" placeholder="Digite seu e-mail" required />
              <input type="number" placeholder="(11) 12345-6789" required />
              <input type="date" placeholder="DD/MM/AAAA" required />
              <input type="password" placeholder="Digite sua senha" required />
              <input type="password" placeholder="A senha deve ser idêntica a anterior" required />
              <button>Cadastrar</button>
            </Form>
            <Text>
              Já possui uma conta? <a href="#">login</a>
            </Text>
          </FormContainer>
        </FormContainerOut>
      </SpaceContainer>
    </>
  )
}

export default RegisterPage
