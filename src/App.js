import React, { useState } from 'react';
import { Accordion } from './Components/Accordion';
import {Nav} from "./Components/Navbar" ;
import { TeamMembers } from './Components/TeamMembers';
import data from './data/data.json'
function App() {
    const [objdata, setdata] = useState([])
    return (
        <div>
            <Nav/>
     
          <div className='grid' >
         <div className='Categories' >
          <h2> Categories </h2>
         <Accordion objdata = {objdata} setdata = {setdata}  />
         </div>

          <div className='TeamMembers' >
           <h2> Team Members </h2> 
          <TeamMembers data = {objdata} />
          </div>
      
          </div>

        </div>
    );
}

export default App;