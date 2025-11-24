import React, { useState } from "react";
import Spoiler from "./Spoiler";
import User from "./User";
import Rate from "./Rate";

const EventComponent = () => {
  // Стан (state) - це дані, які впливають на вигляд компонента
  // стан, ф-ція, яка змінює стан
  // при оновленні стану - оновлюється компонент
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Events</h1>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>

          <Spoiler />
          <User />
          <Rate />
    </div>
  );
};

export default EventComponent;
