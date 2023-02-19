import { useState } from 'react';
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import PropTypes from 'prop-types';
import radius from '../../utils/style/radius';

const StyledBox = styled.div`
    height: 100%;
`

const StyledTitleBlock = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.primary};
    padding: 1% 2%;
    border-radius: ${radius.small};
    margin: 1% 0%;
    z-index: 1;
    position: relative;
`
const StyledTitle = styled.p`
    margin: 0;
    @media screen and (max-width: 480px) {
        font-size: 3vw;
    }
    
`

const StyledDesc = styled.span`
    text-align: left;
    background-color: ${colors.secondary};
    padding: 4% 2%;
    margin-top: -2%;
    z-index: 0;
    display: flex;
    border-radius: ${radius.medium};
    height: 100%;
    @media screen and (max-width: 480px) {
        font-size: 2vw;
        border-radius: ${radius.small};

    }
`
    const StyledArrow = styled(Arrow)`
        height: 1vw;
    @media screen and (max-width: 480px) {
        height: 2vw;
    }
    ${(props) =>
        props.$isDown &&
        `rotate: 180deg;`}
    `

function Dropdown({title, content}){
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ? (
        <StyledBox>
            <StyledTitleBlock>
                <StyledTitle className='white_txt'>{title}</StyledTitle>
                <StyledArrow onClick={() => setIsOpen(false)} alt='Boutton du menu déroulant'/>
            </StyledTitleBlock>
            <StyledDesc>{content}</StyledDesc>
        </StyledBox>
    ) : (
        <StyledBox>
            <StyledTitleBlock>
                <StyledTitle className='white_txt'>{title}</StyledTitle>
                <StyledArrow $isDown onClick={() => setIsOpen(true)} alt='Boutton du menu déroulant'/>
            </StyledTitleBlock>
        </StyledBox>
    )
}

Dropdown.propTypes={
    title: PropTypes.string,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
      ]),
}

export default Dropdown;