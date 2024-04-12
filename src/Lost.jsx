import PropTypes from 'prop-types';

function Lost({ onClick }) {
    return (
    <section className='box-main'>
        <h3>You lost!</h3>
        <button className="btn" onClick={onClick}>Restart</button>
    </section>
    )
}

Lost.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Lost;