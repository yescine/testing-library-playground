import React from "react";

export interface Props {
  name: string;
  email: string;
  image: { url: string; alt?: string };
  phone: string;
  isFavorite: boolean;
}

const Card = (props: Props) => {
  const { email, name, phone } = props;
  return (
    <div className="card">
      <div className="card-header">
        <img src={props.image.url} alt={props.image.alt} className="card-img" />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
