import { all } from "redux-saga/effects";
import { waitForReq } from "../Reducers/SagaReducer";

export default function* rootSaga(){
    yield all([waitForReq()]);
}