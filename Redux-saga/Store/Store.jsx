import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./SagaRoot";
import Reducer from "../Reducers/Reducer";

const middle=createSagaMiddleware();

const store = createStore(Reducer, applyMiddleware(middle));

// const store = ()=> {
                                                                                                                                                                                                                                                                                                                                                                                                                       
//     const store = createStore(
//       reducer,
//       applyMiddleware(sagaMiddleware)
//     );
//    // use the same saga middleware that you have enhanced your store with
//    sagaMiddleware.run(rootSaga);
//     return store;
// }

middle.run(rootSaga);

export default store;