import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../component/home';
import Dashboard from '../component/Dashboard';
import './router.css';


function Approuter() {
 
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to='dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        {/* <Link to='about'>About</Link> */}
                    </li>
                    <li>
                        {/* <Link to='contact'>sContact</Link> */}
                    </li>
                    <li className='login'>
                        {/* <Link to='login'>Login</Link> / <Link to='signup'>Sign up</Link> */}
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='dashboard/*' element={<Dashboard />} />
                
            </Routes>

        </BrowserRouter>
    )
}

export default Approuter