import { useSelector } from 'react-redux'
import AddTutorial from './AddTutorialForm'
import SingleTutorial from './SingleTutorial'

const TutorialList = () => {

  const tutorial=useSelector((state)=>state.tutorial)

 
  return (
    <div>
        <AddTutorial/>
        {tutorial?.map((item)=>{
          return(
            <div className='container row m-auto tutorial-list'>
              <SingleTutorial key={item.id} item={item}/>
            </div>
          )
        })}
    </div>
  )
}

export default TutorialList