import React from 'react'; 

import './button-list.css'; 

const ButtonList=(props)=>{

    const topics=[{label:'Clear',right:true},
                    {label:'Social Volume',id:'social_volume'},
                    {label:'Social Engagement',id:'tweets'},
                    {label:'Social Contributors',id:'social_contributors'},
                    {label:'Social Influencers',id:'social_influencers'},
                    {label:'Average Sentiment',id:'average_sentiment'},
                    {label:'Bullish Sentiment',id:'tweet_sentiment4'},
                    {label:'Bearish Sentiment',id:'tweet_sentiment2'},
                    {label:'Shared Links',id:'url_shares'},
                    {label:'Twitter Volume',id:'tweets'},
                    {label:'Reddit Volume',id:'reddit_posts'},
                    {label:'Medium',id:'medium'},
                    {label:'Youtube Volume',id:'youtube'},
                    {label:'News Volume',id:'news'},
                    {label:'Spam Volume',id:'tweet_spam'},
                    {label:'Market Volume',id:''},
                    {label:'Market Cap',id:'market_cap'},
                    {label:'BTC Dominance',id:'btc_dominance'},
                    {label:'BTC Market Cap',id:'btc_market_cap'}
                ]


    const renderButtonList=()=>{
        return (
            <>
                <ul className="button-list_items">
                    <label className="button-list_label">{props.label}</label>
                    {
                        topics.map((item,index)=>{
                            if(!props.clear && item.label==='Clear') return null; 
                            return (
                                <li
                                    title={item.label}
                                    id={item.id} 
                                    className="button-list_item"
                                    key={index} 
                                    onClick={(event)=>props.handleTopicClick(event,props.position)}
                                >
                                    <button 
                                        title={item.label}
                                        id={item.id}
                                        className="button-list_item_btn btn"
                                        type="button"
                                        onClick={(event)=>props.handleTopicClick(event,props.position)}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            )
                        })
                    } 
                </ul>
            </>
        ); 
    }; 


    return (
        <div className={`button-list-container button-list-wrapper_${props.position==='left'?'left':'right'}`}>
            {renderButtonList()}
        </div>
    ); 
};

export default ButtonList; 