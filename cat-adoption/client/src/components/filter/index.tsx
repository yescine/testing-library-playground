import React from "react";

export interface Props {}

const Filter = (props: Props) => {
  return (
    <div>
      <label htmlFor="favourite">Favourite</label>
      <select name="favourite" id="favourite">
        <option value="any"> Any</option>
        <option value="favourite"> favourite</option>
        <option value="not favourite"> not favourite</option>
      </select>
    </div>
  );
};

export default Filter;
