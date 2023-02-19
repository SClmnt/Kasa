import listeLogements from '../../data/listeLogements.json'
import Card from '../Card'
import colors from '../../utils/style/colors'
import styled from 'styled-components'
import radius from '../../utils/style/radius';

const StyledGrid = styled.div`
    display: flex;
    background-color: ${colors.secondary};
    justify-content: space-around;
    flex-wrap: wrap;
    border-radius: ${radius.big};
    padding: 0% 0%;
    @media screen and (max-width: 480px) {
        flex-direction: column;
        background-color: white;
    }
`;

function Logements() {
    return (
            <StyledGrid>
                {listeLogements.map((logis, index) => (
                    <Card
                        key={`${logis.id}-${index}`}
                        cover={logis.cover}
                        title={logis.title}
                        id={logis.id}
                    />
                ))}
            </StyledGrid>
    )
}

export default Logements