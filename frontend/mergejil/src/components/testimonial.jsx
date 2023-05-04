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
      <div className="backgroundContainerTM">
        <div className="halfContainerTM">
          <div className="textContainerTM">
            <div className="text">
              <span className="firstTextInHalfTM">Testimonial</span>
              <br />
              <span className="secondTextInHalfTM">What Are Students Say</span>
            </div>
          </div>
        </div>
        <div className="secondHalfContainerTM"></div>
        {data.map((e) => {
          const arr = new Array(e.rate).fill(0);
          return (
            <>
              <div className="testimonialsContainerTM">
                <div className="testimonialContainerTM">
                  <div className="headerTM">
                    {arr.map((el) => (
                      <AiFillStar className="starRateTM" />
                    ))}
                  </div>
                  <div className="contentTestimonialsTM">
                    <p className="contentTextTM">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                  <div className="bottomTestimonialsContainerTM">
                    <div className="profileDivTM">
                      <img
                        src={e.image}
                        alt=""
                        className="profileTestimonialsTM"
                      />
                    </div>
                    <div className="infoTestimonialsTM">
                      <span className="nameTestimonialsTM">{e.name}</span>
                      <p className="proffesionTestimonialsTM">{e.proffesion}</p>
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
