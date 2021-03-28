// EXTERNAL DEPENDENCIES 
import React,{ useEffect,useState } from 'react'; 
import Axios from 'axios'; 

//  INTERNAL COMPONENTS 
import GraphTypeA from '../../widgets/graph-type-A/graph-type-A'; 

//  CSS MODULES 
import './coins-charts.css'; 

const CoinsCharts=()=>{
    const [chartDataArray,setChartDataArray]=useState([]); 

    
    useEffect(()=>{
        Axios
        .get(`https://api.lunarcrush.com/v2?data=global&key=${process.env.REACT_APP_CRYPTODATA_API_KEY}&data_points=30&interval=day`)
        .then(result=>{
            const topics=[{label:'TOTAL SOCIAL VOLUME',id:'social_volume_sum',type:'number'},
                            {label:'SOCIAL CONTRIBUTORS',id:'social_contributors',type:'number'},
                            {label:'SOCIAL SENTIMENT',id:'average_sentiment',type:'percent'},
                            {label:'TOTAL MARKET CAP',id:'market_cap',type:'USD'},
                            {label:'NEWS VOLUME',id:'news',type:'number'},
                            {label:'TOTAL SHARED LINKS',id:'url_shares',type:'number'},
                            {label:'BTC MARKET CAP',id:'btc_market_cap',type:'USD'},
                            {label:'TOTAL SOCIAL ENGAGEMENT',id:'tweets',type:'number'},
                            {label:'NEWS VOLUME',id:'news',type:'number'},
                            {label:'YOUTUBE VOLUME',id:'youtube',type:'number'},
                            {label:'BTC DOMINANCE',id:'btc_dominance',type:'percent'},
                            {label:'TOTAL SPAM VOLUME',id:'tweet_spam',type:'number'}
                        ]
            
            const chartsArray=[]; 
            topics.forEach((item,index)=>{
                const dataPoints=result.data.data.timeSeries.map((data)=>data[item.id]);
                const val29=result.data.data.timeSeries[29][item.id];
                const val28=result.data.data.timeSeries[28][item.id];
                const change=((val29-val28)/val28)*100;  
                
                chartsArray.push({
                    label:item.label,
                    val:val29.toFixed(2),
                    array:dataPoints,
                    change:change.toFixed(2),
                    type:item.type
                })                                                                            
            }); 

            return chartsArray; 
        })  
        .then(result=>{
            console.log(result); 
            if(result.length!==chartDataArray.length){
                setChartDataArray(result); 
            }
        })
        .catch(error=>{
            console.error(error);
        }); 
    }); 



    const renderGraphs=()=>{
        return (
            <>
            {
                chartDataArray.length>0 && chartDataArray.map((item,index)=>{
                        return (
                            <GraphTypeA {...item} index={index} key={index} />
                            );
                        }) 
                    }
                
            </>
        ); 
    }

    return (
        <div className='coins-charts-wrapper'>
            {renderGraphs()}
        </div>
    ); 
}; 

export default CoinsCharts; 
















/*
const timeConverter=(UNIX_timestamp)=>{
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}
console.log(timeConverter(0));
*/ 