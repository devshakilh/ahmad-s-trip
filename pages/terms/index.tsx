import React from 'react';
import Layouts from '../../components/Layouts/Layouts';
import Terms from '../../components/terms/Terms';
import Head from 'next/head';


const index = () => {
    return (
        <Layouts navbarCondition footerCondition>
            <Head>
                <title>Term & Condition</title>
            </Head>
            <Terms />
        </Layouts>
    );
};

export default index;