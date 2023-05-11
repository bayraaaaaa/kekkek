import "../styles/coursePage.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import {useState, useEffect} from "react"
import axios from 'axios'
function App() {
  const [data, setData] = useState([])
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
    <div className="big">
      <div className="bigBox">
        <div className="bigBoxTwo">
          {data.map((el) => {
            return (
              <Card sx={{ width: 380 }}>
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
            );
          })}
        </div>
        <div className="pagination">
          <Pagination count={5} variant="outlined" color="primary" />
        </div>
      </div>
    </div>
  );
}

export default App;