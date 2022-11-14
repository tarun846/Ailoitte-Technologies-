import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setproductdata } from "../../redux/actions/producaction";
import { dataSelector } from "../../redux/reducers/Fetchproduct";
import "./Accorion.css";

const AccordionButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  cursor: pointer;
  background-color: #0169fe;
  color: white;
  margin-top: 1rem;
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.4);
  backdrop-filter: blur(16px);
`;
const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function Accordion({ setdata, objdata }) {
  const [clicked, setclicked] = useState(false);
  const dispatch = useDispatch();

  const data = useSelector(dataSelector);

  function toggle(index, val) {
    if (clicked === index) {
      return setclicked(null);
    }
    setclicked(index);
  }

  function handleClick(val, c) {
    let newobj = {
      value: val,
    };

    dispatch(setproductdata(newobj, c));
  }

  if (!data || data.length === 0) {
    return <h1>loading... </h1>;
  }
  return (
    <div>
      {data.map((item, i) => {
        return (
          <div key={i}>
            <AccordionButton onClick={() => toggle(i)}>
              <div> {item[i].Category}</div>
              <div> {clicked === i ? "-" : "+"} </div>
            </AccordionButton>
            <Options>
              {item.map((e) => {
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
                      onClick={() => handleClick(e, e.Category)}
                    >
                      {" "}
                      Add{" "}
                    </button>
                  </div>
                ) : null;
              })}
            </Options>
          </div>
        );
      })}
    </div>
  );
}
