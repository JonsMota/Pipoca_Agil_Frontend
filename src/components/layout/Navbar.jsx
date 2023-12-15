import styled from 'styled-components'

const StyledNavbar = styled.div`
  background-color: ${(props) => props.theme.white};
  height: 80px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colorText};
`

const StyledImage = styled.span`
  background-image: url('/microfone-pipoca.jpg');
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 30px;

  width: 4%;
  height: 6vh;
`

const StyledInicio = styled.span`
  padding: 0px 20px;
`
const StyledSobre = styled.span`
  padding: 0 20px;
`
const StyledEpisodios = styled.span`
  padding: 0 20px;
`
const StyledProjetos = styled.span`
  padding: 0 20px;
`
const StyledBlog = styled.span`
  padding: 0 20px;
`

const StyledLogin = styled.span`
  margin-left: 600px;
  margin-right: 50px;
  border-radius: 25px;

  font-size: 20px;
`

function Navbar() {
  return (
    <StyledNavbar>
      <StyledImage />
      <StyledInicio>Início</StyledInicio>
      <StyledSobre>Sobre</StyledSobre>
      <StyledEpisodios>Episódios</StyledEpisodios>
      <StyledProjetos>Projetos</StyledProjetos>
      <StyledBlog>Blog</StyledBlog>
      <StyledLogin>
        <button>Login</button>
      </StyledLogin>
    </StyledNavbar>
  )
}

export default Navbar
