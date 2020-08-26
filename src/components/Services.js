import React, { useState } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
import "./Services.css";

function Services() {
  const [services] = useState([
    {
      icon: <FaCocktail />,
      title: "Free Cocktails",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info:
        "Lorem ipsum, dolor sit \
          amet consectetur adipisicing elit.\
            Alias molestias eius libero?",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      info:
        "Lorem ipsum, dolor sit \
          amet consectetur adipisicing elit.\
            Alias molestias eius libero?",
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beer",
      info:
        "Lorem ipsum, dolor sit \
          amet consectetur adipisicing elit.\
            Alias molestias eius libero?",
    },
  ]);

  return (
    <section className="services">
      <Title className="services__title" title="services" />
      <div className="services__group">
        {services.map((item, index) => {
          return (
            <article key={index}>
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
