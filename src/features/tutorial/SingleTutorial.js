import React from 'react'
import { useNavigate } from 'react-router-dom';

const SingleTutorial = ({item}) => {
    const {id,title,content}=item;
    const navigate=useNavigate()
  return (
        <div className="singleTutorial border border-1 border-secondary p-1 d-flex justify-content-between align-items-center mt-1">
            <h4 className="card-title pe-3 text-capitalize">{title}</h4>
            {/* <p className="card-content">{content}</p> */}
            <button onClick={()=>navigate("/detail",{state:item})} className="border-0 fw-bold bg-danger text-light py-1 px-3">MORE</button>
        </div>
  )
}

export default SingleTutorial