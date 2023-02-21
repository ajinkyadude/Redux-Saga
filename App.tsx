import React, { useEffect } from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Data from './Components/Data';
import store from './Redux-saga/Store/Store';

function App(): JSX.Element {



  return (
    <Provider store={store}>
    <SafeAreaView style={{marginTop: 100}}>
      {/* <Text>Hello Guys</Text>
      <Button title='Get Data'></Button> */}
      <Data/>
    </SafeAreaView>
    </Provider>
  );
}

export default App;
