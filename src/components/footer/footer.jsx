import React from 'react'; 
import './footer.css'
import { currentYear } from '../../config'; 

const Footer=()=>{
    return (
        <div className="footer">
            <p className="rights-reserve">© {currentYear} KryptoNyte Inc. All rights reserved.</p>
        </div>
    ); 
}; 

export default Footer; 