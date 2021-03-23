import React,{ useState } from 'react'; 
import FontAwesome from 'react-fontawesome'; 
import './header.css'; 

const Header=()=>{
    const [navItems,setNavItems]=useState([
        {
            name:'SEARCH',
            logo:'fa fa-search',
            mouseOver:false
        },
        {
            name:'DASHBOARD',
            logo:'fa fa-tachometer',
            link:'/',
            mouseOver:false
        },
        {
            name:'COINS',
            logo:'fa fa-btc',
            link:'/coins',
            mouseOver:false
        },
        {
            name:'EXCHANGES',
            logo:'fa fa-exchange',
            link:'/exchanges',
            mouseOver:false
        },
        {
            name:'COMPARE',
            logo:'fa fa-binoculars',
            link:'/compare',
            mouseOver:false
        },
        {
            name:'FEEDS',
            logo:'fa fa-comments',
            link:'/feeds',
            mouseOver:false
        },
        {
            name:'INFLUENCERS',
            logo:'fa fa-group',
            link:'/influencers',
            mouseOver:false
        }
    ]); 


    const handleMouseEvent=(event,val)=>{
        event.preventDefault(); 
        const targetIdx=navItems.findIndex((item)=>{
            return item.name===event.target.id; 
        });
        if(navItems[targetIdx]){
            const updatedNavItems=[...navItems];
            updatedNavItems[targetIdx].mouseOver=val; 
            setNavItems(updatedNavItems);
        }
    }
    

    const renderNavItems=()=>{
        return (
            <ul className="header-side_nav-list">
                {
                    navItems.map((item,index)=>{
                        return (
                            <li 
                                onMouseEnter={(event)=>handleMouseEvent(event,true)} 
                                onMouseLeave={(event)=>handleMouseEvent(event,false)}
                                key={index} 
                                id={item.name}
                                className={`header-side_nav-list_item ${item.mouseOver&&'header-side_nav-list_item-hover'}`}
                            >
                                <a 
                                    className="header-side_nav-list_item_link" href={item.link}
                                >
                                    <FontAwesome 
                                        className={`${item.logo} ${item.mouseOver&&'logo-name-white'}`} 
                                        aria-hidden="true"  
                                    />
                                    <br/>
                                    <span className={`logo-name ${item.mouseOver&&'logo-name-white'}`}>
                                        {item.name}
                                    </span>
                                </a>
                            </li>                    
                        )
                    })
                }
            </ul>
        ); 
    }; 


    return (
        <div className="header-side_nav">
            {renderNavItems()}
        </div>
    ); 
}; 

export default Header; 


















/// linear-gradient(0deg,rgb(74, 0, 167),rgb(154, 58, 180))
