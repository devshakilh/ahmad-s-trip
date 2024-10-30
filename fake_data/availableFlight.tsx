import { TiWeatherPartlySunny, TiWeatherSunny, TiWeatherShower, TiWeatherNight } from 'react-icons/ti';
import { FaEarlybirds } from 'react-icons/fa';
import { BsBoxes, BsBatteryCharging } from 'react-icons/bs';
import cart1 from '../assets/packages/RightCart1.png'
import cart2 from '../assets/packages/RightCart2.png'
import qr from "../assets/packages/QR.png";
import ey from "../assets/packages/EY.png";
import airline from "../assets/packages/Airline3.png";

export const availableFlight = [
    {
        id: 's1',
        title: "Departure Time",
        time: [
            {
                id: 1,
                title: "00:00 - 05:59",
                icon: <TiWeatherPartlySunny />
            },
            {
                id: 2,
                title: "06:00 - 11:59",
                icon: <TiWeatherSunny />
            },
            {
                id: 3,
                title: "12:00 - 17:59",
                icon: <TiWeatherShower />
            },
            {
                id: 4,
                title: "18:00 - 23:59",
                icon: <TiWeatherNight />
            },
        ]
    },
    {
        
        id: 's2',
        title: "Arrival Time",
        time: [
            {
                id: 1,
                title: "00:00 - 05:59",
                icon: <TiWeatherPartlySunny />
            },
            {
                id: 2,
                title: "06:00 - 11:59",
                icon: <TiWeatherSunny />
            },
            {
                id: 3,
                title: "12:00 - 17:59",
                icon: <TiWeatherShower />
            },
            {
                id: 4,
                title: "18:00 - 23:59",
                icon: <TiWeatherNight />
            },
        ]
    },
]

export const availableOption = [
    {
        id: 's1',
        title: "Number of Stops",
        options: [
            {
                id: 1,
                title: "1 Stop"
            },
            {
                id: 1,
                title: "Direct"
            },
        ]
    },
    {
        id: 's2',
        title: "Airlines",
        options: [
            {
                id: 1,
                title: "Emirates (3)"
            }
        ]
    },
    {
        id: 's3',
        title: "Layover",
        options: [
            {
                id: 1,
                title: "Dubai International Airport"
            }
        ]
    },
    {
        id: 's4',
        title: "Weights",
        options: [
            {
                id: 1,
                title: "50 KG"
            }
        ]
    },
    {
        id: 's5',
        title: "Refundable",
        options: [
            {
                id: 1,
                title: "Non Refundable"
            },
            {
                id: 2,
                title: "Partially Refundable"
            },
            {
                id: 3,
                title: "Rules Wise"
            }
        ]
    },
]

export const flights = [
    {
        id: "s1",
        icon: <FaEarlybirds />,
        title: "Earliest Flights"
    },
    {
        id: "s2",
        icon: <BsBoxes />,
        title: "Cheapest Flights"
    },
    {
        id: "s3",
        icon: <BsBatteryCharging />,
        title: "Fastest Flights"
    },
]

export const flightCart = [
    {
        id: 's1',
        image1: cart1,
        titleName1: "DAC",
        titleDate1: "01:40",
        extra1: "",
        place1: "Hazrat Shahjalal Internati...",
        time1: "22nd May 2023",
        image2: cart2,
        titleName2: "KUL",
        titleDate2: "21:50",
        extra2: "1 Stop(S)",
        place2: "Kuala Lumpur International...",
        time2: "22nd May 2023",
        performance: "Preferred Airlines",
        refundable: "Partially Refundable",
        newTaka: "677,856",
        oldTaka: "732,077",
        rupee: "14,459",
        showMoreInfo: [
            {
                id: 1,
                serviceId: "Emirates   EK585",
                serviceName: "BOEING 777-300ER - 77W First-F (A)",
                titleName1: "DAC",
                titleDate1: "01:40",
                place1: "Hazrat Shahjalal Internati...",
                time1: "22nd May 2023",
                titleName2: "DAC",
                titleDate2: "01:40",
                place2: "Hazrat Shahjalal Internati...",
                time2: "22nd May 2023",
                serviceId2: "Emirates   EK585",
                serviceName2: "BOEING 777-300ER - 77W First-F (A)",
                titleName3: "DAC",
                titleDate3: "01:40",
                place3: "Hazrat Shahjalal Internati...",
                time3: "22nd May 2023",
                titleName4: "DAC",
                titleDate4: "01:40",
                place4: "Hazrat Shahjalal Internati...",
                time4: "22nd May 2023",
            }

        ]
    },
    {
        id: 's2',
        titleName1: "DAC",
        titleDate1: "01:40",
        extra1: "",
        place1: "Hazrat Shahjalal Internati...",
        time1: "22nd May 2023",
        titleName2: "KUL",
        titleDate2: "21:50",
        extra2: "1 Stop(S)",
        place2: "Kuala Lumpur International...",
        time2: "22nd May 2023",
        performance: "Preferred Airlines",
        refundable: "Partially Refundable",
        newTaka: "677,856",
        oldTaka: "732,077",
        rupee: "14,459",
        showMoreInfo: [
            {
                id: 1,
                serviceId: "Emirates   EK585",
                serviceName: "BOEING 777-300ER - 77W First-F (A)",
                titleName1: "DAC",
                titleDate1: "01:40",
                place1: "Hazrat Shahjalal Internati...",
                time1: "22nd May 2023",
                titleName2: "DAC",
                titleDate2: "01:40",
                place2: "Hazrat Shahjalal Internati...",
                time2: "22nd May 2023",
                serviceId2: "Emirates   EK585",
                serviceName2: "BOEING 777-300ER - 77W First-F (A)",
                titleName3: "DAC",
                titleDate3: "01:40",
                place3: "Hazrat Shahjalal Internati...",
                time3: "22nd May 2023",
                titleName4: "DAC",
                titleDate4: "01:40",
                place4: "Hazrat Shahjalal Internati...",
                time4: "22nd May 2023",
            }

        ]
    }
]

export const refundBaggage = [
    {
        id: 's1',
        description: [
            {
                id: 1,
                title: "Refunds and Date Changes are done as per the following policies."
            },
            {
                id: 2,
                title: "Refund Amount= Paid Amount – (Airline’s Cancellation Fee + ST Service Fee)."
            },
            {
                id: 3,
                title: "Date Change Amount= Airline’s Date Change Fee + Fare Difference + ST Service Fee."
            },
            {
                id: 4,
                title: "*ST Convenience fee is non-refundable."
            },
            {
                id: 5,
                title: "*Sharetrip does not guarantee the accuracy of refund/date change fees."
            },
            {
                id: 6,
                title: "*The airline refund/date change fee is an estimation and can be changed without any prior notice by the airlines."
            },
        ],
        baggageInfo : [
            {
                id: 1,
                place1: "DAC-DXB",
                place2: "DXB-KUL",
                kg1: "50KG",
                kg2: "50KG"
            }
        ]
    }
]

export const availableSlider = [
    {
        id: 's1',
        image: qr,
        title: "QR",
        flights: "4"
    },
    {
        id: 's2',
        image: ey,
        title: "EY",
        flights: "1"
    },
    {
        id: 's3',
        title: "EK",
        image: airline,
        flights: "5"
    },
    {
        id: 's4',
        image: qr,
        title: "EY",
        flights: "4"
    },
]
