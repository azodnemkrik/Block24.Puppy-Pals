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
              <li>Is Cute: {featuredPup.isCute ? "Yes" : "No"}</li>
              <li>Tricks: 
                <ul>
                  {
                  //  featuredPup.tricks.length !== 0 ? console.log("SOME") : console.log("NONE")
                  //     trick.length > 0 ? featuredPup.tricks.map((trick)=>{
                  //       return <li>{trick.title}</li>
                  //     })  : <li>None</li>

                  featuredPup.tricks.length !== 0 ? featuredPup.tricks.map((trick)=>{
                          return <li>{trick.title}</li>
                        }) : <li>None</li>
}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App
