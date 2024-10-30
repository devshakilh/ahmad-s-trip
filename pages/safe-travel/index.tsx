import React from 'react';
import Layouts from '../../components/Layouts/Layouts';
import SafeTravel from '../../components/safe-travel/SafeTravel';
import Head from 'next/head';

const index = () => {
    return (
        <Layouts navbarCondition footerCondition>
            <Head>
                <title>Safe Travel</title>
            </Head>
            <SafeTravel />
        </Layouts>
    );
};

export default index;