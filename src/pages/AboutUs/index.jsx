import styled from 'styled-components';
import Banner from '../../components/Banner';
import background from "../../assets/banner_aboutUs.jpg";
import Dropdown from '../../components/Dropdown';
import listeEngagement from '../../data/listeEngagement.json';

const StyledImg = styled.img`
    width: 100%;
    filter: brightness(70%);
    @media screen and (max-width: 480px) {
        max-height: 50vw;
    }
`
const StyledBlock = styled.section`
    width: 90%;
    text-align: center;
    @media screen and (max-width: 480px) {
        height: 100%;
        justify-content: flex-start;
    }
`

const StyledTab = styled.section`
    margin: 1% 0%;
`
function AboutUs() {
    return (
        <main>
            <StyledBlock>
                <Banner>
                <StyledImg src={background} alt="photo de paysage"/>
                </Banner>
                <StyledTab>
                    {listeEngagement.map((bloc, index) => (
                        <Dropdown
                            key={`${bloc.engagement}-${index}`}
                            title={bloc.engagement}
                            content={bloc.content}
                        />
                    ))}
                </StyledTab>
            </StyledBlock>
        </main>
    )
}

export default AboutUs;