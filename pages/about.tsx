import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useState } from 'react';
import NextLink from 'next/link';
import { Account } from '../model/user';
import { useRouter } from 'next/router';



export interface AboutPageProps { }

export default function AboutPage(props: AboutPageProps) {
    const router = useRouter()
    const [userList, setUserList] = useState<Account[]>()
    useEffect(() => {
        const api = 'https://613cb6f0270b96001798b237.mockapi.io/api/account/accounts'
        axios.get(api).then(response => {
            setUserList(response.data)
        })
    }, [])
    return (
        <div >
            <div className="about-page">
                {userList?.map(user => {
                    return (
                        <a onClick={() => router.push(`/post/${user.id}`)}>{user.name}<br /></a>
                    )
                })}

            </div>

        </div>
    );
}

