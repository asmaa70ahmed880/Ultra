import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './style.js'
import {Imagerapper,Portfoliodiv,Portfoliotitle,Portfoliospan,Portfoliolist,Portfolioitem,PortfolioItemactive,Box,Boximg,Boxoverlay,Boxoverlayspan} from './style.js' 


const Portfolio=()=>{
   const [images,setImage]=useState([]);
   useEffect(()=>{
    axios.get('Js/data.json').then(res=>{setImage(res.data.portfolio)})},[])
   
   const PortfilioImage=images.map((imageItem)=>{
    return(
        <Imagerapper key={imageItem.id}>
    <Boximg  src={imageItem.image} alt=""/>
    <Boxoverlay>
        <Boxoverlayspan>
            Show Image
        </Boxoverlayspan>
    </Boxoverlay>
</Imagerapper>  )
})

    return(
        <Portfoliodiv>
            <Portfoliotitle><Portfoliospan>My</Portfoliospan> Portfolio</Portfoliotitle>
            <Portfoliolist>
                <Portfolioitem active>All</Portfolioitem>
                <Portfolioitem>HTML</Portfolioitem>
                <Portfolioitem>Photoshop</Portfolioitem>
                <Portfolioitem>Wordpress</Portfolioitem>
                <Portfolioitem>Mobile</Portfolioitem>
            </Portfoliolist>
            
            <div>
         
              
          
           {PortfilioImage}
                
            </div>
            
        </Portfoliodiv>
        
    )
}

export default Portfolio