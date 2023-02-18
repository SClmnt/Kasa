import listeLogements from '../../data/listeLogements.json'
import Card from '../Card'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const StyledGrid = styled.div`
    display: flex;
    background: ${colors.secondary};
    justify-content: space-around;
    flex-wrap: wrap;
    border-radius: 25px;
    padding: 0% 0%;
`

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