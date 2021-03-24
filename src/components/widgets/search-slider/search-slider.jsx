import React from 'react'; 
import SideNav from 'react-simple-sidenav'; 

import './search-slider.css'; 


const SearchSlider=(props)=>{
    return (
        <>
            <SideNav
                showNav={props.showNav}
                onHideNav={(event)=>props.onHideNav(event)}
                navStyle={ 
                    props.showNav?
                    {
                        position:'relative',
                        height:"80%",
                        borderRadius:'1rem',
                        backgroundColor:'#11121b',
                        left:'5.2rem',
                    }:
                    {
                        display:'none',
                    }
                }
                titleStyle={{
                        display:'none'
                    }
                }
                itemStyle={{
                    display:'none'
                }}
            >
                <input className='search-slider_search-input' type="text" placeholder='Search for Coins'/>
            </SideNav>
        </>
    ); 
}; 

export default SearchSlider; 