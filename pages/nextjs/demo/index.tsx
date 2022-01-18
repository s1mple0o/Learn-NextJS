import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Category from "../../../components/Category/Category";
import { Account } from '../../../model/user';
import { Table, Tag, Space, Select, Input, Modal, Button } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export interface DemoPageProps { }

export default function DemoPage(props: DemoPageProps) {
    const { t } = useTranslation('common');
    const { i18n } = useTranslation();
    const router = useRouter();

    const { Option } = Select;
    const { Search } = Input;
    const initialAccount = { id: '', name: '', image: '', email: '', password: 0, role: '' };
    const [accountList, setAccountList] = useState<Account[]>();
    const [account, setAccount] = useState(initialAccount);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [id, setId] = useState('');
    const showModal = () => {
        setIsModalVisible(true);
    };
    const showModal2 = (id: any) => {
        setIsModalVisible2(true);
        setId(id);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleCancel2 = () => {
        setIsModalVisible2(false);
    };

    function onChange(value: string) {
        console.log(`selected ${value}`);
        const url = `https://613cb6f0270b96001798b237.mockapi.io/api/account/accounts?search=${value}`;
        axios.get(url).then(response => {
            setAccountList(response.data);
        })

    }

    function onSearch(val: string) {
        console.log('search:', val);
    }

    function onSearch2(value: string) {
        console.log('search2:', value);
        const url = `https://613cb6f0270b96001798b237.mockapi.io/api/account/accounts?search=${value}`;
        axios.get(url).then(response => {
            setAccountList(response.data);
        })
    }
    const columns = [
        {
            title: `${t("id")}`,
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: `${t("avatar")}`,
            dataIndex: 'image',
            key: 'image',
            render: (text: any, item: any) => (
                <img src={item.image} width={70} />
            ),
        },
        {
            title: `${t("name")}`,
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: `${t("email")}`,
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: `${t("password")}`,
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: `${t("role")}`,
            dataIndex: 'role',
            key: 'role',
            render: (text: any, item: any) => (
                <Space size="middle">
                    <a>
                        <Tag color={item.role === true ? 'yellow' : 'green'} key={text}>
                            {item.role === true ? 'admin' : 'user'}
                        </Tag>
                    </a>
                </Space>
            ),
        },
        {
            title: `${t("action")}`,
            dataIndex: 'action',
            key: 'action',
            render: (text: any, item: any) => (
                <Space size="middle">
                    <a>
                        <Tag color='blue' key={text} onClick={() => router.push(`/nextjs/demo/${item.id}`)}>
                            {t("see-more")}
                        </Tag>
                    </a>
                    <a>
                        <Tag color='red' key={text} onClick={() => showModal2(item.id)}>
                            {t("delete")}
                        </Tag>
                    </a>
                </Space>
            ),
        }
    ]

    useEffect(() => {
        const url = `https://613cb6f0270b96001798b237.mockapi.io/api/account/accounts`;
        axios.get(url).then(response => {
            setAccountList(response.data);
        })

    }, [])

    const onChangeHandler = (e: any) => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log('e', e.target.name, e.target.value);
        setAccount({
            ...account,
            [name]: value
        })

    };
    const onSave = async (e: any, account: any) => {
        e.preventDefault();
        const role1 = account.role == "true" ? true : false;
        console.log(1, role1);
        const data = { ...account, role: role1 };
        console.log('data', data);
        const url = `https://613cb6f0270b96001798b237.mockapi.io/api/account/accounts`;
        await axios.post(url, data).then(response => {
            setAccount(response.data)
        }).catch(err => {
            console.log(err);
        })
        // router.push('/nextjs/demo', undefined, undefined);
        window.location.href = '/nextjs/demo';
    }

    const onDelete = async (id: any) => {
        const url = `https://613cb6f0270b96001798b237.mockapi.io/api/account/accounts/${id}`;
        await axios.delete(url).then(response => {
            console.log('delete done');
        })
        window.location.reload();
    }
    console.log(account);
    console.log(id);
    return (
        <>
            <Category />
            <Header />

            <div className="all-container">
                <div className="demo-container">
                    <div>
                        {t("current-languae")}: {t(`${i18n.language}`)}
                    </div>
                    <Button type="primary" onClick={showModal}>
                        {t("create")}
                    </Button>
                    <Modal title="Create a User" visible={isModalVisible}
                        footer={null} onCancel={handleCancel}>
                        <div className="form-detail">
                            <form>
                                <input
                                    className="input-form-detail"
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    className="input-form-detail"
                                    type="email"
                                    name="email"
                                    placeholder="email"

                                    onChange={(e) => onChangeHandler(e)}
                                    required
                                    maxLength={30}
                                />
                                <input
                                    className="input-form-detail"
                                    type="password"
                                    name="password"
                                    placeholder="password"

                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    className="input-form-detail"
                                    type="text"
                                    name="image"
                                    placeholder="image"

                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <select
                                    name="role"
                                    className="input-form-detail"
                                    onChange={(e) => onChangeHandler(e)}>
                                    <option value="true">Admin</option>
                                    <option value="false">User</option>
                                </select>
                                <button className="btn-form-detail" onClick={(e) => onSave(e, account)}> {t("create")}</button>
                                {/* <button type="button" onClick={() => onReset()}>Clear</button> */}
                            </form>
                        </div>
                    </Modal>
                    <div className="extension">
                        <div className="extension-1">
                            <Select
                                showSearch
                                placeholder={t("filter")}
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={(input: any, option: any) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="">{t("all")}</Option>
                                <Option value="true">{t("admin")}</Option>
                                <Option value="false">{t("user")}</Option>
                            </Select>
                        </div>
                        <div className="extension-2">
                            <Search placeholder="input search text"
                                enterButton={t("search-input")}
                                style={{ width: 350 }}
                                onSearch={onSearch2}
                            />
                        </div>

                    </div>

                    <Table columns={columns} dataSource={accountList} pagination={{ pageSize: 5 }} />
                </div>
            </div>
            <Footer />
            <Modal title="Delete account" visible={isModalVisible2} onCancel={handleCancel2} footer={null}>
                <p>{t("Areyousure?")}</p>
                <button className="btn-form-detail" style={{ backgroundColor: 'red', border: 'none', padding: '10px', color: 'white' }} onClick={() => onDelete(id)}>{t("delete")}</button>
            </Modal>
        </>
    );
}


export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'demo']),
    },
})