import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router';


function AppointmentList() {

  useEffect(() => {
    fetchItem();
  });

  const {id} = useParams();

  const [item, setItem] = useState ({});

  const fetchItem = async () => {
    const data = await fetch (`https://jsonplaceholder.typicode.com/todos/${id}`);
    const itemsJson = await data.json()
    //const itemsJson = require(`../data/appointment.json.[${match.params.id}]`)
    setItem(itemsJson)
    console.log("hola")
  }
  return (
    <div>
        <h1>{item.title}</h1>
    </div>
  );
}

export default AppointmentList;