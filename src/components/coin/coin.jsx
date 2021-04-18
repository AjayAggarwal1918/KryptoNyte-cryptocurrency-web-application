import React,{ useState,useEffect } from 'react'; 
import Axios from 'axios'; 

// COMPONENT IMPORTS 
import GraphTypeC from '../widgets/graph-type-C/graph-type-C'; 

const Coin=()=>{

    Axios.get('https://api.lunarcrush.com/v2?data=assets&key=gtst0ffotq880n6xti2jov&interval=day&data_points=365&symbol=LTC')
        .then(result=>{
            console.log(result); 
        })
        .catch(error=>{
            console.error(error);
        })

    return(
        <div className="coin_wrapper">
            <div> This is the coin route </div>
            <GraphTypeC/>
        </div>
    ); 
}; 

export default Coin; 