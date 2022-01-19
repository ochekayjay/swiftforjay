import React,{useState, useEffect, useContext} from 'react';
import { Statecontext } from '../Statecontext';
import './precord.css';
import { collection, getDocs,query,where,orderBy } from "firebase/firestore";
import { db } from '../firebase/fireconfig';




export default function Myprogress({ personalArr,BestScoreArray,BestScores,pArraylength,personalsnap }){
    const [alldataload,setAlldataLoad] = useContext(Statecontext).alldataLoad;
    //const[personalArr, setPersonalArr] = useState([]);
    //const [pArraylength, setpArraylength] = useState(0);
    //const[scorethreshold, setScorethreshold] = useState(0);
    //const [BestScoreArray, setBestScoreArray] = useState([]);


    


    /*const change = (a,b)=>{
        if(a<b){
          return 1
        }
        else if(a>b){
          return -1
        }
        return 0
      }
    
      let Myscores ;
      let Myscore ;
    

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
    
          if (Myscore.length < 20){
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
          setpArraylength(mainarr.length)
        }
        console.log(mainarr)
        console.log(score)
      }

  


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
    }*/

    

      useEffect(() => {
          personalsnap();
          BestScores()
      }, [alldataload])






  return  <div className='recorddiv'>
            <div style={{width:'80%',display:'flex',justifyContent:'center',margin:'15px auto 45px',height:'55px'}}>
              <p><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99l1.5 1.5z"/></svg></p>
              <p className='records' >MY RECORDS</p>
            </div>
            <div style={{width:'100%',height:'calc(100%-115px)',boxSizing:'border-box'}}>
              <div style={{width:'90%',heigth:'50%',margin:'0px auto 35px', boxSizing:'border-box'}}>
                <p style={{width:'50%',margin:"0px auto",textAlign:'center',fontSize:'25px',height:'40px',paddingBottom:"25px"}}>{pArraylength==1? 'Last Attempt': `Last ${pArraylength} Attempts`}</p>
                <div className='lastattempts' style={{width:'100%',height:'100%-100px', boxSizing:'border-box'}}>
                  {personalArr.map(person=>(
                  <div key={Object.keys(person)} style={{width:'100%',heigth:'45%',backgroundColor:'black',padding:'5px 30px',boxSizing:'border-box'}}>
                    <div style={((personalArr.indexOf(person)+1) % 2 == 0)? black:ash}>
                      <div style={{width:'20%',display:'flex',justifyContent:'space-around'}}>
                        <p>{personalArr.indexOf(person)+1}</p>
                        <div style={{display:'flex'}}>
                          <p className='datestring'>{person[Object.keys(person)]['Timestamp'].toDate().toDateString()}</p>
                          <p className='slashtime'> / </p>
                          <p className='localstring'>{person[Object.keys(person)]['Timestamp'].toDate().toLocaleTimeString()}</p>
                        </div>    
                      </div>
                      <div style={{width:'80%',display:'flex',justifyContent:'space-around'}}>
                        <p style={{textAlign:'center',width:'33.3%'}}>{person[Object.keys(person)]['username']}</p>
                        <p style={{textAlign:'center',width:'33.3%'}}> Word Per Minute: {person[Object.keys(person)]['word']}</p>
                        <p style={{textAlign:'center',width:'33.3%'}}> Accuracy: {person[Object.keys(person)]['accuracy']}</p>
                      </div>
                    </div>
                  </div>))}
                </div>
              </div>
  

               <div style={{width:'90%',heigth:'50%',margin:'35px auto 0px', boxSizing:'border-box'}}>
                <p className='attempts' style={{width:'50%',margin:"0px auto",textAlign:'center',fontSize:'25px',height:'40px',paddingBottom:'25px'}}>{(pArraylength == 1)? 'Best Attempt':`Best ${pArraylength} Attempts`}</p>
                <div style={{width:'100%',height:'calc(100%-100px)', boxSizing:'border-box'}}>
                  {BestScoreArray.map(bestscore=>(
                  <div key={Object.keys(bestscore)} style={{width:'100%',heigth:'45%',backgroundColor:'black',padding:'5px 30px',boxSizing:'border-box'}}>
                    <div style={((BestScoreArray.indexOf(bestscore)+1) % 2 == 0)? ash:black}>
                      <div style={{width:'20%',display:'flex',justifyContent:'space-around'}}>
                        <p>{BestScoreArray.indexOf(bestscore)+1}</p>
                        <div style={{display:'flex'}}>
                          <p className='datestring'>{bestscore[Object.keys(bestscore)]['Timestamp'].toDate().toDateString()}</p>
                          <p className='slashtime'> / </p>
                          <p className='localstring'>{bestscore[Object.keys(bestscore)]['Timestamp'].toDate().toLocaleTimeString()}</p>
                        </div>   
                      </div>
                      <div style={{width:'80%',display:'flex',justifyContent:'space-around'}}>
                        <p style={{textAlign:'center',width:'33.3%'}}>{bestscore[Object.keys(bestscore)]['username']}</p>
                        <p style={{textAlign:'center',width:'33.3%'}}> Word Per Minute: {bestscore[Object.keys(bestscore)]['word']}</p>
                        <p style={{textAlign:'center',width:'33.3%'}}> Accuracy: {bestscore[Object.keys(bestscore)]['accuracy']}</p>
                      </div>
                    </div>
                  </div>))}
                </div>
              </div>
    
  </div>
  
</div>


/*else{
  return <div className='recorddiv'>
            <div style={{width:'80%',display:'flex',justifyContent:'center',margin:'15px auto 45px',height:'55px'}}>
              <p><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99l1.5 1.5z"/></svg></p>
              <p className='records' >MY RECORDS</p>
            </div>
            <p style={{margin:'50px auto',width:'50%',textAlign:'center',fontSize:'25px'}}>You have not attempted yet</p>
          </div>
}*/
    
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