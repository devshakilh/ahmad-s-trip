// import React, { useState } from 'react';
// import styles from './DetailPageAccordion.module.css'


// const DetailPageAccordion = () => {
//     const [selected, setSelected] = useState("")

//     const toggle = (i:any) => {
//          if(selected === i) {
//             return setSelected("")
//          }
//          setSelected(i)
//     }

//     return (
//         <div className={`${styles.wrapper}`}>
//             <div className={`${styles.accordion}`}>
//                 <div className={`${styles.item}`}>
//                     <div className={`${styles.title}`} onClick={()=> toggle("Itinerary")}>
//                         <h2>item 1</h2>
//                     </div>
//                     <div className={`${styles.content}`}>
//                         <p className="">this is ans of item 1</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DetailPageAccordion;

import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import { AccordionFakeData } from './DetailPageAccordionFake';

const DetailPageAccordion = () => {
    const [expandedFaqId, setExpandedFaqId] = useState("");

    return (
        <div>
            <div className={`mx-auto h-fit border p-2`}>
                {AccordionFakeData?.map((f: any) => (
                    <div
                        key={f.id}
                        tabIndex={0}
                        onClick={() => {
                            if (f.id !== expandedFaqId) {
                                setExpandedFaqId(f.id);
                            } else {
                                setExpandedFaqId("");
                            }
                        }}
                        className="cursor-pointer rounded-box pb-5"
                    >
                        <div className={`flex justify-between py-2 font-medium border p-2 items-center`}>
                            <h1
                                style={{
                                    color: "black",
                                    width: "90%",
                                }}
                                className="section-description duration-300 text-[18px]"
                            >
                                {f.title}
                            </h1>
                            <p className="flex items-start gap-x-1">
                                <HiChevronDown
                                    fontSize={16}
                                    className="duration-300"
                                    style={{
                                        color: "black",
                                        transform: `${f.id !== expandedFaqId
                                            ? "rotate(0deg)"
                                            : "rotate(180deg)"
                                            }`,
                                    }}
                                />
                            </p>
                        </div>
                        <div
                            className={f.id === expandedFaqId ? "block p-2" : "hidden"}
                        >
                            {f.description}
                            {/* <p className='font-serif'>{f.description}</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailPageAccordion;