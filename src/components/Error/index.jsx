import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledBlock = styled.section`
    @media screen and (max-width: 480px) {
        width: 88%;
        margin: 10vw 0%;
        height: 90vh;
    }
`

const StyledTitle = styled.h1`
    font-size: 20vw;
    margin: 2.5vw auto;
    @media screen and (max-width: 480px) {
        font-size: 30vw;
    }
`

const StyledText = styled.span`
    @media screen and (max-width: 480px) {
        font-size: 5vw;
    }
`

const StyledLink = styled(Link)`
    text-decoration: underline;
    margin: 7vw 0%;
    @media screen and (max-width: 480px) {
        font-size: 4vw;
        margin: 15vw 0%;
    }
`
function Error() {
    return (
        <main>
            <StyledBlock>
                <StyledTitle>404</StyledTitle>
                <StyledText>Oups! La page que vous demandez n'existe pas.</StyledText>
                <StyledLink to='/'>Retourner sur la page d’accueil</StyledLink>
            </StyledBlock>
        </main>
    )
}
 
export default Error