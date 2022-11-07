import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { Deletaccord, Leadaccord } from '../../redux/actions/producaction';
import Dots from '../../assets/dots-icon.svg';
import king from '../../assets/crown.svg';
import './TeamMembers.css';
import useLocalStorage from '../../hook/useLocalstaragehook';

export function TeamMembers({ data }) {
   const sahi = useLocalStorage('key' , [] );
  const frontendstate = useSelector((state) => state.frontend);
  const backendstate = useSelector((state) => state.backend)
  const Uiuxstate = useSelector((state) => state.uiux);
  let datastored =    [frontendstate, backendstate, Uiuxstate];

  return (
    <div className="team-categoryContainer">
      {datastored.map((e, i , cmparray ) => {
        if (e.data.length === 0) return null ;
        return <TeamCategory data={e.data} key={i} name={e.value} cmparray = {cmparray} />;
      })}
    </div>
  );
}

function TeamCategory({ data, name  ,cmparray }) {
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
