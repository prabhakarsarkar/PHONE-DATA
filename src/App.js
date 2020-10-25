import React from 'react';
import Api1 from './components/Api1'
import data from './components/data'
import './App.css'

const App =()=>(
  <>
  <h1 style={{backgroundColor:"blue", height:"100px",textAlign:"center"}}>This is phohe data</h1>
  
  {
    data.map((val)=>{
      return(
        <Api1 
        key={val.id}
          name={val.name}
          src={val.img}
          price={val.price}
        />
      )
    })
  }
  </>
)
 
export default App;
