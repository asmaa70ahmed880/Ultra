import React,{Component} from 'react'
import axios from 'axios'
import './style.js'
import {Profileskills,Spanweb,Profiletitle,Profiled,Profilelist,Profileitem,Profilespan,Skills,Skillsdesc,Bar,Bartitle,Perc,Parent,Parentspan,Spansp,Skillstitle,Profiletitlespan,Skillstitlespan} from './style.js'
class Profile extends Component{
    state={
        skills:[]
    }
    componentDidMount(){
        axios.get('Js/data.json').then(res=>{this.setState({skills:res.data.Profile})});
    }
    render(){
        const {skills}=this.state;
        const skilllist=skills.map((skillitem)=>{
            return(
                <Bar>
                        <Bartitle>{skillitem.title}</Bartitle>
                        <Perc>{skillitem.percentage}</Perc>
                        <Parent>
                            <Parentspan first={skillitem.id}></Parentspan>
                        </Parent>
                    </Bar> )
        })
    return(
           

        <Profileskills>
            <div class="container">
                <Profiled>
                    <Profiletitle><Profiletitlespan>My </Profiletitlespan>Profile</Profiletitle>
                    <Profilelist>
                        <Profileitem>
                            <Profilespan>Name</Profilespan>
                            Hamza Nabil
                        </Profileitem>
                        <Profileitem>
                            <Profilespan>Birthday</Profilespan>
                            21/1/1996
                        </Profileitem>
                        <Profileitem>
                            <Profilespan>Address</Profilespan>
                            Ain shams
                        </Profileitem>
                        <Profileitem>
                            <Profilespan>Phone</Profilespan>
                            4444 5555 6666
                        </Profileitem>
                        <Profileitem>
                            <Profilespan>Email</Profilespan>
                            hamza@hamza.com
                        </Profileitem>
                        <Profileitem>
                            <Profilespan>Website</Profilespan>
                            <Spanweb class="web">www.google.com</Spanweb>
                        </Profileitem>
                    </Profilelist>
                </Profiled>
                
                <Skills>
                    <Skillstitle>Some <Skillstitlespan>skills</Skillstitlespan></Skillstitle>
                    <Skillsdesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </Skillsdesc>
                
                    
               {skilllist}
                    
                 
                </Skills>
                
            </div>
        </Profileskills>
    )
}
}
export default Profile