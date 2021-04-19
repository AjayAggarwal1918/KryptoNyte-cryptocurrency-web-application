import React,{ useState,useEffect } from 'react'; 
import Axios from 'axios'; 

// COMPONENT IMPORTS 
import GraphTypeC from '../widgets/graph-type-C/graph-type-C'; 
import ButtonList from '../widgets/button-list/button-list'; 

//  CSS FILES 
import './coin.css'; 


const Coin=(props)=>{

    const [coinState,setCoinState]=useState({
        data:{},
        graphType:'spline',
        dataPoints1: [],
        dataPoints2: [], 
        dataPoints3: [],
        socialMatrix:{
            label:'Average Sentiment',
            id:'average_sentiment'
        },
        sliderMin:null,
        sliderMax:null,
        isLoaded: false
    }); 

    useEffect(()=>{
        console.log(props.match.params.symbol,coinState.data);                // coin id  

        if(coinState.dataPoints3.length===0){                                           // preventing infinie loop 
            if(coinState.dataPoints1.length===0){                                       // visiting the website first time
                Axios.get(`https://api.lunarcrush.com/v2?data=assets&key=${process.env.REACT_APP_CRYPTODATA_API_KEY}&interval=day&data_points=365&symbol=${props.match.params.symbol.toString().toUpperCase()}`)
                .then(result=>{
                    const dps1=[],dps2=[],dps3=[];  let sliderMin=null,sliderMax=null; 

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
                        dps2.push({x: time, y: Number(item.price)});
                        dps3.push({x: time, y: Number(item[coinState.socialMatrix.id])});
                    })
                    
                    return {
                        data:result.data.data[0],
                        dps1,
                        dps2,
                        dps3,
                        sliderMin,
                        sliderMax
                    }; 
                })
                .then(result=>{
                    let updatedCoinState={
                        data:{...result.data},
                        dataPoints1:[...result.dps1],
                        dataPoints2:[...result.dps2],
                        dataPoints3:[...result.dps3],
                        sliderMin:result.sliderMin,
                        sliderMax:result.sliderMax,
                        isLoaded:true,
                        graphType:coinState.graphType,
                        socialMatrix:{...coinState.socialMatrix}
                    }
                    setCoinState(updatedCoinState)
                })
                .catch(error=>{
                    console.error(error);
                }); 
            }
            else{
                const dps3=[];
                coinState.data.timeSeries.forEach((item,index)=>{
                    const time=new Date(item.time*1000); 
                    dps3.push({x: time, y: Number(item[coinState.socialMatrix.id])});
                })

                let updatedCoinState={
                    data:{...coinState.data},
                    dataPoints1:[...coinState.dataPoints1],
                    dataPoints2:[...coinState.dataPoints2],
                    dataPoints3:[...dps3],
                    sliderMin:coinState.sliderMin,
                    sliderMax:coinState.sliderMax,
                    isLoaded:true,
                    graphType:coinState.graphType,
                    socialMatrix:{...coinState.socialMatrix}
                }
                setCoinState(updatedCoinState)
            }
        }
    })



    const handleTopicClick=(event,pos)=>{
        let updatedCoinState={
            data:{...coinState.data},
            dataPoints1:[...coinState.dataPoints1],
            dataPoints2:[...coinState.dataPoints2],
            dataPoints3:[...coinState.dataPoints3],
            isLoaded:coinState.isLoaded,
            sliderMin:coinState.sliderMin,
            sliderMax:coinState.sliderMax,
            graphType:coinState.graphType,
            socialMatrix:{...coinState.socialMatrix}
        }
        const updatedSocialMatrix={
            label:event.target.title,
            id:event.target.id
        }
        updatedCoinState['socialMatrix']={...updatedSocialMatrix};
        updatedCoinState['dataPoints3']=[];
        updatedCoinState['isLoaded']=false;  
        setCoinState(updatedCoinState); 
    };


    return(
        <div className="coin-wrapper">
            <div className="coin-heading-wrapper">
                <div className="coin-heading_logo">
                    <div className="coin-heading_logo-coin" title="Coin">
                        Coin
                    </div>
                    <div className="coin-heading_logo-logo" title={coinState.data.name}>
                        <img 
                            src={`https://dkhpfm5hits1w.cloudfront.net/${coinState.data.name?coinState.data.name.toString().toLowerCase():'bitcoin'}.png`}
                            width="100rem"
                            height="100rem"
                            alt="bitcoin(s) img"
                            title={coinState.data.name}
                        />
                    </div>
                    <div className="coin-heading_logo-name" title={coinState.data.name}>
                        {coinState.data.name}/{coinState.data.symbol}
                    </div>
                </div>
                <div className="coin-heading_info">
                    <div className="coin-heading_info-details coin-heading_info-price">
                        Price<br/>
                        <span className="coin-heading_info-price_1">
                            ${coinState.data.price?coinState.data.price.toFixed(2):0}
                        </span><br/>
                        <span className="coin-heading_info-price_2">
                            ${coinState.data.price_btc?coinState.data.price_btc.toFixed(7):0}BTC
                        </span>
                    </div>
                    <div className="coin-heading_info-details">
                        % Change<br/>
                        <span className="coin-heading_info-price_1">
                            ${coinState.data.price?coinState.data.price.toFixed(2):0}
                        </span><br/>
                        <span className="coin-heading_info-price_2">
                            ${coinState.data.price_btc?coinState.data.price_btc.toFixed(7):0}BTC
                        </span>
                    </div>
                    <div className="coin-heading_info-details">
                        Market Cap<br/>
                        <span className="coin-heading_info-price_1">
                            ${coinState.data.price?coinState.data.price.toFixed(2):0}
                        </span><br/>
                        <span className="coin-heading_info-price_2">
                            ${coinState.data.price_btc?coinState.data.price_btc.toFixed(7):0}BTC
                        </span>
                    </div>              
                    <div className="coin-heading_info-details">
                        Volume<br/>
                        <span className="coin-heading_info-price_1">
                            ${coinState.data.price?coinState.data.price.toFixed(2):0}
                        </span><br/>
                        <span className="coin-heading_info-price_2">
                            ${coinState.data.price_btc?coinState.data.price_btc.toFixed(7):0}BTC
                        </span>
                    </div>             
                    <div className="coin-heading_info-details">
                        Sentiment<br/>
                        <span className="coin-heading_info-price_1">
                            ${coinState.data.price?coinState.data.price.toFixed(2):0}
                        </span><br/>
                        <span className="coin-heading_info-price_2">
                            ${coinState.data.price_btc?coinState.data.price_btc.toFixed(7):0}BTC
                        </span>
                    </div>
                </div>
            </div>
            <div className="coin-graph-wrapper">
                <div className="coin-graph-button_list">
                    <ButtonList 
                            handleTopicClick={(event,pos)=>handleTopicClick(event,pos)}
                            label="Social Matrices Available"
                            clear={false}
                            position='left'
                            exclude={[4,17,18]}
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

