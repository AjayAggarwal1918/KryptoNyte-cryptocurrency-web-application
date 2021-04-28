// EXTERNAL DEPENDENCIES
import React from 'react';

//  COMPONENT IMPORTS
import CoinsTable from './coins-table/coins-table';
import CoinsCharts from './coins-charts/coins-charts';

// CSS FILES 
import './coins.css'; 

const Coins=()=>{
    return (
        <>
            <div className="coins-heading">
                COINS
            </div>
            <CoinsCharts/>
            <CoinsTable/>
        </>
    )
}; 

export default Coins; 