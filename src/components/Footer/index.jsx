import logo from '../../assets/logo.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledLogo = styled.img`
    filter: brightness(0) invert(1);
    height: 2vw;
    width: auto;
    margin: 1vw;
    @media screen and (max-width: 480px) {
        height: 5vw;
        margin: 3% auto;
    }
`

const StyledFooter = styled.footer`
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: ${colors.backgroundDark};
    color: white;
    align-items: center;
    padding: 2vw;
    @media screen and (max-width: 480px) {
        padding: 4% 0%;
    }
    &>span{
        @media screen and (max-width: 480px) {
            font-size: 2vw;
        }
    }
`

function Footer() {
    return (
        <StyledFooter>
            <StyledLogo src={logo} alt="Logo Kasa"/>
            <span className='white_txt'>© 2020 Kasa. All rights reserved</span>
        </StyledFooter>
    )
}

export default Footer