import React, {useContext,useState} from 'react';
import Top from './Top';
import Contentmain from './content';
import Leaderboard from './Links/Leaderboard';
import Myprogress from './Links/PersonalRecord';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dict from './littleparts/DictionaryOutput';
import { Statecontext } from './Statecontext';
import Load from './littleparts/gif';


function Appsecond({Arra, loading, setArra, setLoading, leaderusers,highscores,newsnap,personalsnap,BestScores,
    personalArr,BestScoreArray,pArraylength}) {
    const [dicapi, setdicapi] = useContext(Statecontext).dicapi
    const [dicclicked,setdicclicked] = useContext(Statecontext).dicclicked


    return (
        <Router>
        <div>
            <Top />
            
            <Routes style={{width:'100%',height:'80%'}} >
               <Route path="/" element ={<Contentmain Arra={Arra} loading={loading} setArra={setArra} setLoading={setLoading}/>} />
               <Route path="/search" element={ dicclicked?<Dict dicapi={dicapi}/>: <Load/>} />
               <Route path="/leaderboard" element={<Leaderboard leaderusers={leaderusers} highscores={highscores} newsnap={newsnap}/>} />
               <Route path="/myprogress" element={<Myprogress personalsnap={personalsnap} BestScores={BestScores}
               BestScoreArray={BestScoreArray} pArraylength={pArraylength} personalArr={personalArr}/>} />
            </Routes>
            
        </div>
        </Router>
        
    )
}

export default Appsecond
