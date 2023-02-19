import PropTypes from 'prop-types';

function Equipement({stuff}){
    return(
        <li>{stuff}</li>
    )
}

Equipement.propTypes={
    stuff: PropTypes.string,
}
export default Equipement;