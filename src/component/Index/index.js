import React,{Component} from 'react'
import About from './../About'

import Footer from './../Footer'
import Home from './../Home'

import Portfolio from './../Portfolio'
import Profile from './../Profile'
import Socialmedia from './../Socialmedia'
import Work from './../Work'
import Contact from './../Contact'

class Index extends Component {
  render(){
  return (
    <div>
    
      <Home/>
      <Work/>
      <Portfolio/>
 
    <Profile/>
    <About/>
    <Socialmedia/>
    <Contact/>
   
    <Footer/>
    
  

  

    </div>
  );}
}

export default Index;
