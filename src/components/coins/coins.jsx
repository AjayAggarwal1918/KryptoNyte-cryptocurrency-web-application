// EXTERNAL DEPENDENCIES
import React from 'react';

//  COMPONENT IMPORTS
import CoinsTable from './coins-table/coins-table';
import CoinsCharts from './coins-charts/coins-charts';


const Coins=()=>{
    return (
        <>
            <CoinsCharts/>
            <CoinsTable/>
        </>
    )
}; 

export default Coins; 