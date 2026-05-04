import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';

function Myapp(){
     return(
          <div>I Love Pakistan New</div>
     )
}

const anotherElement = (
     <a href="https://www.google.com">Google</a>
)

const reactElement = React.createElement(
     'a',
     {'href': 'https://www.google.com', 'target': '_blank'},
     'Click To Visit Google'
);



createRoot(document.getElementById('root')).render(
     //Myapp()
    // anotherElement
   // reactElement
     <App />
)
