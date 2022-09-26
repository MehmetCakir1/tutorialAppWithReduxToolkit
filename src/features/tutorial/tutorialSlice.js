import { createSlice } from "@reduxjs/toolkit";


let initialState=[]


if(localStorage.getItem("tutorial")){
    initialState=initialState.concat(JSON.parse(localStorage.getItem("tutorial")))
}else{
    initialState=[]
}

const tutorialSlice=createSlice({
    name:"tutorial",
    initialState,
    reducers:{
        addNewTutorial(state,{payload}) {
            state.push(payload)
            localStorage.setItem("tutorial",JSON.stringify(state))
        },
        editTutorial(state,{payload}){
            // const {newTitle,newContent,id}=payload;
           const edittedPost=state.find((item)=>item.id === payload.id)
        //    state=[...state,{...edittedPost,title:payload.newTitle,content:payload.newContent}]
        //    localStorage.setItem("tutorial",JSON.stringify(state))
        state.splice(state.indexOf(edittedPost),1,payload)
            localStorage.setItem("tutorial",JSON.stringify(state))
        },
        removeTutorial(state,{payload}){
            state=state.filter((item)=>item.id!==payload)
            localStorage.setItem("tutorial",JSON.stringify(state))
        }
    }
})


export const {addNewTutorial,editTutorial,removeTutorial}=tutorialSlice.actions;
export default tutorialSlice.reducer;