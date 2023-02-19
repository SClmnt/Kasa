import styled from 'styled-components';
import star from '../../assets/star.svg'

const StyledStarLine = styled.span`
    display: flex;
    align-items: center;
`

const StyledStar = styled.img`
    height: 2.5vw;
    padding: 0% 1%;
    ${(props) =>
    props.$isGray &&
      `filter: grayscale(100%) brightness(160%);`}
`

function RateScale(props){
    const scaleValue = props.scaleValue;
    const range = [1,2,3,4,5]
    return(
        <StyledStarLine>
            {range.map((rangeElem, index) =>
                scaleValue >= rangeElem ? <StyledStar key={index} src={star} alt="Une étoile"/> : <StyledStar key={index} src={star} $isGray alt="Une étoile"/>
            )}
        </StyledStarLine>
    )
}


export default RateScale;