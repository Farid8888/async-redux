import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import {configureStore} from '@reduxjs/toolkit'
import cartReducer from "./components/store/cartReduucer";
import uiReducer from './components/store/cartShowReducer'

const store =configureStore({
  reducer:{
    cart:cartReducer,
    ui:uiReducer
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
