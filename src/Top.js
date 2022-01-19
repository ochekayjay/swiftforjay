import React,{useContext,useState} from 'react';
import Searchspace from './littleparts/DictionarySearch';
import { Statecontext } from './Statecontext';
import './Top.css';
import {Link} from 'react-router-dom'

function Top() {
const [buttcolor,setButtcolor] = useState([{col0:'white'},{col1:'white'},{col2:'white'},{col3:'white'}])

const clickOne = ()=>{
  setButtcolor([{col0:'white'},{col1:'#f8b9a4'},{col2:'white'},{col3:'white'}])
}
const clickTwo = ()=>{
  setButtcolor([{col0:'white'},{col1:'white'},{col2:'#f8b9a4'},{col3:'white'}])
}
const clickThree = ()=>{
  setButtcolor([{col0:'white'},{col1:'white'},{col2:'white'},{col3:'#f8b9a4'}])
}


  return (
    <div className="top">
      <div>
      <h6 className='toph6'>... enhance your typing speed with</h6>
      </div>

      <div className='toph1div'>SWIFT HANDS</div>
      

      <div className='divtwo'>
        <Searchspace setButtcolor={setButtcolor} buttcolor={buttcolor}/>
      <div className='belowsearch'>
      
      <button onClick={clickOne} style={{backgroundColor:buttcolor[1].col1}}><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">Home</Link></button>
      <button onClick={clickTwo} style={{backgroundColor:buttcolor[2].col2}}><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="leaderboard">Leader board</Link></button>
      <button onClick={clickThree} style={{backgroundColor:buttcolor[3].col3}}><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="myprogress">My Record</Link></button>
      
      </div>
      
      </div>
    </div>
  );
}

export default Top;
