import PropTypes from 'prop-types';

function Card({ champ, onClick }) {
    const champURL = champ.replace(/[.'\s]/g, '');
    const loadingImageURL = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champURL}_0.jpg`;

    return (          
    <li className="card" onClick={onClick}>
        <div className='img-card'>
            <img src={loadingImageURL} alt="Imagen 1" key={champ}/>
            <div className="gradient-overlay"></div>
        </div>
        <p className='card-text'>{champ}</p>
    </li>
    );
}

Card.propTypes = {
    champ: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Card;