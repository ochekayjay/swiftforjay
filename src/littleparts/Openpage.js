import React, { useState, useEffect,useContext} from 'react';
import './openpage.css';
import { Statecontext } from '../Statecontext';




export default function Opener({setopenit, password,setpassword,userName,setuserName,passWordsList,userNameList }) {

    const [holderOne, setholderOne] = useState('')
    const [holderTwo, setholderTwo] = useState('')
    //const [alldataload,setAlldataLoad] = useContext(Statecontext).alldataLoad;
    

    useEffect(() => {

        setuserName(holderOne)
        setpassword(holderTwo)
        
    }, [holderOne,holderTwo])

    const onchangeOne = event =>{
        setholderOne(event.target.value)
    }

    const onchangeTwo = event =>{
        setholderTwo(event.target.value);
    }

    const submit = (event) =>{
        event.preventDefault()
        if(password == '' || userName == ''){
             alert('fill in your details')
        }

        else if( userNameList.includes(userName) && (passWordsList[userNameList.indexOf(userName)]!= password)){
           alert('username already taking by someone else')
        }
        else if( passWordsList.includes(password) && (userNameList[passWordsList.indexOf(password)]!= userName)){
            alert('password already taking by someone else')
         }

        else{
            setopenit(true);
        }
    }

    




    return(
        <div style={{width:'100%', height:'60vh',fontSize:'35px',boxSizing:'border-box',backgroundColor:'white'}}>
            <form className='formhold' onSubmit={submit}>
                <input className='formholder'  onChange={onchangeOne}  type='text' placeholder='enter your username'style={{margin:'3% auto',height:'20%',width:'60%', color:'white', backgroundColor:'#15171e', borderRadius:'10px'}} spellCheck={false}>

                </input>


                <input className='formholder' onChange={onchangeTwo}  type='password' placeholder='enter your password'style={{margin:'3% auto',height:'20%',width:'60%' ,color:'white', backgroundColor:'#15171e', borderRadius:'10px'}}
                spellCheck={false}>

                </input>


                <button className = 'submitopener' value='submit' style={{width:'30%',marginTop:'7%', height:'13%',margin:'7% auto', backgroundColor: 'white',borderRadius:'20px'}}>
                 submit
                </button>
            </form>
        </div>
    )
}