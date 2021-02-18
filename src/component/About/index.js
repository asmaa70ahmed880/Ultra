import React from 'react'
import {Creative, Creativeinfo,Infoanchor,Infodesc,Infodir,Infotitlespan,Infotitle} from './style.js'
const About=()=>{
    return(
        <Creative>
            <div className="container">
                <Creativeinfo>
                    <Infotitle><Infotitlespan>This is</Infotitlespan> Me</Infotitle>
                    <Infodir>Creative Director</Infodir>
                    <Infodesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Infoanchor href="#">explicabo</Infoanchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Infodesc>
                    <Infodesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    </Infodesc>
                </Creativeinfo>
            </div>
        </Creative>
    )
}
export default About