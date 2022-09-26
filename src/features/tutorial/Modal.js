import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editTutorial } from './tutorialSlice';

const Modal = ({state,setIsOpen}) => {
  const navigate=useNavigate()
    const dispatch=useDispatch()
    const tutorial=useSelector((state)=>state.tutorial)
    // console.log(tutorial)
    const edittedPost=(tutorial.find((item)=>item.id===state.id))
    const [newTitle, setnewTitle] = useState(edittedPost.title);
    const [newContent, setnewContent] = useState(edittedPost.content)

    const editItem=(e)=>{
      e.preventDefault()
      if(newTitle && newContent){
        dispatch(editTutorial({
          ...edittedPost,
          title:newTitle,
          content:newContent
      }))
      } 
        setIsOpen(false)
        navigate(-1)
      }
console.log(tutorial)

// console.log(newTitle)
      // console.log(edittedPost)
      // console.log(tutorial)
  return (
    <form className="d-flex flex-column justify-content-center align-items-center modal" onSubmit={editItem}>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <label htmlFor="postTitle" className='fw-bold fs-3'>Title</label>
        <input
          type="text"
          id="tutorialTitle"
          name="tutorialTitle"
          value={newTitle}
          onChange={(e) => setnewTitle(e.target.value)}
          className="p-1 fs-5"
        />
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center'>
           <label htmlFor="tutorialContent" className='fw-bold fs-3'>Content</label>
      <textarea
        id="tutorialContent"
        name="tutorialContent"
        value={newContent}
        onChange={(e) => setnewContent(e.target.value)}
        className="p-1 fs-5" 
      />
      </div>
     <div className="d-flex justify-content-center align-items-center py-3">
      <div className='btn-div'>
        <button type="submit"
       className="bg-primary fw-bold  py-1 px-3 text-light gooey gooey-2 border-0">
      </button></div>
          
     </div>
    </form>
  )
}

export default Modal