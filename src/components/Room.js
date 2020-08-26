import React from "react";
import "./FeaturedRooms.css";
import defaultImg from "../images/room-1.jpg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Room({ room }) {
  const { name, price, slug, images } = room;

  return (
    <article className="room">
      <div className="room__imageContainer">
        <img
          className="room__image"
          src={images[0] || defaultImg}
          alt="single room"
        />
        <div className="room__price">
          <p>$ {price} </p> <span>per night</span>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room__link">
          features
        </Link>
        <p className="room__name">{name}</p>
      </div>
    </article>
  );
}

export default Room;

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
