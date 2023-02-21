import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { fetchdata } from './Redux-saga/Actions/Action';
import { fetchdata } from '../Redux-saga/Actions/Action';

function Data(){

  const dispatch=useDispatch();

  useEffect(()=>{
       dispatch(fetchdata())
  },[]) 
  

     const data=useSelector((state)=> state.products);
    // console.log(data);
  return (
    <View>
      {data.map((item)=>(
        <View style={{flexDirection: "row", justifyContent: "space-between",marginHorizontal: 10, marginVertical: 10,backgroundColor: "#ccc",padding: 4}}>
          <Text style={styles.textContainer}>{item.id}</Text>
          <Text style={styles.textContainer}>{item.name}</Text>
          <Text style={styles.textContainer}>{item.username}</Text>
        </View>       
      ))}
    </View>
  )
}

const styles=StyleSheet.create({
  textContainer:{
    fontWeight: "bold",
    fontSize: 15
  }
})


export default Data