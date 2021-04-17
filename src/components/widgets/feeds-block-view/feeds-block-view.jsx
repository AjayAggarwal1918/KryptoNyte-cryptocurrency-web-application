// DEPENDENCY IMPORTS
import React from 'react'; 

// CSS FILES 
import './feeds-block-view.css'; 

// COMPONENT IMPORTS 
import FeedsBlockViewItem from './feeds-block-view-item/feeds-block-view-item'; 


const FeedsBlockView=(props)=>{

    const renderBlocks=()=>{
        return (
            <>
                <div className="feeds-content-blocks">
                    {
                        props.data.map((item,index)=>{
                            return (
                                <FeedsBlockViewItem
                                    item={item}
                                    index={index}
                                    key={index}
                                />
                            ); 
                        }) 
                    } 
                </div>
            </>
        ); 
    }

    return(
        <>
            {renderBlocks()}
        </>
    ); 
}; 


export default FeedsBlockView; 

