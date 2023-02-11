import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// React component
// just a function

// functional component
// const Greeting = props => {
//   console.log(props)
//   return <h1>Hello {props.name} from {props.dimension}</h1>
// }

// common: destructure the function parameter 
// const Greeting = ({ name, dimension }) => {
//   return <h1>Hello {name} from {dimension}</h1>
// }

// class component
// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello</h1>
//   }
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  // <>
  //   <Greeting name='Jonas' dimension='earth-c-137' />
  //   <Greeting name='Jan' dimension='earth-c-137' />
  // </>
  <App />

)
