import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'



const data = [
  {
    pName: 'Laptop',
    price: 600
  },
  {
    pName: 'Mobile',
    price: 80
  },
  {
    pName: 'PC',
    price: 1000
  },
]

const updatedData = [
  {
    pName: 'Laptop',
    price: 600
  },
  {
    pName: 'Mobile',
    price: 80
  },
  {
    pName: 'PC',
    price: 1000
  },
  {
    pName: 'Console',
    price: 1000
  },
]





function App() {

  const [prod, setProd] = useState([])


  
  useEffect(() => {
    const importdata = data
    setProd(importdata)
  }, [])
  

  function refreshData() {
    setProd(updatedData)
  }


  return (
    <div>
      {
        prod.map((element, i) => (
          <div className='product' key={`product-${i}`}>
            <h2>name: {element.pName}</h2>
            <h3>price: {element.price}</h3>
          </div>
        ))
      }

      <button onClick={refreshData}>refresh data</button>
    </div>
  )
}

export default App;
