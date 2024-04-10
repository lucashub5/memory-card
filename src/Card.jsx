import PropTypes from 'prop-types';

function Card({ champ, onClick }) {
    const champURL = champ.name.replace(/[.'\s]/g, '');
    const loadingImageURL = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champURL}_0.jpg`;

    return (          
    <li className="card" onClick={onClick}>
        <div className='img-card'>
            <img src={loadingImageURL} alt="Imagen 1" key={champ.id}/>
            <div className="gradient-overlay"></div>
        </div>
        <p className='card-text'>{champ.name}</p>
    </li>
    );
}

Card.propTypes = {
    champ: PropTypes.string.isRequired
};

Card.propTypes = {
    champ: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    onClick: PropTypes.func.isRequired
};

export default Card;