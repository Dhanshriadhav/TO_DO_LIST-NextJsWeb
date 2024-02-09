"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");

  const [desc, setdesc] = useState("");

  const [mainTask, setmainTask] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    // console.log(title)
    // console.log(desc)
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  const deletehandler =(i) =>{
    let copytask =[...mainTask]
    copytask.splice(i ,1)
    setmainTask(copytask)
  }

  let renderTask = <h2> No Task Avaliable </h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5  bg-zinc-100 rounded-md">
          <div
            className="flex items-center
            justify-between  mb-4 p-2 w-2/3"
          >
            <h5 className="text-xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-medium">{t.desc}</h6>
          </div>
          <button  id="one" onClick={()=>{
            deletehandler(i)
          }} className="bg-red-500 text-white m-3 px-5 py-3 rounded text-xl font-bold ">Delete</button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black white  text-white p-8 text-5xl font-medium  text-center flex flex-row justify-center align-middle">
        {" "}
        <img src="https://static-00.iconduck.com/assets.00/todo-icon-2048x2048-m7wp6prw.png"/>
        Diya's  Todo  List
      </h1>
      <form onSubmit={submithandler}>
        {/* two way binding  */}
        <input
          type="text"
          placeholder="Enter Title here"
          className="text-2xl  border-zinc-900 border-4 mt-10 px-4 py-2 "
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder=" Description here"
          className="text-2xl border-zinc-800  text-left border-4 m-8 px-4 py-2"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />

        <button className="bg-black text-white m-2 px-6 py-4 font-medium text-xl border-2 rounded-full ">
          {" "}
          Add Task
        </button>
      </form>

      <hr />

      <div className="p-8 bg-slate-300 text-left m-5 ">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
