import React, { } from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Category from "../../../components/Category/Category";

export interface Part2PageProps { }

export default function Part2Page(props: Part2PageProps) {
    return (
        <>
            <Category />
            <Header />
            <div className="all-container">
                <div className="container-part2">

                </div>
            </div>
            <Footer />
        </>
    );
}