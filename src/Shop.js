import React, { useState, useEffect } from "react";
import './App.css';
import { Link } from "react-router-dom";

function Shop() {

  const items = [
    'cat', 'dog', 'red panda', 'lizzard', 'kitten'
  ]

  // Adding dynamic routing - just need to include the name of the route in the to attr of the Link, and this can by a variable as well 

  return (
    <div>
      <h1>Shop page</h1>
      {
        items.map(item => (
          <h3 key={item}>
            <Link to={`/shop/${item}`}>{item}</Link>  
          </h3>
        ))
      }
    </div>
  );
}

export default Shop;