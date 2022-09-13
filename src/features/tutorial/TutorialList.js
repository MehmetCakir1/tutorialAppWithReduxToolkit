import React from 'react'
import { useSelector } from 'react-redux'
import AddTutorial from './AddTutorialForm'
import SingleTutorial from './SingleTutorial'

const TutorialList = () => {
    const tutorial=useSelector((state)=>state.tutorial)
    // console.log(tutorial)
  return (
    <div>
        <AddTutorial/>
        {tutorial?.map((item)=>{
          return(
            <SingleTutorial key={item.id} item={item}/>
          )
        })}
    </div>
  )
}

export default TutorialList