import './App.css'
import { useState } from 'react'

function App() {

  // const x = useState(0)
  // const val = x[0]
  // const setter = x[1]

  // this is the value and the setter of the state of count
  const [count, setCount] = useState(3)

  const [liked, setLiked] = useState(false)

  // const [name, setName] = useState('Foo')

  // console.log('rerender')

  function handleClick() {
    // console.log('click')
    // count = count + 1 -> ❌ don't mutate state directly

    setCount(count + 1)

    // if you use the current state to calculate the new state you 
    // should use a callback instead
    // setCount((count) => count + 1)
  }

  const likeHandler = () => {
    console.log('likeHandler')
    setLiked(!liked)
  }

  let style = {}
  if (liked) {
    style.backgroundColor = 'green'
  } else {
    style.backgroundColor = 'red'
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <button onClick={handleClick}>Click me 👇</button>
        <h1 style={style}>{liked ? 'this component is liked' : 'this component is not liked'}</h1>
        <button onClick={likeHandler}>Like / Unlike</button>
      </header>
    </div>
  )
}

export default App
