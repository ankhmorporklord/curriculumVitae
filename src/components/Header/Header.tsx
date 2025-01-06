import React from 'react';
import texts from '../../localizations/es';
import Text from '../Text/Text';
import Photo from '../../assets/photo.png';
import './Header.scss'

const Header = () => {
    return (
        <span className="layout">
            <span className="texts">
                <Text bold type="header" text={texts.header.name}/>
                <Text type="header" text={texts.header.position}/>
            </span>
            <img className="photo" src={Photo} alt='logo' width="239px" height="239px" />
        </span>
    );
}

export default Header;