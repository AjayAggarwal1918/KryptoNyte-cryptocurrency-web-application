//  DEPENDENCY IMPORTS
import React from 'react'; 
import { BrowserRouter } from 'react-router-dom'; 


//  COMPONENT IMPORTS 
import Routes from './routes'; 


// CONSTANTS DEFINED
const value=process.env.REACT_APP_50; 

const App=()=>{
    return (
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    ); 
}; 

export default App;
