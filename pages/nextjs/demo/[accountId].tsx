import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Category from "../../../components/Category/Category";
import { useRouter } from 'next/router';
import { Account } from '../../../model/user';
import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export interface AccountDetailProps { }

export default function AccountDetail(props: AccountDetailProps) {
    const { t } = useTranslation('demo');
    const { i18n } = useTranslation();
    const router = useRouter();
    const accountId = router.query.accountId;
    const initialAccount = { id: '', name: '', image: '', email: '', password: 0, role: '' };
    const [account, setAccount] = useState(initialAccount);

    useEffect(() => {
        const url = `https://613cb6f0270b96001798b237.mockapi.io/api/account/accounts/${accountId}`;
        axios.get(url).then(response => {
            setAccount(response.data)
        }).catch(err => {
            console.log(err)
        })
    }, [accountId])
    const onSave = async (e: any, account: any) => {
        e.preventDefault();
        const role1 = account.role == "true" ? true : false;
        console.log(1, role1);
        const data = { ...account, role: role1 };
        console.log('data', data);
        const url = `https://613cb6f0270b96001798b237.mockapi.io/api/account/accounts/${accountId}`;
        await axios.put(url, data).then(response => {
            setAccount(response.data)
        }).catch(err => {
            console.log(err);
        })
        // router.push('/nextjs/demo', undefined, undefined);
        window.location.href = '/nextjs/demo';
    }

    const onChangeHandler = (e: any) => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log('e', e.target.name, e.target.value);
        setAccount({
            ...account,
            [name]: value
        })

    };

    console.log('account after onchange', account);
    return (
        <>
            <Category />
            <Header />
            <div className="all-container">
                <div className="container-account-detail">
                    <div className="avatar">
                        <img src={account?.image} width={350} />
                    </div>
                    <div className="form-detail">
                        <form>
                            <input
                                className="input-form-detail"
                                type="text"
                                name="id"
                                placeholder="id"
                                value={account?.id}
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                className="input-form-detail"
                                type="text"
                                name="name"
                                placeholder="name"
                                value={account?.name}
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                className="input-form-detail"
                                type="email"
                                name="email"
                                placeholder="email"
                                value={account?.email}
                                onChange={(e) => onChangeHandler(e)}
                                required
                                maxLength={30}
                            />
                            <input
                                className="input-form-detail"
                                type="password"
                                name="password"
                                placeholder="password"
                                value={account?.password}
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                className="input-form-detail"
                                type="text"
                                name="image"
                                placeholder="image"
                                value={account?.image}
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <select
                                name="role"
                                className="input-form-detail"
                                value={account.role}
                                onChange={(e) => onChangeHandler(e)}>
                                <option value="true">Admin</option>
                                <option value="false">User</option>
                            </select>
                            <button className="btn-form-detail" onClick={(e) => onSave(e, account)}>{t("update")}</button>
                            {/* <button type="button" onClick={() => onReset()}>Clear</button> */}
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}


export const getServerSideProps = async ({ locale }: any) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'demo']),
    },
})