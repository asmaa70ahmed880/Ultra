import React from 'react'
import Footer from './../Footer'
import {Drop,Textarea,Inputsubmit,Inputemail,Inputtext,Forminput,Inputsub,Droptitle,Droptitlespan,Form} from './style.js'
const Contact=()=>{
    return(
        <React.Fragment>
        <Drop>
            <div class="container">
                <Droptitle><Droptitlespan>Drop </Droptitlespan>Me A line</Droptitle>
                <Form action="">
                    <Forminput>
                        <Inputtext type="text" placeholder="Your Name"/>
                        <Inputemail type="email" placeholder="Your Email"/>
                    </Forminput>
                    <Inputsub type="text" class="sub" placeholder="Your Subject"/>
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <Inputsubmit type="submit" value="Send Message"/>
                </Form>
            </div>
        </Drop>
        <Footer/>
        </React.Fragment>
        
    )
}
export default Contact