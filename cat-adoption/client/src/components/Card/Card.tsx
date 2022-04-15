import React, { useState } from "react";
import heartFilled from "../../svgs/heartFilled.svg";
import heartOutlined from "../../svgs/heartOutlined.svg";
import './Card.css';

export interface Props {
  name: string;
  email: string;
  image: { url: string; alt?: string };
  phone: string;
  isFavorite: boolean;
}

const Card = (props: Props) => {
  const { email, name, phone, isFavorite } = props;
  const [isFavoured, setIsFavoured] = useState(isFavorite);

  const toggleFavoured = () => {
    setIsFavoured(!isFavoured);
  };

  return (
    <div className="card">
      <div className="card-header">
        <img src={props.image.url} alt={props.image.alt} className="card-img" />
      </div>
      <button onClick={toggleFavoured} className="heart">
        {isFavoured ? (
          <img src={heartFilled} alt="filled heart"></img>
        ) : (
          <img src={heartOutlined} alt="outlined heart"></img>
        )}
      </button>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
