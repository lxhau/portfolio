import { makeStyles } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles((them)=>({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito'
      },
}))
export default function Footer(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
        </div>
    )
}