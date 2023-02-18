//import colors from '../../utils/style/colors'
import styled from 'styled-components'
import Banner from '../../components/Banner'
import background from "../../assets/banner_aboutUs.jpg";

const StyledImg = styled.img`
    width: 100%;
    filter: brightness(70%)
`
const StyledBlock = styled.section`
    width: 90%;
    text-align: center;
`

function AboutUs() {
    return (
        <main>
            <StyledBlock>
                <Banner>
                <StyledImg src={background} alt="photo de paysage"/>
                </Banner>
            </StyledBlock>
        </main>
    )
}

export default AboutUs;