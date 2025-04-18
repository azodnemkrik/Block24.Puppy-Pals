import { puppyList } from "./data.js"
import { useState } from 'react'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setfeatPupId] = useState(null)
  console.log(puppies)

  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log("featuredPup", featuredPup)

  return (
    <div>
      {puppies.map((puppy) => {
        return (
          <p onClick={() => {setfeatPupId(puppy.id)}} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
      {featPupId && (
        <div>
          <hr/>
          <div className="featurePupDiv">
            <h3>{featuredPup.name}</h3>
            <ul className="puppyDataList">
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
              <li>Cute?: {featuredPup.isCute}</li>
              <li>Tricks: 
                <ul>{featuredPup.tricks.map((trick)=>{
                  return (
                    <li>{trick.title}</li>
                  )
              })}</ul>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App
