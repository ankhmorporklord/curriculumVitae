import classes from 'classnames';
import React from 'react';
import './Text.scss'

export type TagType = 'span' | 'div';

interface TextProps {
    bold?: boolean;
    text?: string;
    type?: 'header' | 'title' | 'subtitle' | 'text';
    Tag?: TagType;
    showSquareWrapper?: boolean;
    showSquareWrapperLine?: boolean;
}

const Text = ({ type = 'text', Tag = 'span', text = '', bold = false, showSquareWrapper, showSquareWrapperLine }: TextProps) => {
    const showWrapper = type === 'title' || showSquareWrapper;
    console.log('Tag: ', Tag);
    const HTMLTag = Tag || 'span';
    return (
      <>
        <HTMLTag className={classes(showWrapper && "wrapper-layout")}>
            <span className={classes(type, bold && 'bold', 'text-width', showWrapper && 'wrapper-square')}>{text}</span>
            {showWrapper && showSquareWrapperLine !== false && <div className="wrapper-line"></div>}
        </HTMLTag>
      </>
    );
}

export default Text;