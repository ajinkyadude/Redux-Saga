import axios from "axios";

function API(){
    const getData=()=>{
        return axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>res.data).catch(e=> e);
    }

    return{
        getData,
    };
}

const DATA=API();

export default DATA;