
// import { configureStore } from "@reduxjs/toolkit";
// import reducers from "./reducers/reducer";

// export default configureStore ({
//     reducer: reducers
// })


import { createStore } from "redux";
import rootReducer from "./reducers/index"

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store