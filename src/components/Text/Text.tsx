import classes from 'classnames';
import React from 'react';
import './Text.scss'

interface TextProps {
    bold?: boolean;
    text?: string;
    type?: 'header' | 'title' | 'subtitle' | 'text';
}

const Text = ({ type = 'text', text = '', bold = false }: TextProps) => {
    const showSquareWrapper = type === 'title';
    return (
        <span className={classes(showSquareWrapper && "wrapper-layout")}>
            <span className={classes(type, bold && 'bold', showSquareWrapper && 'wrapper-square')}>{text}</span>
            {showSquareWrapper && <div className="wrapper-line"></div>}
        </span>
    );
}

export default Text;