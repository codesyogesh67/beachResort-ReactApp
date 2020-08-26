import React, { useContext } from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { RoomContext } from "../context";
import Loading from "./Loading";
import { withRoomConsumer } from "../context";

function RoomsContainer() {
  const value = useContext(RoomContext);
  const { loading, sortedRooms, rooms } = value;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}
export default RoomsContainer;

// function RoomsContainer({ context }) {
//   const { loading, sortedRooms, rooms } = context;
//   if (loading) {
//     return <Loading />;
//   }
//   return (
//     <div>
//       <RoomFilter rooms={rooms} />
//       <RoomList rooms={sortedRooms} />
//     </div>
//   );
// }

// export default withRoomConsumer(RoomsContainer);
