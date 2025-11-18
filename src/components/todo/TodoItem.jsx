import React from "react";

const TodoItem = ({ item }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" defaultChecked={item.done} />
      <span>{item.title}</span>
      <button className="remove">Delete</button>
    </div>
  );
};

export default TodoItem;

// Деструктурізація
// Створення змінних на основі масива чи об'єкта

// const [, , year] = [18, 11, 2025]
// console.log(year);

// const user = {
//   name: 'Tom',
//   age: 25,
//   email: 'tom@gmail.com'
// }

// let person = user
// let { name, age, email } = user

// const showUserInfo = ({ name, age, email }) => {
//   console.log(name, age, email);

// }

// showUserInfo(user)

// const { email, name, company="Microsoft" } = user
// console.log(email, company);
