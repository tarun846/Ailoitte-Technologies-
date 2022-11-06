import React, { useState } from 'react'
import './TeamMembers.css'
export function TeamMembers({data}) {
  const [value, Setvalue] = useState(data.sort( (a , b ) => a - b   ))
  if (data.length === 0 ) {
     return <div className='overlay'  >  <h2> Choose your team</h2>  </div>
  }
  let filter  = [ "Frontend Developer"  , "Backend Developer" ,   "UI UX"  ]
  let componj =  []

  for (let i = 0; i < data.length + 2; i++) {
       let datafil = data.filter((e) =>  e.c === filter[i]  )
        componj.push(datafil)
        componj.splice(3, 1)
      }



  return (
 


    <div className='team-categoryContainer' >  
       
       { componj.map(( (e , i ) => {
    console.log(e);
return  <TeamCategory  data  = {e} key = {i}    name =  {e.c}  />
   
  })) }
      
      
     

     
     </div>
  )
}


function TeamCategory(  {data , name} ) {
    
    
  if (data.length === 0) {
     return
  }

       return ( 
          <>
  <div >


  <div className="team-category">
  
  <div className="category-text-Container">
  <h3> {data[0]?.c} </h3>
  </div>
 
 {  data?.length > 0  ? data?.map((e  ) => {
    return  (<div className="details-Container  categorycontainerenhacment">
    <div className="img-contianer">
      <img src= {e.value.avatar} alt="" />
    </div>
    <div className="text-Container">
      <h3>{e.value.name}</h3>
       <h6> {e?.value.yrs} yrs of Exp   </h6>
    </div>
  </div> )
    } )  : null  }



 </div>

  </div>
         

          </>

       )

}