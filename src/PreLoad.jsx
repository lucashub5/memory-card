import { dataIcons } from './data';
import { useState } from 'react';
import PropTypes from 'prop-types';

function PreLoad({ onSubmit }) {
    const [name, setName] = useState('Guest');
    const [selectedIcon, setSelectedIcon] = useState({icon: 1212, index: 0});

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleClick(icon, index) {
        setSelectedIcon({icon: icon, index: index});
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(name, selectedIcon.icon);
    }

    return (
        <form onSubmit={handleSubmit}>
            <section className='box-main'>
                <p>Enter your name and select an icon:</p>
                <input type="text" placeholder="Your name..." value={name} onChange={handleNameChange} required />
                    <ul className='icons-list'>
                        {dataIcons.map((icon, index) => (
                            <li className={`icon-preload ${index === selectedIcon.index ? 'selected-icon' : ''}`} 
                                key={index} onClick={() => handleClick(icon, index)}>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/14.7.1/img/profileicon/${icon}.png`} alt={`Icon`} key={index} />
                            </li>
                        ))}
                    </ul>
                <button className='btn' type="submit">Start!</button>
            </section>
        </form>)
}

PreLoad.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default PreLoad;