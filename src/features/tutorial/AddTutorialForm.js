import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTutorial } from './tutorialSlice';

const AddTutorial = () => {
    const dispatch=useDispatch()
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(title && content){
            dispatch(addNewTutorial({
                id:nanoid(),
                title:title,
                content: content,
                date:new Date().toISOString(),
            }))
        }
        setTitle("");
        setContent("");
    }


  return (
    <section className="mt-2">
    <h2 className="text-center">Add A Tutorial</h2>
    <form className="m-auto d-flex flex-column justify-content-center align-items-center addForm">
      <div className=" mt-2">
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-between align-items-center mt-2">
           <label htmlFor="postContent">Content:</label>
      <textarea
        id="postContent"
        name="postContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      </div>
     <div className="d-flex justify-content-center align-items-center mt-2 py-3">
          <button type="submit" onClick={handleSubmit} /*disabled={!canSave}*/ className="bg-primary fw-bold text-light py-1 px-3 rounded-3">
        ADD
      </button>
     </div>
    </form>
  </section>
  )
}

export default AddTutorial