import React, { useContext } from "react";

import { Context } from "../../context/Context";

import Follower from "../Follower/Follower";

import "./Followers.scss";
import pic1 from "../static/img/1.png";
import pic3 from "../static/img/3.png";
import pic2 from "../static/img/2.png";
import pic5 from "../static/img/5.png";
import pic4 from "../static/img/4.png";
import pic7 from "../static/img/7.png";
import pic6 from "../static/img/6.png";
import pic9 from "../static/img/9.png";
const Followers = () => {
  //  const { followers } = useContext(Context);
  let followers = [
    { name: "Jone dew", img: pic1, rol: "Iraq" },
    { name: "Ali", img: pic2, rol: "USA" },
    { name: "Ranni", img: pic3, rol: "UK" },
    { name: "Ahmed", img: pic4, rol: "Eygpt" },
    { name: "Mhommed ", img: pic5, rol: "UEA" },
    { name: "Ammar", img: pic6, rol: "UK" },
  ];

  if (!followers.length) {
    return (
      <article className="card card--center">
        <h4 className="card__title">No followers</h4>
      </article>
    );
  }
  return (
    <article className="followers card">
      <p
        style={{
          marginBottom: "10px",
          textAlign: "center",
          fontWeight: "bold",
          color: "#767676",
          fontSize: "20px",
        }}>
        {" "}
        Active Users
      </p>{" "}
      <ul className="followers__list">
        {followers.map((x) => {
          return (
            <Follower
              key={x.name}
              link={x.rol}
              image={x.img}
              username={x.name}
            />
          );
        })}
      </ul>
    </article>
  );
};

export default Followers;
