import React, {useState, createContext} from 'react';


export const Statecontext = createContext();

export const StateHolder = (props)=> {
  const [green, setgreen] = useState(0)
  const [red, setred] = useState(0)
  const [starter, setstarter] = useState(false)
  const [toggleRequest, setToggleRequest] = useState(false)
  const [timeno, settimeno] = useState(0);
  const [appcss, setappcss] = useState({width:'100%',height:'80%'})
  const [dicapi, setdicapi] = useState('')
  const [words, setWord] = useState([])
  const [hold, sethold] = useState([])
  const [index, setindex] = useState(0)
  const[dicclicked, setdicclicked] = useState(false);
  const [accuracy, setaccuracy] = useState(0);
  const [isLeader, setisleader] = useState(false);
  const [isRecord, setisrecord] = useState(false);
  const [alldataLoad, setAlldataLoad] = useState(false);
  


  return (
    <Statecontext.Provider value ={{green:[green, setgreen], red:[red,setred],starter:[starter,setstarter]
    ,toggle:[toggleRequest,setToggleRequest],timeno:[timeno,settimeno],appcss:[appcss, setappcss],dicapi:[dicapi, setdicapi],
    words:[words,setWord], hold:[hold,sethold],index:[index,setindex],dicclicked:[dicclicked, setdicclicked],
    acc:[accuracy,setaccuracy], isLeader:[isLeader, setisleader],isRecord:[isRecord, setisrecord],
    alldataLoad:[alldataLoad,setAlldataLoad]}}>
       {props.children}
    </Statecontext.Provider>
  )
      
  
}