import React, {useState, useEffect} from "react";
import {useSpring, animated, config } from 'react-spring'
import background from "../../assets/images/tommy-denim__header-men.jpg";
import brazo from "../../assets/images/brazo.png";

import heart from "../../assets/icons/heart.svg";
import heartdark from "../../assets/icons/heart-dark.svg";
import "./showcase.css";
import Trail from "./Trail/Trail";
import Video from "../Video/Video"

function Showcase() {

  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [heartLoaded, setHeartLoaded] = useState(false);
  const [darkHeartLoaded, setDarkHeartLoaded] = useState(false);

  const [finishedTrailAnimation, setFinishedTrailAnimation] = useState(false);
  const [finishedBoxAnimation, setFinishedBoxAnimation] = useState(false);

  let triggersCounter = 0;


  const fadeProps = useSpring({opacity: 1, backgroundImage: `url(${background})`, from: {opacity: 0}, config: config.default})
  const boxProps2 = useSpring({width: 0, from: {width: 1000}, config: config.slow})
  const boxProps = useSpring({
    to: { width: 105 },
    from: { width: 1000 },
    config: config.slow,
    onRest: () => setFinishedBoxAnimation(true)
  })

  const [showDarkHeart, setShowDarkHeart] = useState(false)

  const triggerTrailFinish = () => {
    triggersCounter++
    if(triggersCounter === 6){
      setFinishedTrailAnimation(true);
    }
  }

  useEffect(()=> {
    const image = new Image();
    const heartImage = new Image();
    const darkheartImage = new Image();
    image.onload = () => setBackgroundLoaded(true);
    heartImage.onload = () => setHeartLoaded(true);
    darkheartImage.onload = () => setDarkHeartLoaded(true);
    image.src = background;
    heartImage.src= heart;
    darkheartImage.src= heartdark;


    let timer;
    let timer2;
    let timer3;
    let timer4;
    let timer5;
    let timer6;


    if(finishedTrailAnimation){
    timer = setTimeout(() => {
      setShowDarkHeart(true);
    }, 500);

    timer2 = setTimeout(() => {
      setShowDarkHeart(false);
    }, 580);

    timer3 = setTimeout(() => {
      setShowDarkHeart(true);
    }, 3000);

    timer4 = setTimeout(() => {
      setShowDarkHeart(false);
    }, 3050);

    timer5 = setTimeout(() => {
      setShowDarkHeart(true);
    }, 3070);

    timer6 = setTimeout(() => {
      setShowDarkHeart(false);
    }, 3090);
    }

    return () => {
      image.onload = null;
      heartImage.onload = null;
      darkheartImage.onload = null;
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    }

  },[finishedTrailAnimation])

  if(!backgroundLoaded || !heartLoaded || !darkHeartLoaded){
    return null;
  }


  return (
    <div className="showcase-container">
      <div className="image-container">
        <div className="brazo" style={{backgroundImage: `url(${brazo})`}}> </div>
        <div className="live-text">24/7 LIVE.</div>
        <div className="live-text-box"></div>
        <animated.div style={{backgroundImage: `url(${background})`}} className="image">
            <animated.div style={boxProps} className="white-box">
            </animated.div>
            <animated.div style={boxProps2} className="white-box second-whitebox">
            </animated.div>
        </animated.div>

        <animated.div style={fadeProps} className="red-letters-container">
           {
             finishedBoxAnimation && (

              <div className="top-letters-container">
              <Trail triggerTrailFinish={triggerTrailFinish}>
                <span className="in-first-row">L</span>
                <span className="in-first-row">
                  {
                    finishedTrailAnimation  && showDarkHeart
                    ?
                    <img src={heartdark} alt="O" width="328" height="288" className="darkheart"/>
                    :
                    <img src={heart} alt="O" width="328" height="288" className="heart"/>
                  }
                </span>     
                <span className="in-first-row">V</span>
                <span className="in-first-row">E.</span>
                <span className="in-second-row">L.</span>
                <span className="in-second-row">A.</span>
              </Trail>  
             </div>

             )
           }
          </animated.div>
          <div className="top-letters-container bottom-row">
              <animated.div style={fadeProps} className="text-box">
                  <p className="size-1">
                    spring
                    <br/>
                    <span className="red">2017</span>
                  </p>
                  <p className="size-2">
                    with anwar hadid
                    <br/>
                    & sophia richie
                  </p>
                  <p className="size-3">
                    Engineered for perfect form and<br/>
                    exceptional fit -- whatever you do <br/>
                    in them.
                  </p>
                  <p className="size-4">
                    View all products
                  </p>
              </animated.div>
             </div>
       </div>
       <div className="video-container">
           <Video/>
       </div>
    </div>
  );
}

export default Showcase;
