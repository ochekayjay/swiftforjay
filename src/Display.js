import React,{useContext, useState, useEffect} from 'react';
import './Display.css';
import {Statecontext} from './Statecontext'; 
import { db } from './firebase/fireconfig';
import { collection, addDoc, serverTimestamp} from "firebase/firestore"; 

function Display({userName, password}) {
  const [green, setgreen] = useContext(Statecontext).green
  const [red, setred] = useContext(Statecontext).red
  const [starter, setstarter] = useContext(Statecontext).starter
  const [timeno, settimeno] = useContext(Statecontext).timeno;
  const [appcss, setappcss] = useContext(Statecontext).appcss;
  const [accuracy, setaccuracy] = useContext(Statecontext).acc;
  const [alldataload,setAlldataLoad] = useContext(Statecontext).alldataLoad;
  const[displaystate, setdisplaystate] = useState('block')


  const cancel = ()=>{
    setappcss({width:'100%',height:'80%'});
    setdisplaystate('none')
  }

  const Accu = (g, r) =>{
      let denominator = g+r;
      let ans = (g/denominator)*100;
      ans = ans.toFixed(2)
      setaccuracy(ans+'%');
  }

  const fireb = async()=>{
    try {
      const docRef = await addDoc(collection(db, "users"), {
        password: password,
        username: userName,
        accuracy: accuracy,
        word:green,
        Timestamp: serverTimestamp()
      });
      console.log(accuracy, green)
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  useEffect(() => {
    Accu(green,red);
      if(timeno == 60){
        setappcss({width:'100%',height:'100%',filter:'blur(7px)'})
        settimeno(60)
        //db.collection('userDetails').add({password:password,username:userName,wordPerMinute:wpm,accurate:accuracy})
        fireb()
        setAlldataLoad(!alldataload)
      
      }
      
  }, [timeno,green])
   
  if(timeno >= 60){
    return(
        <div className='displaymain' style={{position:'fixed',top:'0px',bottom:'0px',height:'100vh',width:'100vw',boxSizing: 'border-box',zIndex:'1',display:displaystate}}>
            <div className='inmaindis'>
              <div style={{width:'100%',display:"flex",justifyContent:'right'}}><div className='iconcancel'  onClick={cancel} style={{backgroundColor:"white",width:"24px",alignItems:'left'}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg></div></div>
            <div className='displayelem'><p>Accuracy</p> <p>{accuracy}</p></div>
            <div className='displayelem'><p>Total Number of Words</p> <p>{green +red}</p></div>
            <div className='displayelem'><p>Words per Minute</p> <p>{green}</p></div>
            </div>
            
            
        </div>
    )
    
  } 
  else{
      return null;
  }
}

export default Display
