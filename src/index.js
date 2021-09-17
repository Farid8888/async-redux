import ReactDOM from "react-dom";
import { createStore,combineReducers } from "redux";
import cartShowReducer from "./components/store/cartShowReducer";
import { Provider } from "react-redux";
import cartReducer from "./components/store/cartReduucer";
import "./index.css";
import App from "./App";

const reducers =combineReducers({
    cart:cartReducer,
    cartShow:cartShowReducer
})
const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
