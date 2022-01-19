import React,{useState, useEffect, useContext} from 'react';
import { Statecontext } from '../Statecontext';
import './leaderboard.css';
import { collection, getDocs,query,where } from "firebase/firestore";
import { db } from '../firebase/fireconfig';


export default function Leaderboard({leaderusers,highscores,newsnap}){
    const [alldataload,setAlldataLoad] = useContext(Statecontext).alldataLoad;






useEffect(() => {
  newsnap()
  highscores()
    
}, [alldataload])



if(leaderusers.length > 0){
  return <div className='leaderdiv'>
  <div className='topholder' style={{wdith:'100%',height:"45px",marginBottom:'25px'}}>
      <div className='star'><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg></div>
      <p className='leadertop'>LEADER BOARD</p>
  </div>
  
  <div style={{width:'100%',height:'85%', boxSizing:'border-box'}}>
      {leaderusers.map(leadItem=>(
      <div key={Object.keys(leadItem)} style={{width:'100%',heigth:'45%',backgroundColor:'black',padding:'5px 30px',boxSizing:'border-box'}}>
          <div style={((leaderusers.indexOf(leadItem)+1) % 2 == 0)? ash:black}>
              <div style={{width:'20%',display:'flex',justifyContent:'space-around'}}>
                  <p><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#FFFFFF"><g><rect fill="none" height="24" width="24" x="0"/><path d="M12,8.89L12.94,12h2.82l-2.27,1.62l0.93,3.01L12,14.79l-2.42,1.84l0.93-3.01L8.24,12h2.82L12,8.89 M12,2l-2.42,8H2 l6.17,4.41L5.83,22L12,17.31L18.18,22l-2.35-7.59L22,10h-7.58L12,2L12,2z"/></g></svg></p>
                  <p>{leaderusers.indexOf(leadItem)+1}</p>    
              </div>
              <div style={{width:'80%',display:'flex',justifyContent:'space-around'}}>
                  <p style={{textAlign:'center',width:'33.3%'}}>{leadItem[Object.keys(leadItem)]['username']}</p>
                  <p style={{textAlign:'center',width:'33.3%'}}> Word Per Minute: {leadItem[Object.keys(leadItem)]['word']}</p>
                  <p style={{textAlign:'center',width:'33.3%'}}> Accuracy: {leadItem[Object.keys(leadItem)]['accuracy']}</p>
              </div>
              
          </div>
  
      </div>))}
  </div>
  
          
</div>
}

 else{
   return <div> Nothing to show here</div>
 }
}
  
    

const ash = {
    display:'flex',
    boxSizing:'border-box',
    backgroundColor:'rgb(44, 43, 43)',
    padding:'25px 25px',
    width:'90%',height:'100%',
    fontSize:'15px',
    justifyContent:'space-around',
    margin:"3px auto"
}

const black = {
    display:'flex',
    boxSizing:'border-box',
    backgroundColor:'black',
    padding:'25px 25px',
    width:'90%',height:'100%',
    fontSize:'15px',
    justifyContent:'space-around',
    margin:"3px auto"
}