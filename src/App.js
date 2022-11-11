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

 <div className='multistepper' > 
      <ul className="form-stepper form-stepper-horizontal text-center mx-auto pl-0">
         
            <li className="form-stepper-active text-center form-stepper-list" step="1">
                <a className="mx-2">
                    <span className="form-stepper-circle">
                        <span>1</span>
                    </span>
                    <div className="label">Create Project</div>
                </a>
            </li>
            
            <li className="form-stepper-unfinished text-center form-stepper-list" step="2">
                <a className="mx-2"  >
                    <span className="form-stepper-circle text-muted">
                        <span>2</span>
                    </span>
                    <div className="label text-muted">Add Team</div>
                </a>
            </li>
    
            <li className="form-stepper-unfinished text-center form-stepper-list" step="3">
                <a className="mx-2">
                    <span className="form-stepper-circle text-muted">
                        <span>3</span>
                    </span>
                    <div className="label text-muted">Preview & Hire</div>
                </a>
            </li>
        </ul>

        </div>
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
          <TeamMembers/>
        </div>
      </div>
    </div>
  );
}

export default App;
