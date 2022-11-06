import React, { useState } from 'react'
import './Accorion.css'
import data from '../../data/data.json'
export function Accordion({ setdata , objdata }) {
  const [clicked, setclicked] = useState(false)
  const [disable, setdisable] = useState() 
  function toggle(index) {
      if (clicked === index) {
        return setclicked(null)
      }
      setclicked(index)
  }


  function handleClick(val , c ) {
    
   let sahi =    objdata.find(e => e.value.id === val.id )
   if (sahi) {

     return
   }

      setdata (
        
  [ ...objdata  ,  { c : c , value : val } ]

        )
  }
  return (
    <div>
      {data.map((item  , i ) => {
         return (
            <div key={i} >
            <div onClick={()  => toggle(i) }  className = 'Accordion-button' >  
               <div> {item.name}</div>
              <div> { clicked === i ? '-' : '+'  } </div>
                 </div>
             <div className='options' >
              {item.value.map((e) => {
                 return ( 
                 clicked === i ?   <div key={e.id} className = ' Category-Adder' >  
                 
                 
                  <div className="details-Container">
                    <div className="img-contianer">
                      <img src= {e.avatar} alt="" />
                    </div>
                    <div className="text-Container">
                      <h3>{e.name}</h3>
                       <h6> {e?.yrs} yrs of Exp   </h6>
                    </div>
                  </div>

                    <button className='Add_button'  onClick={()  => handleClick(e , item.name)} > Add </button>
                  
                 
                 </div> : null

                 )
              } )}
             </div>
            </div>
         )
      } )}

    </div>
  )
}

