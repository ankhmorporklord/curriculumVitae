import classes from 'classnames';
import React from 'react';
import './Text.scss'

interface TextProps {
    prefix?: string;
    text?: string;
    type?: 'header' | 'title' | 'subtitle' | 'text';
    showSquareWrapper?: boolean;
    showSquareWrapperLine?: boolean;
}

const Text = ({ prefix, type = 'text', text = '', showSquareWrapper, showSquareWrapperLine }: TextProps) => {
    const showWrapper = type === 'title' || showSquareWrapper;
    return (
      <>
        <div className={classes(showWrapper && "wrapper-layout")}>
            {prefix && (<span className={classes(type, 'text-width', 'bold')}>{prefix}</span>)}
            <span className={classes(type, 'text-width', showWrapper && 'wrapper-square')}>{text}</span>
            {showWrapper && showSquareWrapperLine !== false && <div className="wrapper-line"></div>}
        </div>
      </>
    );
}

export default Text;