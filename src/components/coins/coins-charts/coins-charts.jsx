// EXTERNAL DEPENDENCIES 
import React,{ useEffect,useState } from 'react'; 
import Slider from 'react-slick'; 
import Axios from 'axios'; 


//  INTERNAL COMPONENTS 
import GraphTypeA from '../../widgets/graph-type-A/graph-type-A'; 

//  CSS MODULES 
import './coins-charts.css'; 

const CoinsCharts=()=>{
    const [chartDataArray,setChartDataArray]=useState([]); 

    
    useEffect(()=>{
        if(chartDataArray.length===0){
            Axios
            .get(`https://api.lunarcrush.com/v2?data=global&key=ghtjv0fjqupjoe0zax90gg&data_points=30&interval=day`)
            .then(result=>{
                const topics=[{label:'TOTAL SOCIAL VOLUME',id:'social_volume_sum',type:'number'},
                            {label:'SOCIAL CONTRIBUTORS',id:'social_contributors',type:'number'},
                            {label:'SOCIAL SENTIMENT',id:'average_sentiment',type:'percent'},
                            {label:'TOTAL MARKET CAP',id:'market_cap',type:'USD'},
                            {label:'NEWS VOLUME',id:'news',type:'number'},
                            {label:'TOTAL SHARED LINKS',id:'url_shares',type:'number'},
                            {label:'BTC MARKET CAP',id:'btc_market_cap',type:'USD'},
                            {label:'TOTAL SOCIAL ENGAGEMENT',id:'tweets',type:'number'},
                            {label:'YOUTUBE VOLUME',id:'youtube',type:'number'},
                            {label:'BTC DOMINANCE',id:'btc_dominance',type:'percent'}
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
                        type:item.type,
                        route:'coins',
                        overlay:false,
                        link:item.id
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
        }
    }); 
    

    const handleOverlay=(event,val)=>{
        event.preventDefault(); 
        const targetIdx=chartDataArray.findIndex((item)=>{
            return item.label===event.target.title; 
        }); 

        const updatedChartsArray=[...chartDataArray]; 
        if(chartDataArray[targetIdx]){
            updatedChartsArray[targetIdx].overlay=val;
        }
        if(!val){                                                                           // if false then all false 
            updatedChartsArray.forEach(item=>{ item.overlay=val; });            
        }
        setChartDataArray(updatedChartsArray); 
    }


    const renderGraphs=()=>{
        const settings = {
            dots: true,
            infinite: true,
            arrows:false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5
        };

        return (
            <>
                <Slider {...settings}>
                    {
                        chartDataArray.length>0 && chartDataArray.map((item,index)=>{
                            return (
                                    <GraphTypeA 
                                        {...item} 
                                        index={index} 
                                        key={index} 
                                        handleOverlay={(event,val)=>handleOverlay(event,val)}
                                    />
                                );
                            }) 
                    }
                </Slider>
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
