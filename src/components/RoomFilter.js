import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
import "./RoomFilter.css";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

function RoomFilter({ rooms }) {
  const roomFilter = useContext(RoomContext);

  const {
    type,
    capacity,
    handleChange,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = roomFilter;

  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="roomFilter">
      <Title title="search rooms" />
      <form className="roomFilter__form">
        <div className="roomFilter__formGroup">
          <label htmlFor="type" id="">
            room type
          </label>
          <select
            name="type"
            id="type"
            value={type}
            className="roomFilter__formControl"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        <div className="roomFilter__formGroup">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="roomFilter__formControl"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        <div className="roomFilter__formGroup">
          <label htmlFor="price">room price ${price}</label>
          <div className="roomFilter__price">
            <input
              name="price"
              id="price"
              value={price}
              type="range"
              min={minPrice}
              max={maxPrice}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="roomFilter__formGroup">
          <label htmlFor="size">room size </label>
          <div className="roomFilter__size">
            <input
              name="minSize"
              id="size"
              value={minSize}
              type="number"
              onChange={handleChange}
              className="roomFilter__minsize"
            />
            <input
              name="maxSize"
              id="size"
              value={maxSize}
              type="number"
              onChange={handleChange}
              className="roomFilter__maxsize"
            />
          </div>
        </div>
        <div className="roomFilter__formGroup">
          <div className="roomFilter__single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
        </div>
        <div className="roomFilter__formGroup">
          <div className="roomFilter__single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}

export default RoomFilter;
