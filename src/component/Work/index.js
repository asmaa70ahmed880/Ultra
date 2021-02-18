import React,{Component} from 'react'
import './style.js'
import {Worksection,Worktitle,Workfirst,Particon,Parttitle,Partline,Partdesc,Partwork,Worklast,Worktitlespan}from './style.js'
import axios from 'axios'
class Work extends Component{
    state={
        works:[]
    }
    componentDidMount(){
        axios.get('Js/data.json').then(res=>{this.setState({works:res.data.works})});
    }
    render(){
        const {works}=this.state;
        const worklist=works.map((workitem)=>{
            return(
            <Partwork first={workitem.id} key={workitem.id}>
            <Particon className={workitem.icon_name}></Particon>
            <Parttitle>{workitem.title}</Parttitle>
            <Partline/>
            <Partdesc>
              {workitem.body}
            </Partdesc>
            </Partwork>  )
        })
    return(
      
          <Worksection>
            <div class="container">
                <Worktitle><Worktitlespan>My</Worktitlespan> Work</Worktitle>
            
                
              {worklist}
                
              
                
            </div>
        </Worksection>
    
    )
}
}
export default Work