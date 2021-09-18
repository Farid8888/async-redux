import ReactDOM from "react-dom";
import { createStore,combineReducers } from "redux";
import cartShowReducer from "./components/store/cartShowReducer";
import { Provider } from "react-redux";
import cartReducer from "./components/store/cartReduucer";
import "./index.css";
import App from "./App";
import {applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'

const reducers =combineReducers({
    cart:cartReducer,
    cartShow:cartShowReducer
})

const logger = store =>{
  return next =>{
      return action =>{
          const result=next(action);
          return result
      }
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers,composeEnhancers(applyMiddleware(logger,thunk)));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
