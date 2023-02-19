import Logements from '../../components/Logements/index.jsx'
import styled from 'styled-components'
import Banner from '../../components/Banner'
import background from "../../assets/banner_home.jpg";

const StyledImg = styled.img`
    width: 100%;
    filter: brightness(70%)
`
const StyledCaption = styled.figcaption`
    position: absolute;
    font-size: 4vw;
`
const StyledBlock = styled.section`
    width: 90%;
    text-align: center;
    &>figure {
      @media screen and (max-width: 480px) {
        height: 30vw;
      }
    }
`

function Home() {
  return (
    <main>
      <StyledBlock>
          <Banner>
            <StyledImg src={background} alt="photo de paysage"/>
            <StyledCaption className='white_txt'>Chez vous, partout et ailleurs</StyledCaption>
          </Banner>
          <Logements/>
      </StyledBlock>
    </main>
  )
}

export default Home