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
        backdropFilter: "blur(0.5rem)",
    },
    portrait: {
        display: 'flex',
        justifyContent: 'center',
        height: '60vh',
        width: '20vw',
        background: 'none',
        borderRadius: '0.8rem',
        borderColor: "#fed81b",
        position: 'absolute',
        top: '8vh',
        left: '8vh',
        border: '1px solid'
    },

    img_portrait: {
        display: 'flex',
        zIndex: 1,
        justifyContent: 'center',
        height: '60vh',
        width: '20vw',
        background: '#FFF',
        borderRadius: '0.8rem',
        position: 'absolute',
        top: '10vh',
        left: '10vh',
        objectFit: 'cover',
        objectPosition: '100% 0',
        boxShadow: '6px 4px 14px 0px #333333'
    },

    icon: {
        color: '#FFF',
        fontSize: '2rem'
    },
    colorText: {
        position: 'absolute',
        top: '7vh',
        left: '40vh',
        color: '#FFF',
        fontSize: '4.5rem',
        zIndex: 1,
        fontFamily: 'Roboto',
        textShadow: '4px 6px 11px #5f5f5f'
    },
    name: {
        justifyContent: 'left',
        color: '#fed81b',
        fontSize: '5.6rem',
        zIndex: 1,
        margin: '15vh',
    },
    miniText: {
        color: '#fff',
        fontSize: '1.2rem',
        margin: '10px'
    },

    overview: {
        color: "white",
        width: '60vh',
        height: '10vh',
        zIndex: 2,
        position: 'absolute',
        top: '45vh',
        left: '60vh',
        textShadow: '4px 6px 11px #5f5f5f',
        color: '#fff',
        fontSize: '1rem',
        textAlign: 'justify'
    },
    socialContact: {
        zIndex: 1,
        height: '60vh',
        width: '10vw',
        position: 'absolute',
        top: '10vh',
        listStyle: 'none',
        right: '0px'
    }
}))

export default function Profile() {
    const classes = useStyles();

    return (
        <div id='profile' className={classes.root} >
            <div className={classes.wrap}>
                <div className={classes.portrait} />
                <img className={classes.img_portrait}
                    src={process.env.PUBLIC_URL + '/assets/IMG_1707 .jpg'} />

                <h1 className={classes.colorText} >L E X U A N
                    <span className={classes.miniText}>Software Engineer</span> <br />
                    <span className={classes.name}>H A U</span>
                </h1>

                <div className={classes.overview}>
                    <span>" My name is Hau Le Xuan and i am engineer living in Ho Chi Minh City. I love reading and meeting new people and talking the greatest technical wherever i go."</span>
                    <br />
                    <br />
                    <br />
                    <span> Email: <br /> lexuanhau99@gmail.com</span> <br />
                    <div style={{ height: "10px" }} />
                    <span>Phone: <br />(+84) 12345678</span>
                </div>

                <ul className={classes.socialContact}>
                    <li>
                        <div href="#" >
                            <img width="25" height="25" src="https://cdn-icons-png.flaticon.com/512/747/747562.png" alt="Instagram" title="Instagram"/>
                        </div>
                    </li>
                    <br />
                    <li>
                        <div>
                            <img width="25" height="25" src="https://cdn-icons-png.flaticon.com/512/747/747543.png" alt="Instagram" title="Instagram" />
                        </div>
                    </li>
                    <br />
                    <li>
                        <div>
                            <img width="25" height="25" src="https://cdn-icons-png.flaticon.com/512/1384/1384075.png" alt="Instagram" title="Instagram" />
                        </div>
                    </li>
                    <br />
                    <li>
                        <div>
                            <img width="25" height="25" src="https://cdn-icons-png.flaticon.com/128/2111/2111292.png" alt="Instagram" title="Instagram" />
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    );
}

