import React from 'react';
import styles from './About.module.css'


const About = () => {
    return (
        <div className={`main-container pb-20 ${styles.textStyle}`}>
            <div className={`${styles.termsBanner}`}>
                <h1 className="text-[1.5rem] md:text-[2.5rem] pt-[5rem] pb-[3rem] font-bold text-black mx-3 md:mx-0">About Us</h1>
                <span>(Dev: Arko, Date: 1-4-2023, Responsive: Arko)</span>
            </div>
            <div className="my-12 mx-3 md:mx-0">
                <h2 className="font-semibold mb-[24px] text-[2.25rem]">Who are we?</h2>
                <p className="leading-6 mb-[14px]">{"Sharetrip is the country's first and leading online travel aggregator. Initially starting as Travel Booking BD, we dreamt of making travel easier for people of all ages. And that is what we have done since our inception. And now, with our new, innovative, easy to use Android and iOS mobile app, travel services are within your fingertips. The dynamic app lets you book your flight, hotel room and even find your perfect holiday from our thousands of holiday packages around the globe."}</p>
                <p className="leading-6 mb-[14px]">{"Sharetrip is revolutionising the way you book travel services. With Sharetrip's website and mobile app, booking your flight, hotel, or holiday becomes more fun than you would think. With exciting games and real rewards like free trips and air tickets, Sharetrip App is more fun to use! You can also win TripCoin by playing games or booking a service from Sharetrip, which you can use to avail yourself of the discount."}</p>
                <p className="leading-6 mb-[14px]">{"We have more than 150 employees, all experts in their respective fields. They have the experience and professionalism to understand your travel needs and fulfil them effortlessly within a short time. In today's era of digitalisation, everyone has a lot of information and endless choices. Our clients still prefer us as we provide the best flight rates, exclusive hotel deals and a wide range of options for your accommodations and travel plans."}</p>
            </div>
        </div>
    );
};

export default About;