// Importing necessary libraries, styles, and images
import React ,{useEffect} from "react";
import "./main.css";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";
import img from "../../Assets/images/img.jpeg";
import img2 from "../../Assets/images/img2.jpg";
import img3 from "../../Assets/images/img3.jpeg";
import img4 from "../../Assets/images/img4.jpeg";
import img5 from "../../Assets/images/img5.jpeg";
import img6 from "../../Assets/images/img6.jpeg";
import img7 from "../../Assets/images/img7.jpeg";
import img8 from "../../Assets/images/img8.jpeg";
import img9 from "../../Assets/images/img9.jpeg";
 
  
 // Card Data
const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best traveldestinations in the World. This place is known for its luxurious stays and adventurous activities.",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.",
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX ",
    fees: "$700",
    description:
      "One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place",
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX ",
    fees: "$800",
    description:
      "According to the World Tourism Ranking, 45 Million peoplevisit Turkey each year, and from that about 2 Million come to visitCappadocia. This place is known for its luxurious stays and adventurousactivities",
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX ",
    fees: "$1100",
    description:
      "A city in central Mexico, Guanajuato is known for its history ofsilver mining and colonial architecture. The houses in the city are veryattractively painted with the most bright colors available. Always welcome.",
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX ",
    fees: "$840",
    description:
      "The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food! ",
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "$790",
    description:
      "Angkot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$990",
    description:
      "Angkot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$790",
    description:
      "Angkot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities",
  },
];
 
// Main Component
const Main = () => {
 // Initialize AOS library on component mount
  useEffect( () =>{
    Aos.init({duration:2000})
  }, [])  
  
  return (
    <section className="main container section">
      {/* Section Title */}
      <div className="secTitle">
        <h3  data-aos ="fade-right" className="title">Most Visttied Destinations</h3>
      </div>

{/* CARD Deatails */}
      <div className="setContent grid">
        {/*Here it will  Return one by one Card  */}
        {

        Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {

            return (
              <div  data-aos ="fade-up"  key={id} className="singleDestination">
              {/* Card Image */}
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

               {/*Card Information  */}
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                   </span>

                    {/* Grade and Price  */}
                  <div className="fees flex">
                    <div className="grade">
                      <span> {grade} <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>
                   {/* Button */}
                  <button className="btn flex">
                    DEATAILS <HiOutlineClipboardCheck className="icon"/>
                     </button>
                </div>
              </div>
            );

          }
        )}
        
  {/*Ended Card Function  */}
      </div>
    </section>
  );
};

export default Main;
