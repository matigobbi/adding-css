import './index.css'
import Profile from './Profile'

function App(props) {
  const user = {
    name: 'Rick Sanchez',
    email: 'rick@c-137.com',
    picture: 'https://i.imgur.com/GjfXzVU.jpeg'
  }
  // here the jsx is returned
  return (
    <>
      <h1>🦄 Profile Page 🦄</h1>
      <Profile data={user}/>
    </>
  )
}

export default App
