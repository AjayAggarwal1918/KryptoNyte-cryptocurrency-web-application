// DEPENDENCY IMPORTS
import React,{ useState } from 'react'; 
import FontAwesome from 'react-fontawesome'; 
import { Link } from 'react-router-dom'; 

// COMPONENT IMPORTS 
import SearchSlider from '../widgets/search-slider/search-slider';

// CSS IMPORTS 
import './header.css'; 


const Header=()=>{
    const [navItems,setNavItems]=useState([
        {
            name:'SEARCH',
            logo:'fa fa-search',
            mouseOver:false,
            sliderNav:true
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

    const [showNav,setShowNav]=useState(false); 



// HANDLERS DEFIND 

    const handleSearchSlider=(event,val)=>{
        if(!event || event.target.id==="SEARCH" || event.target.parentElement.id==="SEARCH"){
            setShowNav(val); 
        }
    }

    const handleMouseEvent=(event,val)=>{
        event.preventDefault();
        const targetIdx=navItems.findIndex((item)=>{
            return item.name===event.target.id; 
        });
        const updatedNavItems=[...navItems];
        if(navItems[targetIdx]){
            updatedNavItems[targetIdx].mouseOver=val;
        }
        if(!val){                                                                           // if false then all false 
            updatedNavItems.forEach(item=>{ item.mouseOver=val; });            
        }
        setNavItems(updatedNavItems);
    }
    

    const renderNavItems=()=>{
        return (
            <ul className="header-side_nav-list">
                {
                    navItems.map((item,index)=>{
                        return (
                            <Link 
                                to={item.link}
                                className="header-side_nav-list_item_link" 
                                key={index} 
                            >
                                <li 
                                    onMouseEnter={(event)=>handleMouseEvent(event,true)} 
                                    onMouseLeave={(event)=>handleMouseEvent(event,false)}
                                    onClick={(event)=>handleSearchSlider(event,true)}
                                    key={index} 
                                    id={item.name}
                                    className={`header-side_nav-list_item ${item.mouseOver&&'header-side_nav-list_item-hover'}`}
                                >
                                    {
                                        item.sliderNav&&<SearchSlider 
                                                            showNav={showNav}
                                                            onHideNav={(event)=>handleSearchSlider(event,false)}    
                                                        />
                                    }
                                    <FontAwesome 
                                        className={`${item.logo} ${item.mouseOver&&'logo-name-white'}`} 
                                        aria-hidden="true"  
                                        name="a"
                                    />
                                    <br/>
                                    <span className={`logo-name ${item.mouseOver&&'logo-name-white'}`}>
                                        {item.name}
                                    </span>
                                </li> 
                            </Link>                   
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
