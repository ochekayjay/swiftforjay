import React, {useState, useEffect, useContext} from 'react';
import {Statecontext} from '../Statecontext'; 
import './dictoutput.css'



function Dict({ dicapi }){
    let word = dicapi['word'];
    let phonetics = dicapi['phonetics']
    let meanings = dicapi['meanings']
    
    


    



        return(<div style={{width:'100%',height:'100%',backgroundColor:"blue"}}>
        <div style={topdesign}>
      <div style ={design} className='outputwrapsecond'>
         <p style={{marginTop:'5px', marginBottom:'10px' ,color:'green'}}>word: {word}</p>
         <div>{phonetics.map((phone) => <div><audio controls={true}  src= {`${phone['audio']}`} key={phonetics.indexOf(phone)} className='audio'></audio></div>)}</div>
         {meanings.map(mean=><div>
             <p style={{marginTop:'15px', marginBottom:'10px' ,color:'blue'}}>Part of speech: {mean['partOfSpeech']}</p>
             <p style={{marginTop:'15px', marginBottom:'10px', color:'red'}}>Definition: {mean['definitions'][0]['definition']}</p>
             <p style={{marginTop:'15px', marginBottom:'10px', color:'yellow'}}>Example: {mean['definitions'][0]['example']}</p>
         </div>)}
      </div>
    </div>
   </div>
)
    


    
}
const design = {
    height:'100%',
    width:'40%',
    margin: '0px auto',
    backgroundColor:'black',
    color:'white',
    padding:'40px',
    paddingTop: '15px',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space around',
    fontSize:'25px'
}

const topdesign = {
    height:'100%',
    backgroundColor:'black',
    textAlign: 'left'
}


export default Dict;