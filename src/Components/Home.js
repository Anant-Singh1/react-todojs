// import React from "react";
// import { useState, useEffect } from "react";
// const Home = () => {
//   //   useEffect(() => {
//   //     // Will run as soon as page is reloded
//   //     console.log("Run");
//   //   }, []);

//   // will rerender
//   const [inputValue, setInputValue] = useState(0);
//   //   let inputValue = 0;
//   //   const ChangeHandler = (w) => {
//   //     inputValue = w.target.value;
//   //     console.log(inputValue);
//   const inc = () => {
//     setInputValue(inputValue + 1);
//   };
//   const dec = () => {
//     setInputValue(inputValue - 1);
//   };
//   return (
//     <div>
//       <input
//         style={{ padding: 20 }}
//         type="number"
//         placeholder="Enter something"
//         // onChange={ChangeHandler}
//         value={inputValue}
//         readOnly
//       />
//       <button
//         style={{
//           padding: 20,
//           border: "1px solid black",
//           backgroundColor: "whitesmoke",
//           margin: 10,
//         }}
//         onClick={inc}
//       >
//         +
//       </button>
//       <button
//         style={{
//           padding: 20,
//           border: "1px solid black",
//           backgroundColor: "whitesmoke",
//           margin: 10,
//         }}
//         onClick={dec}
//       >
//         -
//       </button>
//     </div>
//   );
// };

// export default Home;

//-------------------------------------------------------------------------------------------------->
import React, { useState } from "react";
import Task from "./Task";

const Home = () => {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  //   console.log(title, description);
  const submitHandler = (x) => {
    x.preventDefault();
    setTask([
      ...task,
      {
        title: title,
        description: description,
      },
    ]);
    setTitle("");
    setDescription("");
  };

  const deleteTask = (index) => {
    const filteredArray = task.filter((value, i) => {
      return i !== index;
    });
    console.log(filteredArray);
    setTask(filteredArray);
  };
  return (
    <div className="container">
      <h1>YOUR GOALS🏆🏆</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(x) => setTitle(x.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(x) => setDescription(x.target.value)}
        ></textarea>
        {/* <input type="submit" /> */}
        <button type="submit">ADD</button>
      </form>
      {task.map((item, index) => {
        return (
          <Task
            key={index}
            title={item.title}
            description={item.description}
            deleteTask={deleteTask}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Home;
