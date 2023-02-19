import PropTypes from 'prop-types';
import Tag from '../Tag';
import styled from 'styled-components';

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const StyledTitle = styled.h1`
    font-size: 2vw;
    margin: 1% 0%;
    @media screen and (max-width: 480px) {
        font-size: 4vw;
        text-align: left;
    }
`

const StyledLine = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

function PlaceInfo({title, location, tags}){
    return(
        <section>
            <StyledInfo>
                <StyledTitle>{title}</StyledTitle>
                <span>{location}</span>
            </StyledInfo>
            <StyledLine>
                {tags.map((tag, index)=> (
                    <Tag
                        key={`tag-${index}`}
                        tag={tag}
                    />
                ))}
            </StyledLine>
        </section>
    )
}

PlaceInfo.propTypes={
    title: PropTypes.string,
    location: PropTypes.string,
    tags: PropTypes.array,
}
export default PlaceInfo;