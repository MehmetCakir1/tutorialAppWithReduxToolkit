import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useDispatch } from "react-redux";
import { editTutorial, removeTutorial } from "./tutorialSlice";

const TutorialDetail = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id, title, content, date } = state;

  const fromThenToNow = parseISO(date);
 
  const deleteItem = () => {
    dispatch(removeTutorial(id));
    navigate("/");
    window.location.reload()
  };
  const editItem=()=>{
    navigate("/")
    dispatch(editTutorial(id))
  }
  return (
    <div className="container m-auto mt-5 main-detail border border-1 border-secondary px-2">
      <h4 className="detail-title text-center p-2 text-uppercase">{title}</h4>
      <p className="detail-content p-2">{content}</p>
      <p className="text-end px-3 fst-italic">{formatDistanceToNow(fromThenToNow)} ago</p>
      <div className="detail-btn-div d-flex justify-content-between align-items-center">
        <button onClick={() => navigate(-1)} className="border-0 bg-transparent text-primary fs-1">
          <TiArrowBack />
        </button>
        <div className="d-flex justify-content-between align-items-center">
           <button className="border-0 bg-transparent text-success fs-1 mx-2" onClick={editItem}>
          <BiEdit />
        </button>
        <button onClick={deleteItem} className="border-0 bg-transparent text-danger fs-2 mx-2">
          <FaTrashAlt />
        </button>
        </div>
      </div>
    </div>
  );
};

export default TutorialDetail;
