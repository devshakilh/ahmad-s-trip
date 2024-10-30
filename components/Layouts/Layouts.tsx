import Head from 'next/head';
import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layouts = (
    {
        children,
        navbarCondition = true,
        footerCondition = true
    }
        : {
            children: React.ReactNode,
            navbarCondition: Boolean,
            footerCondition: Boolean
        }
) => {
    return (
        <>
            <Head>
                <title>Sharetrip</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <style>{`
                /* Add your media queries here */
                @media only screen and (max-width: 600px) {
                /* Style changes for small screens */
                }
            `}</style>
            </Head>
            <main>
                {navbarCondition && <Navbar />}
                {children}
                {footerCondition && <Footer />}
            </main>
        </>
    );
};

export default Layouts;