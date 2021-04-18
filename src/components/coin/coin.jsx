import React,{ useState,useEffect } from 'react'; 
import Axios from 'axios'; 

// COMPONENT IMPORTS 
import GraphTypeC from '../widgets/graph-type-C/graph-type-C'; 
import ButtonList from '../widgets/button-list/button-list'; 

//  CSS FILES 
import './coin.css'; 


const Coin=()=>{

    const [coinState,setCoinState]=useState({
        dataPoints1: [],
        dataPoints2: [], 
        dataPoints3: [],
        sliderMin:null,
        sliderMax:null,
        isLoaded: false
    }); 

    useEffect(()=>{
        if(coinState.dataPoints1.length===0){
            Axios.get(`https://api.lunarcrush.com/v2?data=assets&key=${process.env.REACT_APP_CRYPTODATA_API_KEY}&interval=day&data_points=365&symbol=BTC`)
                .then(result=>{
                    console.log(result.data.data[0]); 
                    const dps1=[],dps2=[],dps3=[];
                    let sliderMin=null,sliderMax=null; 
                    result.data.data[0].timeSeries.forEach((item,index)=>{
                        const time=new Date(item.time*1000); 
                        if(index===200) sliderMin=time; 
                        if(index===250) sliderMax=time; 

                        dps1.push({
                            x: time,
                            y: [
                                Number(item.open),
                                Number(item.high),
                                Number(item.low),
                                Number(item.close)
                            ]
                        });
                        dps2.push({x: time, y: Number(item.open)});
                        dps3.push({x: time, y: Number(item.close)});
                    })
                    console.log({dps1,dps2,dps3}); 

                    return {
                        dps1,
                        dps2,
                        dps3,
                        sliderMin,
                        sliderMax
                    }; 
                })
                .then(result=>{
                    let updatedCoinState={
                        dataPoints1:[...coinState.dataPoints1],
                        dataPoints2:[...coinState.dataPoints2],
                        dataPoints3:[...coinState.dataPoints3],
                        isLoaded:coinState.isLoaded,
                        sliderMin:coinState.sliderMin,
                        sliderMax:coinState.sliderMax
                    }
                    updatedCoinState={
                        dataPoints1:[...result.dps1],
                        dataPoints2:[...result.dps2],
                        dataPoints3:[...result.dps3],
                        sliderMin:result.sliderMin,
                        sliderMax:result.sliderMax,
                        isLoaded:true
                    }
                    setCoinState(updatedCoinState)
                })
                .catch(error=>{
                    console.error(error);
                }); 
        }
    })



    const handleTopicClick=(event,pos)=>{ 
        console.log(event.target.title,event.target.id,pos); 
    };


    return(
        <div className="coin-wrapper">
            <div className="coin-heading-wrapper">
                <div className="coin-heading_logo">

                </div>
                <div className="coin-heading_info">

                </div>
            </div>
            <div className="coin-graph-wrapper">
                <div className="coin-graph-button_list">
                    <ButtonList 
                            handleTopicClick={(event,pos)=>handleTopicClick(event,pos)}
                            label="Social Matrices Available"
                            clear={false}
                            position='left'
                    />
                </div>
                <div className="coin-graph-graph_typeC">
                    <GraphTypeC
                        {...coinState}
                    />
                </div>
            </div>
            <div className="coin-body-wrapper">

            </div>
        </div>
    ); 
}; 

export default Coin; 







