import React from 'react';
import Trend from 'react-trend';  
import './graph-type-A.css'; 

const GraphTypeA=(props)=>{

    const renderPrice=()=>{
        let value=null; 
        switch(props.type){
            case('USD'):
                        value=(props.val/Math.pow(10,9)).toFixed(3); 
                        value=`$${value}B`; 
                        break;
            
            case('percent'):
                        value=`${props.val}%`; 
                        break;

            default: value=props.val; 
        }
        return value; 
    }; 


    return (
        <a 
            href={`/compare/${props.link}`}
            title={props.label}
            onMouseEnter={(event)=>props.handleOverlay(event,true)}
            onMouseLeave={(event)=>props.handleOverlay(event,false)}        
        >    
            <div 
                className='graph-type-A'
                title={props.label}
                onMouseEnter={(event)=>props.handleOverlay(event,true)}
                onMouseLeave={(event)=>props.handleOverlay(event,false)}
            >
                <div className={`graph-type-A-overlay-${props.route} ${props.overlay?'':'hide'}`}>
                </div>
                <div 
                    className='graph-type-A-graph'
                    title={props.label}
                >
                    <div 
                        className='graph-type-A-label' 
                        title={props.label} 
                    >
                        {props.label}
                    </div>            
                    <div 
                        className='graph-type-A-val' 
                        title={props.label} 
                    >
                        {renderPrice()}
                    </div>
                    <div 
                        className={`graph-type-A-change ${props.change<0?'red':'green'}`} 
                        title={props.label} 
                    >
                        {props.change>=0?'+':null}{props.change}%
                    </div>
                    <Trend
                        title={props.label}
                        smooth
                        autoDraw
                        autoDrawDuration={3000}
                        width={150} 
                        height={80} 
                        autoDrawEasing="ease-in"
                        data={[...props.array]}
                        gradient={['blue', 'violet','blue']}
                        radius={18.6}
                        strokeWidth={1}
                        strokeLinecap={'butt'}
                    />
                </div>
            </div>
        </a>
    );
}; 

export default GraphTypeA; 