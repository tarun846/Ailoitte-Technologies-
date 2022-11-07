import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setBackend,
  setfrontend,
  setUiux,
} from '../../redux/actions/producaction';
import './Accorion.css';

export function Accordion({ setdata, objdata }) {
  const [clicked, setclicked] = useState(false);
  const dispatch = useDispatch();
  const data =  useSelector(state =>  state.productfetch)



  function toggle(index) {
    if (clicked === index) {
      return setclicked(null);
    }
    setclicked(index);
  }

  function handleClick(val, c) {
    let newobj = {
      value: val,
    };

    if (c === 'Frontend Developer') {
      dispatch(setfrontend(newobj));
    } else if (c === 'Backend Developer') {
      dispatch(setBackend(newobj));
    } else if (c === 'UI UX') {
      dispatch(setUiux(newobj));
    }
  }

  if ( !data || data.length === 0) {
         return <h1>loading... </h1>
  }
  return (
    <div>
      {data.map((item, i) => {
        return (
          <div key={i}>
            <div onClick={() => toggle(i)} className="Accordion-button">
              <div> {item.name}</div>
              <div> {clicked === i ? '-' : '+'} </div>
            </div>
            <div className="options">
              {item.value.map((e) => {
                return clicked === i ? (
                  <div key={e.id} className=" Category-Adder">
                    <div className="details-Container">
                      <div className="avatar-contianer">
                        <img src={e.avatar} alt="" />
                      </div>
                      <div className="text-Container">
                        <h3>{e.name}</h3>
                        <h6> {e?.yrs} yrs of Exp </h6>
                      </div>
                    </div>

                    <button
                      className="Add_button"
                      onClick={() => handleClick(e, item.name)}
                    >
                      {' '}
                      Add{' '}
                    </button>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
