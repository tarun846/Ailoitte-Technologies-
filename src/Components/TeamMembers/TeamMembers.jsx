import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { Deletaccord, Leadaccord } from '../../redux/actions/producaction';
import Dots from '../../assets/dots-icon.svg';
import king from '../../assets/crown.svg';
import './TeamMembers.css';

export function TeamMembers() {
  const datas = useSelector((state) => state.DataReducer)
  let actualdata = Object.values(datas)  
 
    useEffect(() => {
       localStorage.setItem('sahi' , JSON.stringify(datas) )
    } ,[datas] )
    

    
  return (
    <div className="team-categoryContainer">
      {  actualdata.map((e, i  ) => {
         
          if ( e.length  > 0 ) {
             return <TeamCategory data={e} key={i}  name = {e[0].value.Category} />
    
          }
          return  null  
      }) }
    </div>
  );
}

function TeamCategory({ data , name  }) {
  const [clicked, setclicked] = useState(false);
  const dispatch = useDispatch('papaocus',[]);
  function toggle(index) {
    if (clicked === index) {
      return setclicked(false);
    }
    setclicked(index);
  }

  function handleremove(id, name) {
    dispatch(Deletaccord(id, name));
    setclicked(false)
    
  }

  function handlelead(id, name) {
    dispatch(Leadaccord(id, name));
    setclicked(false)
  }

  if (data.length === 0) {
    return;
  }

  return (
    <>
      <div>
        <div className="team-category">
          <div className="category-text-Container">
            <h3> {name} </h3>
          </div>

          {data?.length > 0
            ? data?.map((e, i) => {
                return (
                  <div
                    key={e.value.id}
                    className="details-Container  categorycontainerenhacment"
                  >
                    <div className="flex">
                      <div className="img-contianer">
                        <img className="avatar" src={e.value.avatar} alt="" />
                        {data[i].flag === true ? (
                          <img src={king} className="crown" alt="king" />
                        ) : null}
                      </div>
                      <div className="text-Container">
                        <h3>{e.value.name}</h3>
                        <h6> {e?.value.yrs} yrs of Exp </h6>
                      </div>
                    </div>
                    <div>
                      <button
                        className={clicked === i ? ' dots wrapper ' : 'dots'}
                        onClick={() => toggle(i)}
                      >
                        <img src={Dots} alt="" className="" />
                      </button>
                    </div>

                    {clicked === i ? (
                      <div className="box  team-category ">
                        <button onClick={() => handlelead(e.value.id, name)}>
                          Lead
                        </button>
                        <br />
                        <button onClick={() => handleremove(e.value.id, name)}>
                          Remove
                        </button>
                      </div>
                    ) : null}
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}
