import React from 'react';
import Layouts from '../../components/Layouts/Layouts';
import Head from 'next/head';
import SignUpPage from '../../components/signup/SignUpPage';

const index = () => {
    return (
        <Layouts navbarCondition footerCondition>
            <Head>
                <title>Sign Up</title>
            </Head>
            <SignUpPage />
        </Layouts>
    );
};

export default index;