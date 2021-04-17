// DEPENDENCY IMPORTS
import React from 'react'; 

// COMPONENT IMPORTS 
import FeedsListViewItem from './feeds-list-view-item/feeds-list-view-item'; 

// CSS FILES 
import './feeds-list-view.css'; 

const FeedsListView=(props)=>{ 

    const renderList=()=>{
        return (
            <>
                <div className="feeds-content-list">
                    {
                        props.data.map((item,index)=>{
                            return (
                                <FeedsListViewItem
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
            {renderList()}
        </>
    ); 
}; 

export default FeedsListView; 