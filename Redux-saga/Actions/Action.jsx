import { REC_DATA, FOR_DATA } from "./ActionTypes";

export const fetchdata=()=>{
    return{type: REC_DATA}
}

// export const setData=(products = null)=>{
    
    
//         return{
//             type: FOR_DATA,
//             payload: products
//         };
    
// };


export const setData = (products = null) => {
    if (products) {
        //console.log("inside if"+products.data[0].name);
      return {
        type: FOR_DATA,
        payload: products,
      };
    }
  };  