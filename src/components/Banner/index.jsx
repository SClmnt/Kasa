import styled from "styled-components"
import radius from "../../utils/style/radius"

const StyledFigure = styled.figure`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5% 0;
    overflow: hidden;
    max-height: 20vw;
    border-radius: ${radius.big};
    @media screen and (max-width: 480px) {
        border-radius: ${radius.medium};
        max-height: 50vw;
        justify-content: flex-start;
        padding: 0%;
    }
    &>figcaption {
        @media screen and (max-width: 480px) {
            padding: 5%;
            font-size: 5vw;
            width: 60%;
            text-align: left;
        }
        
        
    }
`

function Banner({ children }) {
    return <StyledFigure>{children}</StyledFigure>
}

export default Banner