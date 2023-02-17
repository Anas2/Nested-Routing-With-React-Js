import { useNavigate } from 'react-router-dom';
import { Box, Typography, Container } from '@mui/material';
import Common from './common';

import './components.css';

function Home() {

   
    return (
        <div className='main'>
            <div><h3>Hello! And Welcome To The default Screen Please click on <span>"dashboard"</span> to test nested routing</h3></div>
            
        </div>
       

    )

}

export default Home