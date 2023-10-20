"use client";
import React, { useState } from 'react'
const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("")

  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask,{
      title,desc
    }])
    settitle("")
    setdesc("")
    console.log(mainTask)
  }

  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setMainTask(copytask);
  }



  let renderTask = <h2>No Task Avaliable</h2>;

 if(mainTask.length>0){
  renderTask= mainTask.map((t,i)=>{
    return(
     
        <li key={i} className='listFlex'>
          <div className='flexibleTaskHandler'>
          <h5 className='textStyle'>{t.title}</h5>
          <h6 className='textStyle'>{t.desc}</h6>
          </div>
          <button 
          onClick={
            ()=>{
              deleteHandler(i)
            }
          }
          className='deleteBtn'>Delete</button>
      </li>
      
    ) 
  })
 }
  return (
      <>
        <h1 className='todotext'>My ToDo list</h1>

        <form onSubmit={submitHandler}>
          <input 
          type='text'
          className='inputElement'
          placeholder='Enter Title here'
          value={title}
          onChange={(e)=>{
            settitle(e.target.value);
          }}
          />

          <input 
          type='text' 
          className='inputElement'
          placeholder='Enter Description here'
          value={desc}
          onChange={(e)=>{
            setdesc(e.target.value);
          }}
          />

          <button className='addBtn'>Add Task</button>
        </form>

        <hr/>

        <div className='padding'>

          <ul>
            {renderTask}
          </ul>
        </div>
      </>
  )
}

export default page