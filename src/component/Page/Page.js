import React,{Component} from 'react'
import About from './../About'

import Footer from './../Footer'
import Home from '././Home'

import Portfolio from './../Portfolio'
import Profile from './../Profile'
import Socialmedia from './../Socialmedia'
import Work from './../Work'


class Page extends Component {
  render(){
  return (
    <div>
    
      <Home/>
      <Work/>
      <Portfolio/>
 
    <Profile/>
    <About/>
    <Socialmedia/>
   
    <Footer/>
    
  

    <Socialmedia/>
  

    </div>
  );}
}

export default Page;
