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
                    <div className="feeds-content_blocks-column feeds-content_blocks-column1">
                        {      
                            props.data.map((item,index,arr)=>{
                                if(index>(0.38*arr.length)) return null; 
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
                    <div className="feeds-content_blocks-column feeds-content_blocks-column2">
                        {      
                            props.data.map((item,index,arr)=>{
                                if(index<=(0.35*arr.length) || index>(0.65*arr.length)) return null; 
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
                    <div className="feeds-content_blocks-column feeds-content_blocks-column3">
                        {      
                            props.data.map((item,index,arr)=>{
                                if(index<=(0.5*arr.length) || index>(0.8*arr.length)) return null; 
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
                    <div className="feeds-content_blocks-column feeds-content_blocks-column4">
                        {      
                            props.data.map((item,index,arr)=>{
                                if(index<=(0.68*arr.length)) return null; 
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

