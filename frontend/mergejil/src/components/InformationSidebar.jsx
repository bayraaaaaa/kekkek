import React from "react";
import "../styles/informationSidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

function InformationSidebar() {
  const infoSideBarData = [
    {
      title: "Course Category",
      field: [
        "Design & Illustration",
        "Web Development",
        "Programming",
        "Music & Entertainment",
        "Photography",
        "Health & Fitness",
      ],
    },
    {
      title: "Course Instructor",
      field: [
        " Ronald Jackson",
        "John Dee",
        "Nathan Messy",
        "Tony Griffin",
        "Ben Howard",
        "Harry Potter",
      ],
    },
    {
      title: "Course Type",
      field: ["Basic", "Intermediate", "Advenced"],
    },
    {
      title: "Software",
      field: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Sketch",
        "WordPress",
        "HTML & CSS",
      ],
    },
  ];
  return (
    <>
      <div className="informationSidebarContainer">
        <div className="infoSearch">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Search..." />
          </Form.Group>
        </div>
        {infoSideBarData.map((e) => {
          return (
            <div className="infoSidebarMain">
              <div className="infoMainHeader">
                <div className="infoTitle">{e.title}</div>
              </div>
              <div className="infoMainTextContainer">
                {e.field &&
                  e.field.map((el) => {
                    return (
                      <div style={{ display: "flex", gap: "10px" }}>
                        <Form.Check aria-label="option 1" />
                        <div className="infoText">{el}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default InformationSidebar;
