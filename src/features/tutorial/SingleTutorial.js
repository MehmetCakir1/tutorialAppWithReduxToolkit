import React from 'react'
import {BiEdit} from "react-icons/bi";
import {FaTrashAlt} from "react-icons/fa";
import {TiArrowBack} from "react-icons/ti";

const SingleTutorial = ({item}) => {
    const {id,title,content}=item;
  return (
    <>
        <div className="card ">
            <h4 className="card-title">{title}</h4>
            <p className="card-content">{content}</p>
            <div className='btn-div'>
                <button><TiArrowBack/></button>
                <button><BiEdit/></button>
                <button><FaTrashAlt/></button>
            </div>
        </div>
    </>
  )
}

export default SingleTutorial