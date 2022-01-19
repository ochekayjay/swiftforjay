import React, { useState, useEffect, useContext} from 'react';
import './Contentholder.css';
import {Statecontext} from './Statecontext';
import Load from './littleparts/gif';


function Contentholder({ Arra, loading }) {
  const [textstyle, setTextstyle] = useState({0:{color:'black'},1:{color:'black'},2:{color:'black'},3:{color:'black'},4:{color:'black'}})
  const [words, setWord] = useContext(Statecontext).words
  const [hold, sethold] = useContext(Statecontext).hold
  const [index, setindex] = useContext(Statecontext).index
  const [inputText,setinputText] = useState('')
  const [green, setgreen] = useContext(Statecontext).green
  const [red, setred] = useContext(Statecontext).red
  const [starter, setstarter] = useContext(Statecontext).starter
  const timeno = useContext(Statecontext).timeno[0];
  const [empty, setempty] = useState('')
  
//<input type='text' value={jay} className='maininput'/>

//

//const [Index, setIndex] = useState(0);


    const mainstyle = [{
        minWidth: '7px',
        minHeight: '7px',
        backgroundColor:'green'},{
          minWidth: '7px',
          minHeight: '7px',
          backgroundColor:'red'}]
          
const onchange =  (e) =>{
     setinputText(e.target.value)
     setstarter(true)
     console.log('i have set starter to true')
}





const onkeypress = (event)=> {
            //event.preventDefault()
           if(event.code === 'Space'){
            setWord(firstword(Arra,index));
            sethold(inputText.split(' ').filter(wd => wd != ''))      
           }
}



useEffect(  () => {
  if(timeno<60){
        
    if(hold.length>0){
      for(let i = 0;i<hold.length;i++){
        let interimobj = {};
        if(words[i]===hold[i]){
          if(i === hold.length-1){
            setgreen(green+1)
          }
          if(i==0){
        setTextstyle({...textstyle,0:{color:'green'}});
          }
          else if(i==1){
            setTextstyle({...textstyle,1:{color:'green'}});
              }
          else if(i==2){
                setTextstyle({...textstyle,2:{color:'green'}});
                  }
          else if(i==3){
                    setTextstyle({...textstyle,3:{color:'green'}});
                      }
                      else if(i==4){
                        setTextstyle({...textstyle,4:{color:'green'}});
                          }
        
          
          
        }
        else{
          if(i === hold.length-1){
            setred(red+1)
          }
          if(i==0){
            setTextstyle({...textstyle,0:{color:'red'}});
              }
              else if(i==1){
                setTextstyle({...textstyle,1:{color:'red'}});
                  }
              else if(i==2){
                    setTextstyle({...textstyle,2:{color:'red'}});
                      }
              else if(i==3){
                        setTextstyle({...textstyle,3:{color:'red'}});
                          }
                          else if(i==4){
                            setTextstyle({...textstyle,4:{color:'red'}});
                              }
          
        }
                                                         
       }
       console.log(textstyle)
    }
  
    if(hold.length ===5){
      setTextstyle({0:{color:'black'},1:{color:'black'},2:{color:'black'},3:{color:'black'},4:{color:'black'}})
      setindex(previndex=>previndex+5);
      sethold([])
      setinputText('');
    }
  }

  else{
    sethold([]);
    setinputText('');
  
  }
  
  
    
    
  },[hold]
 )


const setwords = (arr,index)=> [arr.slice(index+5,index+10), arr.slice(index+10,index+15)]

const firstword = (arr,index)=> arr.slice(index,index+5);



    
    return (
        
        <div className='main'>
            <div className='textholder'>{console.log(firstword(Arra,index))}
            <p className='jayblock'>{firstword(Arra,index).map((wd)=><span key={firstword(Arra,index).indexOf(wd)} className={wd}  style ={textstyle[firstword(Arra,index).indexOf(wd)]}>{`${wd} `}</span>)}</p>
            {setwords(Arra,index).map((word)=><p key = {setwords(Arra,index).indexOf(word)} className='jayblock'>{word.join(' ')}</p>)}
            </div>
            <div className='divforinput'><input  type='text' className ='inputspace' placeholder='start typing...' onKeyPress={onkeypress} onChange={onchange} value={(timeno<= 60)? inputText:empty} spellCheck={false}/></div>
            
        </div>
    )




  
    


}



    

export  default Contentholder


