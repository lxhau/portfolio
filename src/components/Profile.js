import { makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito'
    },
    wrap: {
        display: 'flex',
        justifyContent: 'left',
        height: '80vh',
        width: '80vw',
        background: 'rgba(31, 28, 26, 0.4)',
        borderRadius: '0.5rem',
        backdropFilter: "blur(0.5rem)"
    },
    portrait: {
        display: 'flex',
        justifyContent: 'center',
        height: '60vh',
        width: '20vw',
        background: 'none',
        borderRadius: '0.8rem',
        backdropFilter: "blur(0.5rem)",
        margin: '10vh',
        borderColor: "#FFF"
    },
    img_portrait: {
        display: 'flex',
        zIndex: 1,
        justifyContent: 'center',
        height: '60vh',
        width: '20vw',
        background: '#FFF',
        borderRadius: '0.8rem',
        margin: '14vh',
        marginLeft: '-47vh',
        objectFit: 'cover',
        objectPosition: '100% 0'
    },
    icon: {
        color: '#FFF',
        fontSize: '2rem'
    },
    colorText: {
        color: '#FFF',
        fontSize: '4rem',
        zIndex: 1,
        margin: '25vh',
        marginLeft: '-25vh',
        fontFamily: 'Roboto',
        textShadow: '4px 6px 11px #5f5f5f'
    },
    name: {
        justifyContent: 'left',
        color: '#fed81b',
        fontSize: '4.4rem',
        zIndex: 1,
        margin: '11vh',
    },
    miniText: {
        color: '#fff',
        fontSize: '1rem',
        margin: '5px',
    }
}))

export default function Profile() {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <div className={classes.wrap}>
                <div className={classes.portrait} />
                <img className={classes.img_portrait}
                    src={process.env.PUBLIC_URL + '/assets/IMG_1707 .jpg'} />

                <h1 className={classes.colorText} >L E X U A N
                    <span className={classes.miniText}>Software Engineering</span> <br />
                    <span className={classes.name}>H A U</span>
                </h1>

                <div>
                    
                </div>
            </div>
        </div>
    );
}

