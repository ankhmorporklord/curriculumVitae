import classes from 'classnames';
import React from 'react';
import './Text.scss'

interface TextProps {
    bold?: boolean;
    text?: string;
    type?: 'header' | 'title' | 'subtitle' | 'text';
    showSquareWrapper?: boolean;
    showSquareWrapperLine?: boolean;
}

const Text = ({ type = 'text', text = '', bold = false, showSquareWrapper, showSquareWrapperLine }: TextProps) => {
    const showWrapper = type === 'title' || showSquareWrapper;
    return (
        <span className={classes(showWrapper && "wrapper-layout")}>
            <span className={classes(type, bold && 'bold', 'text-width', showWrapper && 'wrapper-square')}>{text}</span>
            {showWrapper && showSquareWrapperLine !== false && <div className="wrapper-line"></div>}
        </span>
    );
}

export default Text;