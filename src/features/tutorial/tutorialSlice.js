import { createSlice } from "@reduxjs/toolkit";


const initialState=[]

const tutorialSlice=createSlice({
    name:"tutorial",
    initialState,
    reducers:{
        addNewTutorial(state,{payload}){
            state.push(payload)
        },
        editTutorial(state,{payload}){
            const {newTitle,newContent,id}=payload;
           const edittedPost=state.find((item)=>item.id === id)
           state=[...state,edittedPost.title=newTitle,edittedPost.content=newContent]
        },
        removeTutorial(state,{payload}){
            state=state.filter((item)=>item.id!==payload)
        }
    }
})


export const {addNewTutorial,editTutorial,removeTutorial}=tutorialSlice.actions;
export default tutorialSlice.reducer;