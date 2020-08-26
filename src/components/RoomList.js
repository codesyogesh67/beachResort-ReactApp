import React from "react";
import Room from "./Room";
import "./RoomList.css";

function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="roomList__empty">
        <h3> Unfortunately no rooms matched your search.</h3>
      </div>
    );
  }
  return (
    <section className="roomList">
      <div className="roomList__center">
        {rooms.map((room) => {
          return <Room key={room.id} room={room} />;
        })}
      </div>
    </section>
  );
}

export default RoomList;
