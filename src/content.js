import React, {useContext} from 'react';
import Contentholder from './Contentholder';
import Buttonholder from './Buttonholder';
import Refresh from './Refresh';
import { Statecontext } from './Statecontext';
import './content.css';


function Contentmain({Arra, loading, setArra, setLoading}) {
    const appcss = useContext(Statecontext).appcss[0];



    return (
        <div style={appcss} className='contentmain'>
            <Contentholder Arra={Arra} loading={loading}/>
            <div className='butt'>
               <Buttonholder /><Refresh setArra={setArra} loading={loading} setLoading={setLoading}/>
            </div>
        </div>
    )
}

export default Contentmain;