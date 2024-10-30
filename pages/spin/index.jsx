// // components/Spin.js

// import { useRef, useState } from 'react';
// import styles from './spin.module.css'


// const Spin = () => {
//     const wheelRef = useRef();
//     const [value, setValue] = useState(0);

//     const handleSpin = () => {
//         const newValue = Math.ceil(Math.random() * 3600);
//         setValue(newValue);
//         wheelRef.current.style.transform = `rotate(${newValue}deg)`;
//     };

//     return (
//         <div className={styles.body}>
//             <div className={styles.container}>
//                 <div className={styles.spinBtn} onClick={handleSpin}>
//                     Spin
//                 </div>
//                 <div className={styles.wheel} ref={wheelRef}>
//                     <div className={`${styles.number} ${styles.design1}`}><span>100</span></div>
//                     <div className={`${styles.number} ${styles.design2}`}><span>1</span></div>
//                     <div className={`${styles.number} ${styles.design3}`}><span>50</span></div>
//                     <div className={`${styles.number} ${styles.design4}`}><span>0</span></div>
//                     <div className={`${styles.number} ${styles.design5}`}><span>1000</span></div>
//                     <div className={`${styles.number} ${styles.design6}`}><span>10</span></div>
//                     <div className={`${styles.number} ${styles.design7}`}><span>5</span></div>
//                     <div className={`${styles.number} ${styles.design8}`}><span>20</span></div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Spin;
import { useRef, useState } from 'react';
import styles from './spin.module.css';

const Spin = () => {
    const wheelRef = useRef();
    const [value, setValue] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const toastTimeout = useRef(null); // Track timeout for hiding the toast

    // Define the getSegmentOutcome function here
    const getSegmentOutcome = (rotation) => {
        const outcomes = ['100', '1', '50', '0', '1000', '10', '5', '20'];
        const normalizedRotation = rotation % 360; // Keep rotation within a single circle
        const segmentIndex = Math.floor(normalizedRotation / 45); // Each segment is 45 degrees
        return outcomes[segmentIndex];
    };

    const handleSpin = () => {
        if (isSpinning) return;

        setIsSpinning(true);
        const newValue = Math.ceil(Math.random() * 3600); // Random rotation up to 10 full rotations
        setValue(newValue);
        wheelRef.current.style.transform = `rotate(${newValue}deg)`;

        // Show the outcome after the spin completes (5s spin duration)
        setTimeout(() => {
            const selectedSegment = newValue % 360; // Normalize to one circle
            const outcome = getSegmentOutcome(selectedSegment); // Get outcome based on rotation

            // Update the toast message
            setToastMessage(`You won ${outcome}!`);

            // Clear any previous timeout before setting a new one
            if (toastTimeout.current) clearTimeout(toastTimeout.current);

            // Hide the toast after 3 seconds
            toastTimeout.current = setTimeout(() => {
                setToastMessage('');
            }, 3000);
            
            setIsSpinning(false); // Reset spinning state
        }, 5000);
    };

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.spinBtn} onClick={handleSpin}>
                    Spin
                </div>
                <div className={styles.wheel} ref={wheelRef}>
                    {['100', '1', '50', '0', '1000', '10', '5', '20'].map((value, index) => (
                        <div key={index} className={`${styles.number} ${styles[`design${index + 1}`]}`}>
                            <span>{value}</span>
                        </div>
                    ))}
                </div>
                {toastMessage && <div className={styles.toast}>{toastMessage}</div>}
            </div>
        </div>
    );
};

export default Spin;
 