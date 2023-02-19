import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';
import radius from '../../utils/style/radius';

const StyledGallery = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media screen and (max-width: 480px) {
        height: auto;
        aspect-ratio: 1/1;
    }
`
const StyledArrow = styled(Arrow)`
    margin: auto;
    position: absolute;
    width: 5vw;
    height: auto;
    ${(props) =>
        props.$isRight &&
        `right: 0;
        rotate: 90deg;
    `}
    ${(props) =>
        props.$isLeft &&
        `rotate: -90deg;
    `}
`

const StyledPic = styled.img`
    height: 40vw;
    border-radius: ${radius.big};
    width: 100%;
    object-fit: cover;
    @media screen and (max-width: 480px) {
        border-radius: ${radius.medium};
        height: 100%;
    }
`
const StyledIndicator = styled.div`
    margin: auto;
    position: absolute;
    top: 82%;
    left: 48%;
    &>p{
    font-size: 3vw;}
    @media screen and (max-width: 480px) {
        display: none;
    }
`
function Gallery({pictures, index = 0}){
    const [currentIndex, setCurrentIndex] = useState(index)
    const [currentPicture, setCurrentPicture] = useState(pictures[currentIndex])

    function handlePreviousPicture(){
        let updatedIndex = currentIndex-1
        if(updatedIndex < 0){
            updatedIndex = pictures.length-1
        }
        setCurrentIndex(updatedIndex)
        setCurrentPicture(pictures[updatedIndex])
    }
    function handleNextPicture(){
        let updatedIndex = currentIndex+1
        if(updatedIndex > pictures.length - 1){
            updatedIndex = 0
        }
        setCurrentIndex(updatedIndex)
        setCurrentPicture(pictures[updatedIndex])
    }

    return (
        <StyledGallery>
            {pictures.length > 1 && 
                <StyledArrow onClick={handlePreviousPicture} $isLeft/>
            }
            <StyledPic src={currentPicture} alt='first'/>
            {pictures.length > 1 &&
                <StyledArrow onClick={handleNextPicture} $isRight/>
            }
            {pictures.length > 1 &&
            <StyledIndicator>           
                <p className='white_txt'>{currentIndex + 1}/{pictures.length}</p>            
            </StyledIndicator>
            }
        </StyledGallery>
    )
}

Gallery.propTypes={
    pictures: PropTypes.array
}

export default Gallery