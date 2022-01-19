import React, {useContext, Fragment} from 'react';
import './refresh.css';
import {Statecontext} from './Statecontext';

function Refresh({setArra, setLoading}) {
    const [words, setWord] = useContext(Statecontext).words
  const [hold, sethold] = useContext(Statecontext).hold
  const [index, setindex] = useContext(Statecontext).index

    const tugfunc =  async() => {
        setLoading(true)
        setArra('')
        setindex(0)
        setWord([])
        sethold([])
         let res = await fetch("https://random-word-api.herokuapp.com/word?number=250&swear=0")
         let dat = await res.json();
         setArra(dat)
         setLoading(false)
       console.log(dat);}

    return (
        <Fragment>
            <div className='button' onClick={tugfunc}>refresh</div>
        </Fragment>
    )
}

export default Refresh;
