import React,{ useEffect } from 'react'; 
import Axios from 'axios'; 


const ASSEST_URI=process.env.REACT_APP_ASSEST_URL; 
const GLOBAL_URI=process.env.REACT_APP_GLOBAL_URL; 

const Dashboard=()=>{

    useEffect(()=>{
        Axios.get(`${ASSEST_URI}`)
            .then(result=>{
                console.log(result);
                return Axios.get(`${GLOBAL_URI}`); 
            })
            .then(result=>{
                console.log(result);
            })
            .catch(error=>{
                console.error(error);
            })
            .finally(()=>{
                console.log('Just for checking whether it works or not');
            }); 
    }); 

    return (
        <div>
            <p> This is home route </p>
        </div>
    ); 
}; 

export default Dashboard; 