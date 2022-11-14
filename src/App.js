import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Fetchproduct } from './redux/actions/producaction';
import { Accordion } from './Components/Accordion';
import { Nav } from './Components/Navbar';
import { TeamMembers } from './Components/TeamMembers';
import styled from 'styled-components';

 const Gridcontainer = styled.div`
   display: grid;
  grid-template-columns: 1.5fr 4fr;
  padding: 10px;
 `;
  const CategoriesContainer  = styled.div`
    margin: 0 10px;
  `;
  // const 
   const PrimaryButton = styled.button`
   padding: 8px 3rem;
  color: white;
  border: 5px;
  background-color: #545479;
  cursor: pointer;
   `;

   const FlexWrapper = styled.div`
   display: flex;
    align-items: center;
    justify-content : space-between;
   
   `
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

      <Gridcontainer>
        <CategoriesContainer>
          <h2> Categories </h2>
          <Accordion/>
          </CategoriesContainer>
          <div className="TeamMembers">
           <FlexWrapper   > 
               <h2> Team Members </h2>
               <PrimaryButton > Next  </PrimaryButton>
              </FlexWrapper>
          <TeamMembers/>
        </div>
      </Gridcontainer >
    </div>
  );
}

export default App;
