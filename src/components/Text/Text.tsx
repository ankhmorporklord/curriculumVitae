import React from 'react';
import './Text.scss'

interface TextProps {
    type?: 'header' | 'title' | 'subtitle' | 'text';
    text?: string;
}

const Text = ({ type = 'text', text = '' }: TextProps) => {
    return (
        <span className={type}>{text}</span>
    );
}

export default Text;