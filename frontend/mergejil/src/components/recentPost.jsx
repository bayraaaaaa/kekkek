import React from "react";
import "../styles/recentPost.css";
import { AiOutlineCalendar } from "react-icons/ai";
function recentPost() {
  const data = [
    {
      date: "SEPT.17.2020",
      role: "ADMIN",
      comments: "3",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
      title: "I'm not creative, Should I take this course?",
      image: "https://themewagon.github.io/studylab/images/image_1.jpg",
    },
    {
      date: "SEPT.17.2020",
      role: "ADMIN",
      comments: "3",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
      title: "I'm not creative, Should I take this course?",
      image: "https://themewagon.github.io/studylab/images/image_1.jpg",
    },
    {
      date: "SEPT.17.2020",
      role: "ADMIN",
      comments: "3",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
      title: "I'm not creative, Should I take this course?",
      image: "https://themewagon.github.io/studylab/images/image_1.jpg",
    },
  ];
  return (
    <>
      <div className="containerRecent">
        <div className="containerShits">
          <div className="BlogRecentPost">
            <p className="BlogRecentPostText">OUR BLOG</p>
          </div>
          <div className="RecentPostTag">
            <p className="RecentPostTagText">Recent Post</p>
          </div>
          <div className="recentPostContainer">
            {data.map((e) => {
              return <></>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default recentPost;
