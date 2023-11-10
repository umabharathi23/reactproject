import { useState } from 'react'

const users = [
  { fruits: "Custardapple", id: 1 },
  { fruits: "Banana", id: 2 },
  { fruits: "Orange", id: 3 },
  { fruits: "Mango", id: 4 },
  { fruits: "Pineapple", id: 5 },
  { fruits: "watermelonn", id: 6 },
]

function Fcomponent() {
    const [searchfruit, setSearchfruit] = useState('')
    const [filteredfruit, setFilteredUsers] = useState(users)
  
    const Change = (e) => { 
      const searchTerm = e.target.value;
      setSearchfruit(searchTerm)
  
      const filteredItems = users.filter((user) =>
      user.fruits.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      setFilteredUsers(filteredItems);
    }
  
    return (
      <>
        <input
          type="text"
          value={searchfruit}
          onChange={Change}
          placeholder='enter your favourite fruit here'
        />
        <ul>
          {filteredfruit.map(user => <li key={user.id}>{user.fruits}</li>)}
        </ul>
      </>
    )
  }
  

export default Fcomponent