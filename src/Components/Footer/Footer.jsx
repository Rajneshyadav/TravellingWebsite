import React , {useEffect} from "react";
import './footer.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import video2 from '../../Assets/video4.mp4'
// Importing Icons
import { FiChevronRight, FiSend} from 'react-icons/fi';
import { MdOutlineTravelExplore } from "react-icons/md";
import {FaTripadvisor} from 'react-icons/fa';
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";


const  Footer = () => {

    useEffect( () =>{
        Aos.init({duration:2000})
      }, [])

   return (
            <section className='footer'>

              <div className="videoDiv">
                  <video src={video2}   muted autoPlay loop type="video/
                  mp4"></video>
              </div>
                
          {/* Footer Content */}
            <div className="secContent container">

              {/* Contact Section */}
              <div className="contactDiv flex">
                <div  data-aos ="fade-up" className= "text">
                   <small>KEEP IN TOUCH</small>
                   <h2>Travel with us</h2>
                 </div>
                   
                 <div className="inputDiv flex">
                    <input  data-aos ="fade-right" type="text" placeholder="Enter Email Address" />
                    <button  data-aos ="fade-left" className="btn flex" type="submit">SEND 
                           <FiSend className='icon' />
                    </button>
                  </div>
              </div>
                
              {/* Footer Cards Section */}
                <div className="footerCard flex">

                  {/* Footer Introduction */}
                    <div className ="footerIntro flex">
                        <div className ="logoDiv">
                            <a data-aos ="fade-bottom"  href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon" /> Travel
                            </a>
                        </div>

                        <div  data-aos ="fade-left" className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, omnis eum cum, natus et dolorem aperiam, ea eligendi dolores incidunt necessitatibus totam. Tempore nihil quibusdam sint, deleniti laborum beatae veritatis.
                        </div>
                        <div  data-aos ="fade-right" className="footerSocials flex">
                            <AiOutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                            <FaTripadvisor className="icon"/>
                        </div>
                 </div >
                    
                    {/* Footer Links Section */}
                    <div className="footerLinks  flex">

         {/* Group One */}
                        <div  data-aos ="fade-right" 
                                  data-aos-duration="3000"
                         className="linkGroup">

                            <span className="groupTitle">OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/>
                               Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/>
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/>
                               Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/>
                               Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/>
                               Payment
                            </li>

                        </div>

         {/* Group Two */}
                        <div data-aos ="fade-up" 
                                data-aos-duration="4000"
                         className="linkGroup">

                            <span className="groupTitle">PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/>
                               Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/>
                                RentalCar
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/>
                               HostelWorld
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/>
                               Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/>
                               TripAdvisor
                            </li>

                        </div>

         {/* Group Three */}
                        <div data-aos ="fade-left" 
                                data-aos-duration="5000"
                         className="linkGroup">

                            <span className="groupTitle">LAST TRIP
                            </span>
                            
                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/>
                               London
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/>
                               California
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/>
                                Indonesia
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/>
                               Europe
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight  className="icon"/>
                               Oceania
                            </li>

                        </div>

                    </div>
                    
                    {/* Footer Disclaimer */}
                    <div  className="footerDiv flex">
                        <small >BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVED - RAJNEESH YADAV 2023</small>
                    </div>

                </div>
                </div>
                
            </section>   
    )
}

export default  Footer; 