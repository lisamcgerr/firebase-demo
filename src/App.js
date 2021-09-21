import React, { useState, useEffect } from 'react'
import firebase from './firebase';

function App() {
  const [schools,setSchools] = useState([])
  const [loading, setLoading] = useState(false)

  const ref = firebase.firestore().collection('schools')
  console.log("ref", ref)


  // querySnapshot from firebase method updates in realtime
  function getSchools() {
    setLoading(true)
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((document) => {
        items.push(document.data())
      })
      setSchools(items)
      setLoading(false)
    })
  }

  useEffect(() => {
    getSchools()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Schools</h1>
      {schools.map((school) => (
        <div key={school.id}>
          <h2>{school.title}</h2>
          <p>{school.population}</p>
          <p>{school.colors}</p>
        </div>  
      ))}
    </div>

  );
}

export default App;
