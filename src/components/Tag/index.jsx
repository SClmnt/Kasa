import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import radius from '../../utils/style/radius';

const StyledTag = styled.p`
    background-color: ${colors.primary};
    width: 80%;
    padding: 2% 1%;
    border-radius: ${radius.medium};
    margin-inline-end: 4%;
    font-size: 1.2vw;
    @media screen and (max-width: 480px) {
        font-size: 2vw;
        border-radius: ${radius.small};
        width: max-content;
        padding: 2% 4%;
    }
`
function Tag({tag}){
    return(
        <StyledTag className='white_txt'>{tag}</StyledTag>
    )
}

Tag.propTypes={
    tag: PropTypes.string,
}
export default Tag;