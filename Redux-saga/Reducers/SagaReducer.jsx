import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { setData } from '../Actions/Action';
import { REC_DATA } from '../Actions/ActionTypes';
import DATA from '../API/Call_Api';


function* SagaReducer(){
    try{
        const products=yield call(DATA.getData);
        //console.log(products);
        yield put(setData(products))
    }catch(e){}
}

export function* waitForReq(){
    yield takeEvery(REC_DATA, SagaReducer);
}