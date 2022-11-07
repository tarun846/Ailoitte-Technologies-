import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Fetchproduct } from './redux/actions/producaction';
import { Accordion } from './Components/Accordion';
import { Nav } from './Components/Navbar';
import { TeamMembers } from './Components/TeamMembers';

function App() {
  const dispatch = useDispatch()
 
  useEffect(() => {
  dispatch(Fetchproduct())
  }, [dispatch])
  
  return (
    <div>
      <Nav />
      <div className="grid">
        <div className="Categories">
          <h2> Categories </h2>
          <Accordion/>
          </div>
          <div className="TeamMembers">
           <div className='flex' style={{"justifyContent" : 'space-between' }}  > 
               <h2> Team Members </h2>
               
               <button className='right_btn' > Next  </button>
              </div>
          <TeamMembers  />
        </div>
      </div>
    </div>
  );
}

export default App;
