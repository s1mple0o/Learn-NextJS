import React, { } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
export interface ParamPageProps { }

export default function ParamPage(props: ParamPageProps) {
    const router = useRouter();
    return (
        <div>
            params page
            <p>Query: {JSON.stringify(router.query)}</p>
        </div>
    );
}