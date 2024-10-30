import React from 'react';
import Layouts from '../../components/Layouts/Layouts';
import About from '../../components/about/About';


const index = () => {
    return (
        <Layouts navbarCondition footerCondition>
            <About />
        </Layouts>
    );
};

export default index;