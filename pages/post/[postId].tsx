import React, { } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
export interface PostDetailProps { }

export default function PostDetail(props: PostDetailProps) {
    const router = useRouter();
    return (
        <div>
            id Post
            <p>Query: {JSON.stringify(router.query)}</p>
        </div>
    );
}