import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'

function Shop() {

  useEffect(() => {
    fetchItems();
  }, [])

  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const items = await data.json()
    console.info(items)
    setItems(items)
  }

  return (
    <div>
      {items.map(
        item => (
          <h1 key={item.id}>
            <Link to={`/shop/${item.id}`}>{item.title}</Link>
          </h1>
        )
      )}
    </div>
  );
}

export default Shop;
