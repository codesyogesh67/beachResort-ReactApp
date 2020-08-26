import React, { useContext } from "react";
import { RoomContext } from "../context";
import "./FeaturedRooms.css";
import Room from "./Room";
import Title from "./Title";

function FeaturedRooms() {
  const { featuredRooms } = useContext(RoomContext);
  const rooms = featuredRooms;

  const featureRooms = rooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });

  return (
    <section className="featuredRooms">
      <Title title="featured rooms" />
      <div />
      <div className="featuredRooms__card">{featureRooms}</div>
    </section>
  );
}

export default FeaturedRooms;
