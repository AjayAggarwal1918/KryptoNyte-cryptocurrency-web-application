// EXTERNAL DEPENDENCIES 
import React,{ useEffect,useState } from 'react'; 
import Axios from 'axios'; 

// COMPONENT IMPORTS 
import ButtonList from './button-list/button-list'; 
import GraphTypeB from '../widgets/graph-type-B/graph-type-B';

// JS FILES 
import { timeConverter } from '../../config'; 

// CSS FILES 
import './compare.css'; 


const Compare=(props)=>{

    const [chartsData,setChartsData]=useState({
        data:[],
        right:false,
        YAxes1:'',
        YAxes2:''
    }); 
            
    useEffect(()=>{ 
        console.log(props.match.params.topic); 
        if(chartsData.data.length===0){
            Axios.get(`https://api.lunarcrush.com/v2?data=global&key=de2osuahzkn99zhpn1iasr&data_points=45&interval=day`)
            .then(result=>{
                console.log(result.data.data.timeSeries);
                const data=result.data.data.timeSeries.map((item,index)=>({
                                                                            name:timeConverter(item.time),
                                                                            tweets:item.tweets,
                                                                            youtube:item.youtube
                                                                        })); 
                console.log(data); 
                return data; 
            })
            .then(result=>{
                if(chartsData.data.length!==result.length){
                    let newChartsData={...chartsData}; 
                    newChartsData['data']=result; 
                    setChartsData(newChartsData);
                }
            })
            .catch(error=>{
                console.error(error);
            }); 
        }
    }); 


    const handleTopicClick=(event)=>{
        if(event.target.title==='Clear'){
            let updatedChartsData={...chartsData}; 
            updatedChartsData['right']=!chartsData.right; 
            setChartsData(updatedChartsData); 
            return; 
        }

        console.log(event.target.title,event.target.id);
    };


    return (
        <div className="compare-wrapper" style={{background:' rgb(34, 31, 48)'}}>
            <div className="compare-logo-wrapper">
                logo here 
            </div>
            <div className="compare-content-wrapper">
                <div className="button-list-wrapper">
                    <ButtonList 
                        handleTopicClick={(event)=>handleTopicClick(event)}
                        label="LEFT DIMENSION"
                        clear={false}
                        position='left' 
                        />
                </div>
                <div className="compare-graph-wrapper">
                    <GraphTypeB 
                        YAxes2={'youtube'}
                        YAxes1={'tweets'}
                        right={chartsData.right}
                        data={chartsData.data}
                    />
                </div>
                <div className="button-list-wrapper">
                    <ButtonList 
                        handleTopicClick={(event)=>handleTopicClick(event)}
                        label="RIGHT DIMENSION" 
                        clear={true}
                        position='right'
                    />
                </div>
            </div>
        </div>
    ); 
}; 

export default Compare; 











