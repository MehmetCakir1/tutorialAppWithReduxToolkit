import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./router/AppRouter";
import {store} from "./app/store"
import { Provider } from "react-redux";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    </div>
  )
}

export default App