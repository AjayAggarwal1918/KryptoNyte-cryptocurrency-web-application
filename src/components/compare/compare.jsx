// EXTERNAL DEPENDENCIES 
import React,{ useEffect,useState } from 'react'; 
import Axios from 'axios'; 

// COMPONENT IMPORTS 
import ButtonList from '../widgets/button-list/button-list'; 
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
        YAxes2:'',
        value1:'',
        value2:''
    }); 
            
    useEffect(()=>{
        if(chartsData.value1===''){
            let updatedChartsData={...chartsData}; 
            if(props.match.params.topic)    updatedChartsData.value1=props.match.params.topic; 
            else
            updatedChartsData.value1='news'; 
            setChartsData(updatedChartsData); 
            return; 
        }
        
        if(!(chartsData.value1===chartsData.YAxes1 && chartsData.value2===chartsData.YAxes2)){                       // avoiding infinite loop 
            Axios.get(`https://api.lunarcrush.com/v2?data=global&key=${process.env.REACT_APP_CRYPTODATA_API_KEY}&data_points=45&interval=day`)
            .then(result=>{
                const data=result.data.data.timeSeries.map((item,index)=>({
                                                                            name:timeConverter(item.time),
                                                                            [chartsData.value1]:item[chartsData.value1],
                                                                            [chartsData.value2]:item[chartsData.value2]
                                                                        })); 
                return data; 
            })
            .then(result=>{ 
                let newChartsData={...chartsData}; 
                newChartsData['data']=result;
                newChartsData['YAxes1']=chartsData.value1; newChartsData['YAxes2']=chartsData.value2;
                if(newChartsData['YAxes2']!=='') newChartsData['right']=true; 
                else 
                newChartsData['right']=false; 
                setChartsData(newChartsData);
            })
            .catch(error=>{
                console.error(error);
            });
        }
    }); 


    const handleTopicClick=(event,pos)=>{
        let updatedChartsData={...chartsData}; 
        if(event.target.title==='Clear'){
            updatedChartsData['right']=false; 
            updatedChartsData['YAxes2']=updatedChartsData['value2']=''; 
            setChartsData(updatedChartsData); 
            return; 
        }
        
        if(pos==='left')   updatedChartsData['value1']=event.target.id;
        else
        updatedChartsData['value2']=event.target.id;  
        
        setChartsData(updatedChartsData); 
        //console.log(event.target.title,event.target.id); 
    };


    return (
        <div className="compare-wrapper" style={{background:'#01010eea'}}>
            <div className="compare-logo-wrapper">
                <div className="compare-logo_heading">
                    COMPARE
                </div>
            </div>
            <div className="compare-content-wrapper">
                <div className="button-list-wrapper">
                    <ButtonList 
                        handleTopicClick={(event,pos)=>handleTopicClick(event,pos)}
                        label="LEFT DIMENSION"
                        clear={false}
                        position='left'
                        exclude={[]}
                    />
                </div>
                <div className="compare-graph-wrapper">
                    <GraphTypeB 
                        YAxes1={chartsData.YAxes1}
                        YAxes2={chartsData.YAxes2}
                        right={chartsData.right}
                        data={chartsData.data}
                    />
                </div>
                <div className="button-list-wrapper">
                    <ButtonList 
                        handleTopicClick={(event,pos)=>handleTopicClick(event,pos)}
                        label="RIGHT DIMENSION" 
                        clear={true}
                        position='right'
                        exclude={[]}
                    />
                </div>
            </div>
        </div>
    ); 
}; 

export default Compare; 




