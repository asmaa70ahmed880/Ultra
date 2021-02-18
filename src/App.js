import React,{Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom' 
import Contact from './component/Contact'
            
import Navbar from './component/Navbar'
import Index from './component/Index'


class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <Navbar/>
<Route exact path="/" component={Index}/>

  <Route path="/Contact" component={Contact}/>

    </BrowserRouter>
  );}
}

export default App;
