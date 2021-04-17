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
                    <div className="feeds-content_blocks-column">
                        {      
                            props.data.map((item,index)=>{
                                if(index%4!==0) return null; 
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
                    <div className="feeds-content_blocks-column">
                        {      
                            props.data.map((item,index)=>{
                                if(index%4!==1) return null; 
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
                    <div className="feeds-content_blocks-column">
                        {      
                            props.data.map((item,index)=>{
                                if(index%4!==2) return null; 
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
                    <div className="feeds-content_blocks-column">
                        {      
                            props.data.map((item,index)=>{
                                if(index%4!==3) return null; 
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

