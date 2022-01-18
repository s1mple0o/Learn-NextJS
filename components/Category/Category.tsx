import React, { } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
export interface CategoryProps { }

export default function CategoryProps(props: CategoryProps) {
    const [active, setActive] = useState(true);
    const { i18n } = useTranslation();
    const openSideBar = () => {
        setActive(false);
    }
    const closeSideBar = () => {
        setActive(true);
    }
    return (
        <div className="category">
            <div className="menu" hidden={active}>
                <a className="btn-close-menu" onClick={() => closeSideBar()}>{'X'}</a>
                <a className="menu-content" href="/">Home</a>
                <a className="menu-content" href="/nextjs/part1">Phần I</a>
                <a className="menu-content" href="/nextjs/part2">Phần II</a>
                <a className="menu-content" href="/nextjs/part1">Phần III</a>
                <a className="menu-content" href="/nextjs/part1">Phần IV</a>
                <a className="menu-content" href="/nextjs/part1">Phần V</a>
                <a className="menu-content" href="/nextjs/part1">Phần VI</a>
                <a className="menu-content" href="/nextjs/part1">Phần VII</a>
                <a className="menu-content" href="/nextjs/part1">Phần VIII</a>
                <a className="menu-content" href="/nextjs/part1">Phần IX</a>
                <a className="menu-content" href="/nextjs/part1">Phần X</a>
                <a className="menu-content" href={`/${i18n.language}/nextjs/demo`}>Demo</a>
            </div>
            <div className="menu-toggler" onClick={() => openSideBar()}><span>C</span></div>
        </div>
    );
}