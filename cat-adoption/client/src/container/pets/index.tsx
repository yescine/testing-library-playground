import React, { useState, useEffect } from "react";
import Cards from "../../components/Cards";
import Filter from "../../components/filter";
import axios from "axios";

interface Props {}

const Pets = (props: Props) => {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);

  const fetchCats = async () => {
    const response = await axios.get("http://localhost:4000/cats");
    setCats(response.data);
    setFilteredCats(response.data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div>
      <Filter />
      <Cards cats={cats} />
    </div>
  );
};

export default Pets;
