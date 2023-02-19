import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'


const StyledHeader = styled.header`
    color: ${colors.primary};
    font-size: 1.5vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 8vw;
    @media screen and (max-width: 480px) {
        font-size: 5vw;
        margin: 3% 0%;
    }
`
const StyledLogo = styled.img`
    height: 70%;
    @media screen and (max-width: 480px) {
        height: 100%;
    }
`
const StyledLink = styled(Link)`
    padding: 0% 0% 0% 3vw;
    color: ${colors.primary};
    @media screen and (max-width: 480px) {
        font-size: 3.5vw;
        /*padding: 0%*/
    }
`

function Header() {
    
    return (
        <StyledHeader>
            <StyledLogo src={logo} alt="Logo Kasa"/>
            <nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/about-us">A Propos</StyledLink>
            </nav>
        </StyledHeader>
    )
}

export default Header