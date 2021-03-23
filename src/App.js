//  DEPENDENCY IMPORTS
import React from 'react'; 
import { BrowserRouter } from 'react-router-dom'; 


//  COMPONENT IMPORTS 
import Routes from './routes'; 


const App=()=>{
    return (
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    ); 
}; 

export default App;
