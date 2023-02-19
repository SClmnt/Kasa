import PropTypes from 'prop-types';
import RateScale from '../RateScale'
import styled from 'styled-components';
import radius from '../../utils/style/radius';

const StyledHostBlock = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 480px) {
        flex-direction: row-reverse;
        justify-content: space-between;
    }
`
const StyledNamePicBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: right;
`

const StyledName = styled.span`
    display: flex;
    width: min-content;
    @media screen and (max-width: 480px) {
        margin: 0 2vw;
    }
`
const StyledPic = styled.img`
    border-radius: ${radius.round};
    width: 7vw;
`


function HostInfo({name, picture, rate}){
    const imgAlt=`Portrait ${name}`
    return(
        <StyledHostBlock>
            <StyledNamePicBlock>
                <StyledName>{name}</StyledName>
                <StyledPic src={picture} alt={imgAlt}/>
            </StyledNamePicBlock>
            <RateScale scaleValue={rate}/>
        </StyledHostBlock>
    )
}

HostInfo.propTypes={
    name: PropTypes.string,
    picture: PropTypes.string,
    rate: PropTypes.string,
}
export default HostInfo