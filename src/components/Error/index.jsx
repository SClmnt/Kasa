import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledTitle = styled.h1`
    font-size: 20vw;
    margin: 2.5vw auto;
`
const StyledLink = styled(Link)`
    text-decoration: underline;
    margin: 7vw 0%;
`
function Error() {
    return (
        <main>
            <section>
                <StyledTitle>404</StyledTitle>
                <span>Oups! La page que vous demandez n'existe pas.</span>
                <StyledLink to='/'>Retourner sur la page d’accueil</StyledLink>
            </section>
        </main>
    )
}
 
export default Error