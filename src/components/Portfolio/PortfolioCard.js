//Components imported from react
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsLink } from "react-icons/bs";

//Imported relevent file
import styles from "./PortfolioCard.module.css";

const PortfolioCard = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const portfolios = [
    {
      img: "/portfolios/Weather_Dashboard.png",
      name: "Weather Dashboard.",
      tech: ["jQuery", "HTML", "JavaScript", "CSS"],
      link: "#",
    },
    {
      img: "/portfolios/Work_Day_Planner.png",
      name: "Work Day Planner",
      tech: ["Javascript", "HTML", "CSS", "MOMENT"],
      link: "#",
    },
    {
      img: "/portfolios/Team-Profile-Generator.PNG",
      name: "Team Profile Generator",
      tech: ["javaScript", "HTML", "CSS"],
      link: "#",
    },
    {
      img: "/portfolios/Coding_Quiz.png",
      name: "Quiz App",
      tech: ["javaScript", "HTML", "CSS"],
      link: "#",
    },
    {
      img: "/portfolios/Bootstrap+Portfolio.PNG",
      name: "Bootstrap Portfolio",
      tech: ["javaScript", "HTML", "CSS"],
      link: "#",
    },
    {
      img: "/portfolios/My_Portfolio.PNG",
      name: "My portfolio",
      tech: [ "HTML", "CSS"],
      link: "#",
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.controls}>
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      </div>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {portfolios.map((card, index) => (
          <div key={index} className={styles.card}>
            <img
              src={process.env.PUBLIC_URL + card.img}
              alt={card.name}
              className={styles.card_img}
            />
            <div className={styles.text_info}>
              <div className={styles.card_header}>
                <h2>{card.name}</h2>
              </div>
              <div className={styles.techContainer}>
                {card.tech.map((item) => (
                  <div className={styles.tech}>{item}</div>
                ))}
              </div>
              <a className={styles.link} href={card.link} target="_blank" rel="noreferrer">
                <BsLink />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default PortfolioCard;