import React,{Component} from 'react'
import {Socialmed,Socialpspan2,Socialpspan1,Socialp,Socialicon,Social} from './style.js'
import axios from 'axios'
class  Socialmedia extends Component{
    state={
        social:[]
    }
    componentDidMount(){
        axios.get('Js/data.json').then(res=>{this.setState({social:res.data.social})});
    }
    render(){
        const {social}=this.state;
        const sociallist=social.map((socialitem)=>{
            return(
               
                <Social item={socialitem.id} key={socialitem.id}>
                <Socialicon className={socialitem.icon}></Socialicon>
                <Socialp>
                    <Socialpspan1>{socialitem.title}</Socialpspan1>
                    <Socialpspan2>{socialitem.body}</Socialpspan2>
                </Socialp>
            </Social>
        )})
    return(
        <Socialmed>
            
         {sociallist}
         
            
         
        </Socialmed>
    )
}}
export default Socialmedia