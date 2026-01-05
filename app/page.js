"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}])
    settitle("")
    setdesc("")
    console.log(mainTask)
  }

  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)

  }
  let renderTask = <h2>No Task Available</h2>

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return <li key={i} className='flex justify-between items-center  mb-5'>
        <div className=' flex justify-between items-center w-2/3'>
           <h5 className='text-2xl font-semibold'>{t.title}</h5>
           <h6 className='text-lg font-semibold'>{t.desc}</h6>
        </div>
        <button onClick={()=>{deleteHandler(i)}}
        className='bg-red-500 text-white rounded px-4 py-2 font-bold'>Delete</button>
      </li>
    })
  }
  return (
    <div>
      <h1 className='bg-black text-white p-4 text-center text-5xl font-bold'>My Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='enter the title'  className='mx-17 my-8 px-5 py-2 text-2xl border-4 border-zinc-700'
        value={title} onChange={(e)=>{
          settitle(e.target.value)
        }}/>
        <input type='text' placeholder='enter the description'  className='mx-17 my-8 px-5 py-2 text-2xl border-4 border-zinc-700'
        value={desc} onChange={(e)=>{
          setdesc(e.target.value)
        }}/>
        <button  className='text-white bg-black mx-17 my-1 py-2 px-7 font-bold rounded-xl'>Add Task</button>
      </form>
      <hr/>
      <div className='text-3xl text-center bg-slate-200 p-8 '>
        <ul>{renderTask}</ul>
      </div>
      
    </div>
  )
}

export default page