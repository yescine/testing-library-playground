import React from "react";
import Card, { Props as CardProps } from "../Card";
import "./Cards.css";

export interface Props {
  cats: CardProps[];
}

const Cards = (props: Props) => {
  return (
    <div className="pet-card-container">
      {props.cats.map((cat, idx) => (
        <Card {...cat} key={idx} />
      ))}
    </div>
  );
};

export default Cards;
