import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import radius from '../../utils/style/radius';

const StyledLink = styled(Link)`
    width: 26%;
    overflow: hidden;
    border-radius: ${radius.medium};
    aspect-ratio: 1 / 1;
    margin: 3%;
    @media screen and (max-width: 480px) {
        width: 100%;
        margin: 3% 0%;
    }
`
const StyledCard = styled.figure`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
`
const CardImg = styled.img`
    height: auto;
    height: 100%;
`
const StyledTitle = styled.figcaption`
    position: absolute;
    left: 0%;
    bottom: 0%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    text-align: left;
    background: linear-gradient(180deg,rgba(255,255,255,0) 60%,rgba(0,0,0,5) 100%);
    width: 100%;
    height: 100%;
    padding: 85% 5% 5% 5%;
    @media screen and (max-width: 480px) {
        font-size: 5vw;
    }

`
function Card({ title, cover, id }) {
    return (
        <StyledLink to={`/logements/${id}`}>
            <StyledCard >
                <CardImg src={cover} alt="logement" />
                <StyledTitle className='white_txt'>{title}</StyledTitle>
            </StyledCard>
        </StyledLink>
    )
};
 
Card.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string,
    id: PropTypes.string,
}


export default Card