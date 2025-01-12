import React from 'react';
import Text from '../Text/Text';
import Photo from '../../assets/photo.png';
import './Header.scss'

export type Header = {
  name: string;
  position: string;
};

const Header = ({ name, position }: Header) => {
  return (
    <span className="layout">
      <span className="texts">
        <Text bold type="header" text={name} />
        <Text type="header" text={position}/>
      </span>
      <img className="photo" src={Photo} alt='logo' width="239px" height="239px" />
    </span>
  );
}

export default Header;
