import React from 'react';
import logo from './giphy.gif';



export default function Load(){

    return <div style={{width:'100vw', height:'100vh', backgroundColor:'black'}}>
              <img src={logo} style={{width:'7%',margin:'17% 44%'}} alt=''/>
          </div>;
}