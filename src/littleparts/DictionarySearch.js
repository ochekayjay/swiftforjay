import React, {useState,useContext,useEffect} from 'react';
import {Statecontext} from '../Statecontext';
import './dictsearch.css';
import {Link} from 'react-router-dom'





 export default function Searchspace({ buttcolor, setButtcolor}){
    const[val, setVal] = useState('')
    const[iccolor, seticcolor] = useState({display:'inline' })
    const [dicapi, setdicapi] = useContext(Statecontext).dicapi
    const[dicclicked, setdicclicked] = useContext(Statecontext).dicclicked




    const change = (e)=>{
     setVal(e.target.value)
     setButtcolor([{col0:'#bbb'},{col1:'white'},{col2:'white'},{col3:'white'}])
     seticcolor({
        backgroundColor: buttcolor[0].col0,
        width:'43px',
        height:'43px',
        borderRadius:'15px',
        padding:'2.5px',
        boxSizing:'border box',
        paddingLeft:'2px'
      })
      if(e.target.value == ''){
          seticcolor({display:'inline'})
      }
      
    }
/*useEffect(() => {
    if(val==''){
        setdicclicked(false)
      }
}, [val])*/


    const whenclicked = async()=>{
        try {
            let data = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + val);
        let maindata = await data.json()
        console.log(maindata)
        if (!Array.isArray(maindata)){
            throw new SyntaxError('word not found in our library')
         }
        let usefulData = maindata[0]
        setdicapi(usefulData)
        seticcolor({display:'inline'})
        setdicclicked(true)
        console.log('in clicked')
        } catch (error) {
            alert(error.message)
        }
    }

    return(
        <div className='buttonholder' >
            
                <input type='text' style={{width:'70%', height:'40px', borderRadius:'17px', border:'2px solid pink', backgroundColor:'white', color:'black', paddingRight:'14px',marginRight:'5px'}}  value= {val} placeholder='search for words here' onChange={change}>
                </input>
                <div className='searchicon' style={iccolor} onClick={val && whenclicked}><Link to= 'search'><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg></Link></div>
                
        </div>
    )
}