import React, {useEffect,useState} from 'react';
import { Link } from "react-router-dom";

function Shop() {

  useEffect(() => {
    fetchItems();
  },[]);

  const [items, setItems] = useState ([]);

  const fetchItems = async () => {
    //const itemsJson = require('../data/appointment.json')
    const data = await fetch ("https://jsonplaceholder.typicode.com/todos?_limit=10");
    const itemsJson = await data.json()
    //console.log(itemsJson)
    setItems(itemsJson)
  }
  return (
    <div>
      {items.map(itemsJson => (
        <h1 key={itemsJson.id}>
          <Link to = {`/shop/${itemsJson.id}`}>
            {itemsJson.id}
          </Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;