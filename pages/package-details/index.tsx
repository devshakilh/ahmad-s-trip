import React from 'react';
import Layouts from '../../components/Layouts/Layouts';
import DetailPage from '../../components/Home/package-details/DetailPage';

const index = () => {
    return (
        // ================== Arko Roy Badhon ==============
        <Layouts navbarCondition footerCondition>
            <DetailPage />
        </Layouts>
    );
};

export default index;