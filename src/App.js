import React, { useEffect, useState } from 'react'
import './App.css';
import { StateHolder} from './Statecontext';
import Display from './Display';
import Appsecond from './Appsecond'
import Load from './littleparts/gif'
import Opener from './littleparts/Openpage';
import { collection, getDocs,query,where,orderBy } from "firebase/firestore";
import { db } from './firebase/fireconfig';



//import { collection, getDocs } from "firebase/firestore"; 







function App() {
  const [Arra, setArra] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openit, setopenit] = useState(false);
  const [password, setpassword] = useState('');
  const [userName, setuserName] = useState('');
  const [passWordsList, setPasswordList] = useState([]);
  const [userNameList, setUserNameList] = useState([]);
  const [block, setblock] = useState(0);
  const [leaderusers, setLeaderusers] = useState([])
  const[personalArr, setPersonalArr] = useState([]);
  const [pArraylength, setpArraylength] = useState(0);
  const[scorethreshold, setScorethreshold] = useState(0);
  const [BestScoreArray, setBestScoreArray] = useState([]);


  


//function to sort wordPerMinute in descending order
  const change = (a,b)=>{
    if(a<b){
      return 1
    }
    else if(a>b){
      return -1
    }
    return 0
  }


  let scores ;
  let score ;
  let Myscores ;
  let Myscore ;
  
 
  const newsnap = async()=>{
    const userRef = collection(db, "users");
    const querySnapshot = await getDocs(userRef); 
    let pwo = [];
    let us = [];
    let mainarr =[];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      let j = doc.id;
      let b = doc.data();
      let newobj = {}
      newobj[j] = b;
      mainarr.push(newobj)
      let pw = doc.data();
      pwo.push(pw.password)
      us.push(pw.username)
      

      scores = mainarr.map((arr)=>arr[Object.keys(arr)[0]]['word'])
      score = scores.sort(change) 
       //number that tells where to stop from highest to lowest score
      console.log(score[9])
      if(score.length < 20){
        setblock(score[score.length-1])
    }
    else{
        setblock(score[20-1])
    }
  
    });
  
    
    setPasswordList(pwo);
    setUserNameList(us)
  }
  
// function to retieve highest scores for leaderboard
  const highscores = async()=>{
    let userArr = [];
    const userRef = collection(db, "users");
    const q2 = query(userRef, where("word", ">", block));
    const querySnapshot = await getDocs(q2);
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    let id = doc.id;
      let data = doc.data();
      let scoreObj = {}
      scoreObj[id] = data;
      userArr.unshift(scoreObj)
  })
   setLeaderusers(userArr)
   console.log(leaderusers)
}


//function to get personal data
const personalsnap = async()=>{
  const userRef = collection(db, "users");
  const querieddata = query(userRef, where("username", "==", userName),orderBy('Timestamp','desc')  );
  //const queried = query(querieddata, where("username", "==", userName));
  const querySnapshot = await getDocs(querieddata); 
  let mainarr =[];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
    let j = doc.id;
    let b = doc.data();
    let newobj = {}
    newobj[j] = b;
    mainarr.push(newobj)
    Myscores = mainarr.map((arr)=>arr[Object.keys(arr)[0]]['word'])
    Myscore = Myscores.sort(change) 
    // number that tells where to stop from highest to lowest score

    if (Myscore.length <= 20){
        setScorethreshold(Myscore[Myscore.length-1])
    }
    else{
        setScorethreshold(Myscore[20-1])
    }
    
  });

  if(mainarr.length<=20){
    setPersonalArr(mainarr)
    setpArraylength(mainarr.length)
  }

  else{
    let newArr = mainarr.slice(0,20)
    setPersonalArr(newArr)
    setpArraylength(newArr.length)
    console.log('i got called')
  }

}

//function to get best personal data
const BestScores = async()=>{
  const userRef = collection(db, "users");
  const q2 = query(userRef,where("username", "==", userName), where("word", ">",scorethreshold));
  const querySnapshot = await getDocs(q2);
  let scoresArray =[];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
    let j = doc.id;
    let b = doc.data();
    let newobj = {}
    newobj[j] = b;
    scoresArray.unshift(newobj)
 
});
   setBestScoreArray(scoresArray)
}





//function to fetch data

  
  
 useEffect(  async()=>{
  setLoading(true);
  try{
    let res = await fetch("https://random-word-api.herokuapp.com/word?number=250&swear=0")
    let dat = await res.json();
    if(res == null || dat == null){
      console.log('error')
       throw new SyntaxError('Sorry could not fetch data yet, please check your internet connection.')
      
    }
    
    setArra(dat);
    personalsnap()
    BestScores()
    newsnap()
    highscores()
    
    
    setLoading(false);
  }

  catch(error){
      alert(error.message)
  }
  
  //console.log(Array[0])
  },[])

  if(!openit){
    return <Opener setopenit={setopenit} password={password} setpassword={setpassword} userName={userName}
    setuserName={setuserName} userNameList={userNameList} passWordsList={passWordsList}/>
 }

  else if (loading) {
    return <Load />;
  }

  return (
    
      <StateHolder>
        
        <div className="App">
          
          <Display password={password} userName={userName}/>
          
          <Appsecond Arra={Arra} loading={loading} setArra={setArra} setLoading={setLoading} userName={userName}
          newsnap={newsnap} highscores={highscores} leaderusers={leaderusers} personalsnap={personalsnap} BestScores={BestScores}
          personalArr={personalArr} BestScoreArray={BestScoreArray} pArraylength={pArraylength}/>
          
        
          
        </div>
        
      </StateHolder>
  );
}

export default App;
