import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core'
import Header from './components/Header';
import TimeLine from './components/TimeLine';
import Profile from './components/Profile';
import Footer from './components/Footter';
import Lottie from 'react-lottie';
import animationData from './loading.json'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    fontFamily: 'Nunito'
  },
}));

export default function App() {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <div>
      {
        loading ?
          <div style={{minHeight: '100vh', position: 'relative', paddingTop:'40vh', background: '#FFF'}}>
            < Lottie options={defaultOptions} height={150} width={300}/>
          </div >
          :
          <div className={classes.root}>
            <CssBaseline />
            <Header />
            <Profile />
            <TimeLine />
            <Footer />
          </div>
      }
    </div>
  );
};