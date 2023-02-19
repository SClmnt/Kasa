import Gallery from "../../components/Gallery"
import PlaceInfo from "../../components/PlaceInfo"
import HostInfo from "../../components/HostInfo"
import Dropdown from "../../components/Dropdown"
import Equipement from "../../components/Equipement"
import { Navigate }  from "react-router-dom"

import listeLogements from '../../data/listeLogements.json'
import { useParams } from "react-router-dom"
import styled from "styled-components"

const StyledPage = styled.div`
    width: 90%;
`

const StyledBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2% 0%;
    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`

const StyledPlaceSection = styled.section`
    width: 60%;
    display: flex;
    @media screen and (max-width: 480px) {
        width: 100%;
    }
`

const StyledHostSection= styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 16%;
    @media screen and (max-width: 480px) {
        width: 100%;
    }
`

const StyledDropdownSection = styled.section`
    justify-content: flex-start;
    width: 48%;
    @media screen and (max-width: 480px) {
        width: 100%;
        font-size: 3vw;
    }
`

const StyledList = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    flex-direction: column;
    justify-content: flex-start;
`

function Fiche(){
    const { logisId } = useParams();
    const logement = listeLogements.find((e) => e.id === logisId);
    if (logement === undefined){
        return <Navigate replace to="/not-found"/>
    }
    return(
    <main>
        <StyledPage>
            <Gallery pictures={logement.pictures}/>
            <StyledBlock>
                <StyledPlaceSection>
                    <PlaceInfo 
                        title={logement.title}
                        location={logement.location}
                        tags={logement.tags}  />
                </StyledPlaceSection>
                <StyledHostSection>
                    <HostInfo
                        name={logement.host.name}
                        picture={logement.host.picture}
                        rate={logement.rating}
                    />
                </StyledHostSection>
            </StyledBlock>
            <StyledBlock>
                <StyledDropdownSection>
                    <Dropdown
                        title="Description"
                        content={logement.description}
                    />
                </StyledDropdownSection>
                <StyledDropdownSection>
                    <Dropdown
                        title="Equipements"
                        content={
                            <StyledList>
                                {logement.equipments.map((equipment, index)=>(                            
                                    <Equipement
                                        key={`equipment ${index}`}
                                        stuff={equipment}
                                    />
                                ))}
                            </StyledList>
                        }
                    />
                </StyledDropdownSection>
            </StyledBlock>
        </StyledPage>
    </main>
    )
}

export default Fiche