import {BrowserRouter,Routes,Route} from "react-router-dom";
import TutorialDetail from "../features/tutorial/TutorialDetail";
import TutorialList from "../features/tutorial/TutorialList";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<TutorialList/>}/>
        <Route path="/detail" element={<TutorialDetail/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter