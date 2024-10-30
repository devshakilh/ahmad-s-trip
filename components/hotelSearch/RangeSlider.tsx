import React, { useState } from 'react';

const RangeSlider = (
    { setDistanceRange, distanceRange }
        : { setDistanceRange: any, distanceRange: any }) => {


    return (
        <div>
            <input className='w-full' type="range" min='0' max='25' step="1" value={distanceRange} name="" id="" onChange={(e) => setDistanceRange(e.target.value)} />
        </div>
    );
};

export default RangeSlider;