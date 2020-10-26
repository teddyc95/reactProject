const { Component } = require("react")

import React from 'react'
import ClickCounter from './js/components/ClickCounter'
import HoverCounter from './js/components/HoverCounter'

 class App extends Component {
     render() {
         return (
             <div className = "App">
                 <ClickCounter/>
                 <HoverCounter/>
             </div>
         )
     }
 }

 export default App 