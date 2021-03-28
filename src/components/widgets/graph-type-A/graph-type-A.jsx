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
        <div className='graph-type-A'>
            <div className='graph-type-A-label'>{props.label}</div>            
            <div className='graph-type-A-val'>
                {renderPrice()}
            </div>
            <div className={`graph-type-A-change ${props.change<0?'red':'green'}`}>
                {props.change>=0?'+':null}{props.change}%
            </div>
            <Trend
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
    );
}; 

export default GraphTypeA; 