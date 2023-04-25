import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import "../styles/instructar.css";
import { BsTwitter, BsInstagram, BsGoogle } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";

function App() {
  const data = [
    {
      name: "fsdafa",
      job: "fdsaf",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3CxZJr15ngtz25di5fjqoYKBW-3pXzWmtA&usqp=CAU",
      des: "fdsafs",
    },
    {
      name: "fsdafa",
      job: "fdsaf",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3CxZJr15ngtz25di5fjqoYKBW-3pXzWmtA&usqp=CAU",
      des: "fdsafs",
    },
    {
      name: "fdsaf",
      job: "fdsafdsa",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3CxZJr15ngtz25di5fjqoYKBW-3pXzWmtA&usqp=CAU",
      des: "fdsafas",
    },
    {
      name: "fdsaf",
      job: "fdsafas",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3CxZJr15ngtz25di5fjqoYKBW-3pXzWmtA&usqp=CAU",
      des: "fdsafas",
    },
    {
      name: "fdsaf",
      job: "fdsafas",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3CxZJr15ngtz25di5fjqoYKBW-3pXzWmtA&usqp=CAU",
      des: "fdsafas",
    },
    {
      name: "fdsaf",
      job: "fdsafas",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3CxZJr15ngtz25di5fjqoYKBW-3pXzWmtA&usqp=CAU",
      des: "fdsafas",
    },
    {
      name: "fdsaf",
      job: "fdsafas",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3CxZJr15ngtz25di5fjqoYKBW-3pXzWmtA&usqp=CAU",
      des: "fdsafas",
    },
    {
      name: "fdsaf",
      job: "fdsafas",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3CxZJr15ngtz25di5fjqoYKBW-3pXzWmtA&usqp=CAU",
      des: "fdsafas",
    },
  ];

  return (
    <>
      <div className="stackContainer">
        <div className="stack" gap={3}>
          {data.map((el) => {
            return (
              <Card style={{ width: "18rem", display: "flex" }}>
                <div className="imgContainer">
                  <Card.Img variant="top" src={el.image} className="img" />
                  <span>
                    <BsGoogle />
                    <BsInstagram />
                    <BsTwitter />
                    <GrFacebookOption />
                  </span>
                </div>
                <Card.Body>
                  <Card.Title> {el.name}</Card.Title>
                  <Card.Title className="job">{el.job}</Card.Title>
                  <Card.Text className="des">{el.des}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="pagination">
        <Pagination count={5} variant="outlined" color="primary" />
      </div>
    </>
  );
}

export default App;
