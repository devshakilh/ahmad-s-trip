// import React, { useState } from "react";
// import ReactSlider from "react-slider";
// import styles from './MultiRange.module.css'

// const MultiRange = (
//     {setMinPrice, setMaxPrice}
//     :
//     {setMinPrice:any, setMaxPrice:any}
// ) => {

//     return (
//         <div className="App">
//             <ReactSlider
//                 className="horizontal-slider"
//                 thumbClassName="example-thumb"
//                 trackClassName="example-track"
//                 min={3000}
//                 max={18001}
//                 defaultValue={[3000, 10000]}
//                 ariaLabel={['Lower thumb', 'Upper thumb']}
//                 ariaValuetext={state => `Thumb value ${state.valueNow}`}
//                 renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
//                 // renderThumb={(props, state) => <div {...props}>{setMinPrice(state.value[0])} {setMaxPrice(state.value[1])}</div>}
//                 pearling
//                 minDistance={10}
//             />
//         </div>
//     );
// };

// export default MultiRange;

import React from "react";
import ReactSlider from "react-slider";

interface MultiRangeProps {
    setMinPrice: (value: number) => void;
    setMaxPrice: (value: number) => void;
}

const MultiRange: React.FC<MultiRangeProps> = ({ setMinPrice, setMaxPrice }) => {
    return (
        <div className="App">
            <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                min={3000}
                max={18001}
                defaultValue={[3000, 10000]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                renderThumb={(props, state) => (
                    <div className="thumb" {...(props as React.HTMLAttributes<HTMLDivElement>)}>
                        {state.valueNow}
                    </div>
                )}
                pearling
                minDistance={10}
                onAfterChange={(values) => {
                    setMinPrice(values[0]);
                    setMaxPrice(values[1]);
                }}
            />
        </div>
    );
};

export default MultiRange;
