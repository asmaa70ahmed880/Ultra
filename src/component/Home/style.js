import styled from 'styled-components'
export const Homesection=styled.div `
    height: 500px;
    background: url('images/Home/home-bg.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
    `

export const Homeinformation=styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    `

 export const Hometitle=styled.h2 `
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;
    `

    export const Homeinfo =styled.h4`
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
    `

    export const Homedesc=styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px
    `

    export const Homedescspan=styled.span`
    color: #000
    `

    export const Homebtn=styled.button`
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
   &:hover {
        background: #fff;
        color: #eb5424
    }
    `




