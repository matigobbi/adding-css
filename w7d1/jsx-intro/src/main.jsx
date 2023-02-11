import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


// JSX - JavaScript Extended 
// no quotes
const name = 'jonas'
// use {} to render a variable
const element = <h1>Hello {name.toUpperCase()} 👋</h1>

// we can return JSX from functions
// const greet = () => <h1>Hi</h1>

// a jsx structure must have one root element
// const jsxStructure =
//   <div>
//     <div>Hello</div>
//     <div>World</div>
//   </div>

// <></> this is a react fragment
// const jsxStructure =
//   <>
//     <div>Hello</div>
//     <div>World</div>
//   </>

// inline styling in react
const style = {
  backgroundColor: 'green'
}
const elemnentWithCSS = (
  <div className="header">
    <p style={{ backgroundColor: 'pink' }}>
      first tag
    </p>
    <p style={style}>
      second tag
    </p>
  </div>
)

// in jsx : class -> className
// for -> htmlFor  


ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
  // element
  // greet()
  // jsxStructure
  // elemnentWithCSS
)
