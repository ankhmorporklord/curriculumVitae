import classes from 'classnames';
import React from 'react';
import './Text.scss'

interface TextProps {
    type?: 'header' | 'title' | 'subtitle' | 'text';
    text?: string;
}

const Text = ({ type = 'text', text = '' }: TextProps) => {
    const showSquareWrapper = type === 'title';
    return (
        <span className={classes(showSquareWrapper && "wrapper-layout")}>
            <span className={classes(type, showSquareWrapper && 'wrapper-square')}>{text}</span>
            {showSquareWrapper && <div className="wrapper-line"></div>}
        </span>
    );
}

export default Text;