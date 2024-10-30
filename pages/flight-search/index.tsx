import React from 'react';

import AvailableFlights from '../../components/FlightSearch/AvailableFlights/AvailableFlights';
import FlightSearch from '../../components/FlightSearch/FlightSearch';

const flightSearch = () => {
    return (
        <div>
          
            <FlightSearch />
            <AvailableFlights />
        </div>
    );
};

export default flightSearch;