import React, { useEffect } from "react";
// Importing Icons
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { SiTripadvisor } from 'react-icons/si'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'

import "./home.css";
import Aos from 'aos';
import 'aos/dist/aos.css'
import Video from "../../Assets/Video3.mp4";

const Home = () => {

    // REACT hook for Scrolling animation
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={Video} muted autoPlay loop typeof="video/mp4"></video>

            <div className="homeContent container">
                {/* Text Content */}
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">Our Packages</span>
                    <h1 data-aos="fade-up" className="homeTitle">Search your Holidays</h1>
                </div>

                {/* Search Card */}
                <div data-aos="fade-up" className="cardDiv grid">
                    {/* Destination Input */}
                    <div className="destinationInput">
                        <label htmlFor="city">Search your Destination: </label>
                        <input type="text" placeholder="Enter Name Here" />
                        <GrLocation className="icon" />
                    </div>

                    {/* Date Input */}
                    <div className="dateInput">
                        <label htmlFor="date">Select your date: </label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    {/* Price Input */}
                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="city"> Max Price: </label>
                            <h3 className="total">$5000</h3>
                        </div>

                        <div className="input flex">
                            <input type="range" max="5000" min="1000" />
                        </div>
                    </div>

                    {/* Search Options */}
                    <div className="searchOptions flex">
                        <HiFilter className="icon" />
                        <span> MORE FILTERS</span>
                    </div>
                </div>

                {/* Home Footer Icons */}
                <div data-aos="fade-up" className="homeFooterIcons flex">

                    {/* Right Side Icons */}
                    <div className="rightIcons">
                        <FiFacebook className="icon" />
                        <AiOutlineInstagram className="icon" />
                        <SiTripadvisor className="icon" />
                    </div>

                    {/* Left Side Icons */}
                    <div className="leftIcons">
                        <BsListTask className="icon" />
                        <TbApps className="icon" />
                    </div>
                </div>
            </div>
            {/* Home section Finished */}
        </section>
    );
};

export default Home;
