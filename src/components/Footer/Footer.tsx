import React from 'react';
import Text from '../Text/Text'
import './Footer.scss'

interface TextProps {
    bold?: boolean;
    text?: string;
    type?: 'header' | 'title' | 'subtitle' | 'text';
}

const Footer = ({ type = 'text', text = '', bold = false }: TextProps) => {
    const showSquareWrapper = type === 'title';
    return (
        <span className="footer-layout">
            <Text text="TECH INFO" type="subtitle" showSquareWrapper showSquareWrapperLine={false}/>
            <span className="footer-separator"></span>
            <Text text="DARK MODE" type="subtitle" showSquareWrapper showSquareWrapperLine={false}/>
            <span className="footer-separator"></span>
            <Text text="HUMAN INFO" type="subtitle" showSquareWrapper showSquareWrapperLine={false}/>
        </span>
    );
}

export default Footer;