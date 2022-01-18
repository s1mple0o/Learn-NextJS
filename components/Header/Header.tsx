import React, { } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export interface HeaderProps { }

export default function HeaderProps(props: HeaderProps) {

    const { t } = useTranslation('common');
    const { i18n } = useTranslation();
    const router = useRouter();


    return (
        <div className="header">
            <div className="left-header">
                <a id="aladin-technology" href="/">Aladin Technology</a>
            </div>
            <div className="mid-header">
                <input type="text" className="input-search-header" placeholder="Search in here" />
                <button className="btn-search">{t("search-input")}</button>
            </div>
            <div className="right-header">
                <div className="user-image">
                    <img className="user-avatar" src='https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg' />
                </div>
                <div className="user-name">
                    HoangNam_Aladin<br />
                    <div>
                        {t("current-languae")}: {t(`${i18n.language}`)}
                    </div>
                </div>
                <span
                    style={{ width: '150px', padding: '5px', cursor: 'pointer' }}
                    onClick={() => i18n.changeLanguage('en')}
                >
                    {t("en")}
                </span>
                <span
                    style={{ width: '150px', padding: '5px', cursor: 'pointer' }}
                    onClick={() => i18n.changeLanguage('vi')}
                >
                    {t("vi")}
                </span>
            </div>
        </div>
    );
}
