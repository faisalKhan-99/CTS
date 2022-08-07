import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'



const useStyles= makeStyles((theme)=>({
    root:{
        minHeight:'100vh',
        backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/13250.jpg' })`,
    },
}))
export default function Home() {
    const classes = useStyles()
    
        return (
          
                <div style={{width:'100vh',minHeight:'100%'}}>
                     <h1 color='white'>Homee</h1>
                     <img src={require('../assets/13250.jpg')} style={{minHeight:'100%',width:'100%'}}></img>
                </div>
        )
    
}
