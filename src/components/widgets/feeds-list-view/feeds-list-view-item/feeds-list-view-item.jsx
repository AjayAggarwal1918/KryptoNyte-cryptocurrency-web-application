// DEPENDENCY IMPORTS 
import React from 'react'; 
import { SocialIcon } from 'react-social-icons';

// JS FILES 
import { fullTimeConverter } from '../../../../config'; 

// CSS FILES 
import './feeds-list-view-item.css'; 


const FeedsListViewItem=({item,index})=>{

    return(
        <a 
            href={item.url} 
            className="feeds-content_list-link"
            key={index}
        >
            <div className="feeds-content_list-item" key={index}>
                <div className="feeds-content_list-logo">
                    <SocialIcon 
                        url={`https://www.${item.type}.com`} 
                        bgColor={item.bgColor}
                        fgColor={item.fgColor}
                    />
                </div>
                <div className="feeds-content_list-info">
                    <p className="feeds-content_list-date">{ fullTimeConverter(item.time) }</p>
                    <p className="feeds-content_list-body">{item.body.substring(0,100)}</p>
                    <p className="feeds-content_list-shares">
                        <span className="feeds-content_list-shares-span">
                            Social Scores  {item.social_score}
                        </span>
                        <span className="feeds-content_list-shares-span">
                            Shares  {item.retweets}
                        </span>
                        <span className="feeds-content_list-shares-span">
                            Likes  {item.likes}
                        </span>
                    </p>
                </div>
            </div>
        </a>
    ); 
}; 


export default FeedsListViewItem; 
