import React from "react";
import "../styles/section.css";
function Section() {
  const objects = [
    {
      title: "IT & Software",
      instructor: "52",
      image:
        "https://www.netsolutions.com/insights/wp-content/uploads/2022/02/future-trends-in-software-development-in-2022.webp",
    },
    {
      title: "Marketing",
      instructor: "52",
      image:
        "https://www.faaoffice.com/wp-content/uploads/2021/05/Marketing.jpg",
    },
    {
      title: "Dentist",
      instructor: "52",
      image:
        "https://img.freepik.com/premium-vector/dentist-doctor-examining-patient_42515-317.jpg",
    },
    {
      title: "Physician",
      instructor: "52",
      image:
        "https://resources.nejmcareercenter.org/wp-content/uploads/PhhysicianEmploymentBenefitsSeeSomeShifts.jpg",
    },
    {
      title: "Surgeon",
      instructor: "52",
      image:
        "https://media.istockphoto.com/id/1226588537/vector/a-group-of-doctors-listens-to-the-heart-examination-diagnosis-and-treatment-of.jpg?s=612x612&w=0&k=20&c=pFvhg_pMqLGr9aJV41ueCdBBwDRFyDcuYKwW-gO3qsw=",
    },
    {
      title: "Analyst",
      instructor: "52",
      image:
        "https://filmdaily.co/wp-content/uploads/2021/12/dataanalyst-lede.jpg",
    },
  ];
  return (
    <>
      <div className="sectionContainer">
        <div className="itemContainer">
          <div className="itemHeaderTextContainer">
            <div className="itemHeaderTextOneContainer">
              {" "}
              <p className="itemHeaderTextOne">START STUDYING TODAY</p>
            </div>

            <div className="itemHeaderTextTwoContainer">
              {" "}
              <p className="itemHeaderTextTwo">
                View Categories Of Occupations
              </p>
            </div>
          </div>
        </div>
        <div className="categoryContainer">
          <div className="category">
            {objects.map((e) => {
              return (
                <div
                  className="occcupation"
                  style={{ backgroundImage: `url("${e.image}")` }}
                >
                  <p className="text">{e.title}</p>
                </div>
              );
            })}
          </div>
          <div className="buttonContainer">
            <button className="button">See All Occupations</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
