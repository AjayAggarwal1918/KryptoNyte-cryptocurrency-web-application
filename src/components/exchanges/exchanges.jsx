import React,{ useState,useEffect } from 'react'; 
import Axios from 'axios'; 


const EXCHANGES_URI=process.env.REACT_APP_EXCHANGES_URL; 
const EXCHANGE_URI=process.env.REACT_APP_EXCHANGE_URL; 

const Exchanges=()=>{

    useEffect(()=>{
        Axios.get(`${EXCHANGES_URI}`)
            .then(result=>{
                console.log(result);
                return Axios.get(`${EXCHANGE_URI}`)
            })
            .then((result)=>{
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
            <p>Component for displaying famous crypto trading platforms.</p>
        </div>
    ); 
}; 

export default Exchanges; 