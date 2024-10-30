import React from 'react';
import Layouts from '../../components/Layouts/Layouts';
import Head from 'next/head';
import LoginPage from '../../components/Login/LoginPage';

const index = () => {
    return (
        <Layouts navbarCondition footerCondition>
            <Head>
                <title>Travel Guide</title>
            </Head>
            <LoginPage />
        </Layouts>
    );
};

export default index;