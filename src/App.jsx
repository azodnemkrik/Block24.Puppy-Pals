import { puppyList } from "./data.js"
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setfeatPupId] = useState(null)

  console.log(puppies)

  return (
    <div>
      {
        puppies.map((puppy) => {
          return <p onClick={()=>{setfeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        })
      }
      <p>{featPupId}</p>
      </div>
  )
}

export default App
