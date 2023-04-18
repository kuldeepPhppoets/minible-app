import React from "react"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister()
