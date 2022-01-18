import React, { } from 'react';
import PropTypes from 'prop-types';
import { version } from 'next-i18next/package.json'
import { useTranslation } from 'next-i18next';

export interface HeaderProps { }

export default function HeaderProps(props: HeaderProps) {
    const { t } = useTranslation('footer')
    return (
        <div className="footer">
            <div className="footer-left">
                <div className="company-name">Aladin Technology</div>
            </div>
            <div className="footer-right">
                <div>Công nghệ ứng dụng:</div>
                <div className="technology">
                    <a className="tech-name">{t('description')}</a>
                    <a className="tech-name">next-i18next v
                        {version}
                    </a>
                    <a className="tech-name">ReduxToolkit</a>
                    <a className="tech-name">ReduxSaga</a>
                    <a className="tech-name">NextJS</a>
                    <a className="tech-name">Jhipster</a>
                </div>
            </div>
        </div>
    );
}