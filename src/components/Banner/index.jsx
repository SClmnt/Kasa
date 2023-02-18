import styled from "styled-components"

const StyledFigure = styled.figure`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5% 0;
    overflow: hidden;
    max-height: 20vw;
    border-radius: 25px;
`

function Banner({ children }) {
    return <StyledFigure>{children}</StyledFigure>
}

export default Banner