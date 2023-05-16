import "../styles/coursePage.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Navbar from "../components/navbar";
import HomeInformation from "../components/homeInformation";
import Testimonial from "../components/testimonial";
import HomeAboutUs from "../components/homeAboutUs";
import Footer from "../components/Footer";
import axios from 'axios'
function App() {
  const [data, setData] = useState([])
  const params = useParams()
  const getData = async () => {
    const res = await axios.get("http://localhost:6969/mergejil");
    setData(res.data.data)
    console.log(res.data.data, "ahah")
  };

  useEffect(() => {
    getData();
  }, []);
  // const data = [
  //   {
  //     name: "ЭРЭЛТТЭЙ",
  //     job: "Software",
  //     image: "https://themewagon.github.io/studylab/images/work-1.jpg",
  //     des: "Мэдээллийн технологи",
  //     price: "100",
  //   },
  //   {
  //     name: "ЭРЭЛТТЭЙ",
  //     job: "Software",
  //     image: "https://themewagon.github.io/studylab/images/work-1.jpg",
  //     des: "Байгаль орчин, ногоон хөгжил",
  //     price: "100",
  //   },
  //   {
  //     name: "ЭРЭЛТТЭЙ",
  //     job: "Software",
  //     image: "https://themewagon.github.io/studylab/images/work-1.jpg",
  //     des: "Боловсрол",
  //     price: "100",
  //   },
  //   {
  //     name: "ЭРЭЛТТЭЙ",
  //     job: "Software",
  //     image: "https://themewagon.github.io/studylab/images/work-1.jpg",
  //     des: "Соёл",
  //     price: "100",
  //   },
  //   {
  //     name: "ЭРЭЛТТЭЙ",
  //     job: "Software",
  //     image: "https://themewagon.github.io/studylab/images/work-1.jpg",
  //     des: "Эрүүл мэнд",
  //     price: "100",
  //   },
  //   {
  //     name: "ЭРЭЛТТЭЙ",
  //     job: "Software",
  //     image: "https://themewagon.github.io/studylab/images/work-1.jpg",
  //     des: "Уул уурхай",
  //     price: "100",
  //   },
  //   {
  //     name: "ЭРЭЛТТЭЙ",
  //     job: "Software",
  //     image: "https://themewagon.github.io/studylab/images/work-1.jpg",
  //     des: "Хөдөө аж ахуй",
  //     price: "100",
  //   },
  //   {
  //     name: "ЭРЭЛТТЭЙ",
  //     job: "Software",
  //     image: "https://themewagon.github.io/studylab/images/work-1.jpg",
  //     des: "Эрчим хүч дэд бүтэц",
  //     price: "100",
  //   },
  // ];

  return (
    <>

      {/* <div className="aboutUsPageHeaderContainer">
        <Navbar />
        <div className="overlayAboutUsPageHeader"></div>
        <div className="aboutUsPageHeaderContent">
          <div className="aboutUsPageHeaderContentTop">
            <p className="aboutUsPageHeaderContentTopText">
              Home 〉 Course 〉
            </p>
          </div>
          <div className="aboutUsPageHeaderContentBottom">
            <p className="aboutUsPageHeaderContentBottomText">Course</p>
          </div>
        </div>
      </div>
      <div>
         */}
      <div className="big">
        <div className="bigBox">
          <div className="bigBoxTwo">
            {data.map((el) => {
              window.localStorage.setItem("id", JSON.stringify(el.id));
              return (
                <Link to={el._id}>
                  <Card sx={{ width: 380 }} >
                    <CardMedia
                      sx={{ height: 250, position: "relative" }}
                      image={el.image}
                    >
                      <div className="price"> {el.type}</div>
                    </CardMedia>
                    <CardContent>
                      <Typography variant="h5">{el.mergejilNer}</Typography>
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          marginTop: "12px",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          variant="body2"
                          style={{ display: "flex", color: "gray" }}
                        >
                          ЭРЭЛТТЭЙ ЭСЭХ:
                          <Typography variant="body2" color="primary">
                            {el.erelt}
                          </Typography>
                        </Typography>
                        <Typography
                          variant="body1"
                          style={{ display: "flex", color: "gray" }}
                        >
                          Мэргэжлийн тоо:
                          <Typography variant="body1" color="primary">
                            {el.mergejilToo}
                          </Typography>
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
          <div className="pagination">
            <Pagination count={5} variant="outlined" color="primary" />
          </div>
        </div>
      </div>
      {/* </div> 
       <div className="HomeInformationAboutUsPage">
        <HomeInformation />
      </div>
      <div className="TestimonialsAboutUsPage">
        <Testimonial />
      </div>
      <div className="homeAboutUsAboutUsPage">
        <HomeAboutUs />
      </div> 
      <Footer /> */}
    </>

  );
}

export default App;