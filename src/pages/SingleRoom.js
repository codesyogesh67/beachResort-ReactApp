import React, { useContext, useState } from "react";
import defaultBcg from "../images/room-1.jpg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import "./SingleRoom.css";
import StyledHero from "../components/StyledHero";

function SingleRoom(props) {
  const slug = props.match.params.slug;
  const defaultImage = useState(defaultBcg);
  const { getRoom } = useContext(RoomContext);

  const room = getRoom(slug);

  if (!room) {
    return (
      <div className="singleRoom">
        <h3>No such room could be found.</h3>
        <div>Back to Rooms....</div>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;

  const [mainImg, ...defaultImg] = images;

  return (
    <>
      <StyledHero img={mainImg || defaultImage}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="singleRoom">
        <div className="singleRoom__images">
          {defaultImg.map((item, index) => (
            <img key={index} src={item} alt={name} />
          ))}
        </div>
        <div className="singleRoom__roominfo">
          <article className="singleRoom__article">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="singleRoom__info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} SQFT</h6>
            <h6>
              max capacity :{" "}
              {capacity > 1 ? ` ${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="singleRoom__room-extras">
        <h6>extras</h6>
        <ul className="singleRoom__extras">
          {extras.map((item, index) => {
            return <li key={index}>- {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
}

export default SingleRoom;
