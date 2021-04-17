import React from 'react'; 

// CSS FILES 
import './feeds-block-view-item.css'; 

// JS FILES 
import { fullTimeConverter } from '../../../../config'; 


const FeedsBlockViewItem=({item,index})=>{
    
    return (
            <a 
                href={item.url} 
                className="feeds-content_blocks-link"
                key={index}
            >
                <div className="feeds-content_blocks-item" key={index}>
                    <div className="feeds-content_blocks-logo">
                        <span className="feeds-content_blocks-logo_logo">
                            logo
                        </span>
                        <span className="feeds-content_blocks-logo_name">
                            {item.name}
                            <br/>
                            {item.symbol}
                        </span>
                        <span className="feeds-content_blocks-logo_time">
                            {fullTimeConverter(item.time)}
                        </span>
                    </div>
                    <div className="feeds-content_blocks-body">
                            {item.body}
                    </div>
                    <div className="feeds-content_blocks-shares">
                        <span className="feeds-content_blocks-shares_socialscores">
                            Social Scores  {item.social_score}
                        </span>
                        <span className="feeds-content_blocks-shares-retweets">
                            Shares  {item.retweets}
                        </span>
                        <span className="feeds-content_blocks-shares-likes">
                            Likes  {item.likes}
                        </span>
                    </div>
                </div>
            </a>
    ); 
}; 

export default FeedsBlockViewItem; 