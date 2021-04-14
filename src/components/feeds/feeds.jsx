import React,{ useState,useEffect } from 'react'; 
import FontAwesome from 'react-fontawesome'; 
import Axios from 'axios'; 

// COMPONENT IMPORTS 
import FeedsListView from '../widgets/feeds-list-view/feeds-list-view'; 
import FeedsBlockView from '../widgets/feeds-block-view/feeds-block-view'; 

// CSS FILES 
import './feeds.css'; 

const Feeds=()=>{

    const [feedsState,setFeedsState]=useState({
        view:'list',
        data:[],
        count:20
    }); 

    useEffect(()=>{
        if(feedsState.count!==feedsState.data.length){
            Axios.get(`https://api.lunarcrush.com/v2?data=feeds&key=${process.env.REACT_APP_CRYPTODATA_API_KEY}&limit=${feedsState.count}`)
            .then((result)=>{
                console.log(result.data.data);
                let updatedFeedsState={...feedsState}; 
                updatedFeedsState.data=result.data.data.map((item,index)=>{
                                                                            let FGcolor='',BGcolor='black'; 

                                                                            switch(item.type){
                                                                                case('twitter'):FGcolor='dodgerblue';
                                                                                                break; 
                                                                                case('youtube'):FGcolor='red';
                                                                                                break;
                                                                                case('reddit'):FGcolor='white';  BGcolor='red' 
                                                                                                break;
                                                                                case('news'):FGcolor='chartreuse';
                                                                                                break; 
                                                                                case('medium'):FGcolor='green';
                                                                                                break;
                                                                                default:FGcolor='dodgerblue';
                                                                                
                                                                            }
                                                                            return {...item,fgColor:FGcolor,bgColor:BGcolor }; 
                                                                        }); 
                setFeedsState(updatedFeedsState);  
            })
            .catch(error=>{
                console.log(error); 
            }); 
        }
    }); 



    const toggleView=(event,val)=>{
        event.preventDefault(); 
        if(feedsState['view']===val) return; 
        const updatedFeedsState={...feedsState}; 
        updatedFeedsState['view']=val;
        setFeedsState(updatedFeedsState);  
    }

    const handleLoadMore=(event,val)=>{
        event.preventDefault(); 
        if(feedsState.count+val>100) return;  
        const updatedFeedsState={...feedsState}; 
        updatedFeedsState['count']+=val;
        setFeedsState(updatedFeedsState);
    }


    return (
        <div className="feeds-wrapper">
            <div className="feeds-logo-wrapper">
                <div className="feeds-logo_content" title="feeds">
                    Feeds
                </div>
                <div className="feeds-logo_view">
                    <span 
                        className={`feeds-logo_view-list ${feedsState.view==='list'?'blue':''}`}
                        onClick={(event)=>toggleView(event,'list')}
                        title="list view"
                    >
                        <FontAwesome 
                            className="fas fa-list-ul"
                            aria-hidden="true"  
                            name="a"
                        />
                    </span>
                    <span 
                        className={`feeds-logo_view-block ${feedsState.view==='block'?'blue':''}`}
                        onClick={(event)=>toggleView(event,'block')}
                        title="block view"
                    >
                        <FontAwesome 
                            className={`fad fa-th`} 
                            aria-hidden="true"  
                            name="a"
                        />
                    </span>
                </div>
            </div>
            <div className="feeds-image-wrapper">
                <a href={`https://preview.redd.it/j11d83nmvyw31.png?width=2016&format=png&auto=webp&s=a6756a187f840f405237613abe6bc390c6303820`}>
                    <img className="feeds-image" src={`https://preview.redd.it/j11d83nmvyw31.png?width=2016&format=png&auto=webp&s=a6756a187f840f405237613abe6bc390c6303820`} alt="feeds_image"/>
                </a>
            </div>
            <div className="feeds-content-wrapper">
                {feedsState.view==='list'?
                    <FeedsListView 
                        data={feedsState.data}
                        count={feedsState.count}
                    />
                    :
                    <FeedsBlockView
                        data={feedsState.data}
                        count={feedsState.count} 
                    />
                }
            </div>
            <div 
                className="feeds-loadmore"
                onClick={(event)=>handleLoadMore(event,10)}    
            >
                SHOW MORE
            </div>
        </div>
    ); 
}; 

export default Feeds; 













