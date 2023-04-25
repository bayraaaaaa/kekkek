import React, { useState } from "react";
import "../styles/testimonial.css";
import { AiFillStar } from "react-icons/ai";
function testimonial() {
  const data = [
    {
      rate: 5,
      image: "https://themewagon.github.io/studylab/images/person_1.jpg",
      name: "Roger scott",
      proffesion: "Marketing Manager",
    },
    {
      rate: 5,
      image: "https://themewagon.github.io/studylab/images/person_1.jpg",
      name: "Roger scott",
      proffesion: "Marketing Manager",
    },
    {
      rate: 5,
      image: "https://themewagon.github.io/studylab/images/person_1.jpg",
      name: "Roger scott",
      proffesion: "Marketing Manager",
    },
    {
      rate: 5,
      image: "https://themewagon.github.io/studylab/images/person_1.jpg",
      name: "Roger scott",
      proffesion: "Marketing Manager",
    },
  ];
  return (
    <>
      <div className="backgroundContainer">
        <div className="halfContainer">
          <div className="textContainer">
            <div className="text">
              <span className="firstTextInHalf">Testimonial</span>
              <br />
              <span className="secondTextInHalf">What Are Students Say</span>
            </div>
          </div>
        </div>
        <div className="secondHalfContainer"></div>
        {data.map((e) => {
          const arr = new Array(e.rate).fill(0);
          return (
            <>
              <div className="testimonialsContainer">
                <div className="testimonialContainer">
                  <div className="header">
                    {arr.map((el) => (
                      <AiFillStar className="starRate" />
                    ))}
                  </div>
                  <div className="contentTestimonials">
                    <p className="contentText">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                  <div className="bottomTestimonialsContainer">
                    <div className="profileDiv">
                      <img
                        src={e.image}
                        alt=""
                        className="profileTestimonials"
                      />
                    </div>
                    <div className="infoTestimonials">
                      <span className="nameTestimonials">{e.name}</span>
                      <p className="proffesionTestimonials">{e.proffesion}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default testimonial;
