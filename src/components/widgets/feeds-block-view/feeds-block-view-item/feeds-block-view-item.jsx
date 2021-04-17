import React from 'react'; 

// CSS FILES 
import './feeds-block-view-item.css'; 

// JS FILES 
import { timeConverter } from '../../../../config'; 


const FeedsBlockViewItem=({item,index})=>{
    
    return (
            <a 
                href={item.url} 
                className="feeds-content_blocks-link"
                key={index}
            >
                <div className="feeds-content_blocks-item" key={index}>
                    <div className="feeds-content_blocks-logo">
                        <div className="feeds-content_blocks-logo_logo">
                            logo
                        </div>
                        <div className="feeds-content_blocks-logo_name">
                            {item.name}
                            <br/>
                            {item.symbol}
                        </div>
                        <div className="feeds-content_blocks-logo_time">
                            {timeConverter(item.time)}
                        </div>
                    </div>
                    <div className="feeds-content_blocks-body">
                            {item.body}
                    </div>
                    <div className="feeds-content_blocks-shares">
                        <div className="feeds-content_blocks-shares_socialscores">
                            Social Scores :<br/>{item.social_score}
                        </div>
                        <div className="feeds-content_blocks-shares-retweets">
                            Shares :<br/>{item.retweets}
                        </div>
                        <div className="feeds-content_blocks-shares-likes">
                            Likes :<br/>{item.likes}
                        </div>
                    </div>
                </div>
            </a>
    ); 
}; 

export default FeedsBlockViewItem; 