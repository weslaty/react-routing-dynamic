import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'

function ItemDetail({ match }) {

  useEffect(() => {
    fetchItem();
    console.info(match.params.id)
  }, [])

  const [item, setItem] = useState({})

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
    const item = await fetchItem.json()
    setItem(item)
    console.log(item)
  }

  return (
    <div>
      <p>Title : {item.title}</p>
      <p>{item.body}</p>
    </div>
  );
}

export default ItemDetail;
