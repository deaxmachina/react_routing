import React, { useState, useEffect } from "react";
import './App.css';
import { Link } from "react-router-dom";

function ItemDetail({ match }) {

  const [item, setItem] = useState();

  return (
    <div>
      <h1>Item</h1>
    </div>
  );
}

export default ItemDetail;