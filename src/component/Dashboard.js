import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import './components.css';
import Message from './Dashboard_Screens/Message';
import Location from './Dashboard_Screens/Location';

function Dashboard(props) {
    const navigate = useNavigate();
    const paths = [
        {
            name: 'message',
            path: 'message'
        },
        {
            name:'location',
            path:'location'
        }
    ]

    return (
        <div >
            
            <div className='dashboard-main'>
                <ul>
                {paths.map((x,i)=>{
                   return <li className='dashboard-li' onClick={()=>navigate(x.path)} key={i} ><button>{x.name}</button></li>
                })}
                </ul>

            </div>
            <br /><br />
            <div className='dashmessage'><h3>Hello! And Welcome To The <span>Dashboard</span> Screen Please click on <span> " Message " , " Location " </span> <br /> to test nested routing...</h3></div>
            <Routes>
                <Route element={<Message />} path="message" />
                <Route element={<Location />} path="location" />
            </Routes>
        </div>
    );
}

export default Dashboard;