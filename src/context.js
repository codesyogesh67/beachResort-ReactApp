import React, { useState, createContext, useEffect } from "react";
import Client from "./Contentful";

export const RoomContext = createContext();

export const RoomProvider = (props) => {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: false,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });

  const { type, capacity, price, minSize, maxSize, breakfast, pets } = state;

  const getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResort",
        order: "sys.createdAt",
      });

      let rooms = formatedData(response.items);

      let featuredRooms = rooms.filter((room) => room.featured === true);

      let maxPrice = Math.max(...rooms.map((item) => item.price));
      let maximumSize = Math.max(...rooms.map((item) => item.size));
      setState({
        ...state,
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        price: maxPrice,
        loading: false,
        maxPrice,
        maxSize: maximumSize,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    filteredRooms();
  }, [type, capacity, price, minSize, maxSize, breakfast, pets]);

  const filteredRooms = () => {
    let { type, capacity, price, minSize, maxSize, rooms } = state;
    let tempRooms = [...rooms];

    capacity = parseInt(capacity);

    //filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
      setState({ ...state, sortedRooms: tempRooms });
    }

    //filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
      setState({ ...state, sortedRooms: tempRooms });
    }

    //filter by price
    if (price > 0) {
      tempRooms = tempRooms.filter((room) => room.price <= price);
      setState({ ...state, sortedRooms: tempRooms });
    }

    //filter by size
    if (minSize) {
      tempRooms = tempRooms.filter(
        (room) => room.size >= minSize && room.size <= maxSize
      );
      setState({ ...state, sortedRooms: tempRooms });
    }

    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
      setState({ ...state, sortedRooms: tempRooms });
    }

    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
      setState({ ...state, sortedRooms: tempRooms });
    }
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    setState({ ...state, [name]: value });
  };

  const formatedData = (items) => {
    let tempData = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempData;
  };

  const getRoom = (slug) => {
    let tempRooms = state.rooms;
    const room = tempRooms?.find((room) => room.slug === slug);
    return room;
  };

  return (
    <RoomContext.Provider
      value={{
        ...state,
        handleChange: handleChange,
        // filterRooms,
        getRoom: getRoom,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
};

export const RoomConsumer = RoomContext.Consumer;

export const withRoomConsumer = (Component) => {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
};
