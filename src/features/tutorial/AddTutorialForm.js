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
    <section className="mt-2 text-center d-flex flex-column align-items-center justify-content-center">
    <div class="container blob-header text-center d-flex justify-content-center align-items-center">
	<h1 className='text-center '><span>ADD A <br></br> TUTORIAL</span>
	<div class="blobs_1"></div>
	<div class="blobs_2"></div>
	<div class="blobs_3"></div>
	<div class="blobs_4"></div>
	<div class="blobs_5"></div>
	<div class="blobs_6"></div>
	<div class="blobs_7"></div>
  </h1>
</div>
    <form className="m-auto d-flex flex-column justify-content-center align-items-center addForm p-2">
      <div className=" mt-2">
        <label htmlFor="postTitle" className='fw-bold fs-3'>Title</label>
        <input
          type="text"
          id="tutorialTitle"
          name="tutorialTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-1 fs-5"
        />
      </div>
      <div className="mt-2">
           <label htmlFor="tutorialContent" className='fw-bold fs-3'>Content</label>
      <textarea
        id="tutorialContent"
        name="tutorialContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="p-1 fs-5" 
      />
      </div>
     <div className="d-flex justify-content-center align-items-center mt-2 py-3">
      <div className='btn-div'><button type="submit" onClick={handleSubmit} /*disabled={!canSave}*/ className="bg-primary fw-bold  py-1 px-3 text-light gooey border-0">
      </button></div>
          
     </div>
    </form>
  </section>
  )
}

export default AddTutorial