import React, { useState } from 'react'
import firebase from './firebase';

function App() {
  const [schools,setSchools] = useState([])
  const [loading, setLoading] = useState(false)

  const ref = firebase.firestore().collection('schools')

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
