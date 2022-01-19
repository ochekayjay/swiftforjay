import React, {useContext, useState, useEffect, Fragment} from 'react';
import './buttonholder.css';
import {Statecontext} from './Statecontext';

function Buttonholder() {
    const [timer, setTimer] = useState('0:00')
    const [starter, setstarter] = useContext(Statecontext).starter;
    const [timeno, settimeno] = useContext(Statecontext).timeno;
    const [interval, setinterval] = useState()
    
    var intervalID;
    function fortimeno(){
        settimeno(prev => prev+1)
    }

    useEffect(() => {
        
        if(starter){
             
           intervalID =  setInterval(fortimeno,1000);
            
           setinterval(intervalID)
           console.log(intervalID)
        }
        else{
            setTimer('0:00');
            clearInterval(interval);            
    }
        
    },[starter])

    useEffect(() => {
        if(timeno == 0){
            setTimer('0:00')
        }
        
        else if(timeno<10){
            setTimer(`0:0${timeno}`)
        }
        else if(timeno>= 10 && timeno < 60){
            setTimer(`0:${timeno}`)
        }
        else if(timeno >= 60){
            setstarter(false)
            setTimer('1:00')
            
        }
        
    }, [timeno])    
        //console.log('settime should work now')
        //setInterval(run, 60000)
        return (
            <Fragment>
                
                <div className='timer'>{timer}
                </div>
            </Fragment>
        )
    
    
}

export default Buttonholder;