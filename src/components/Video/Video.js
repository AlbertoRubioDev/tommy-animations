import React, {useState} from "react";
import video from "../../assets/images/test-video.mp4";
import ReactPlayer from 'react-player/lazy';
import playicon from "../../assets/icons/play-button-icon.svg";
import pauseicon from "../../assets/icons/pause-button-icon.svg";
import "./video.css";


const Video = () => {

   const [playing, setPlaying] = useState(false)
   const [firstRun, setFirstRun] = useState(true)


   const clickControls = () =>{
       setPlaying(!playing);
       if(firstRun){
           setFirstRun(false);
       }
   }


  return (
    <div className="video-player-container">
    <button className={`video-control ${firstRun ? 'first-run' : 'not-first-run'}  ${playing ? 'playing' : 'pause'}`} onClick={clickControls}>
        <div className="button-container">
            <div className={`img-border`}>
                <div className="img-background">
                    {playing ?
                    <img src={pauseicon} alt="pause"/>
                    :
                    <img src={playicon} alt="play"/>
                    }
                </div>
            </div>
        </div>
    </button>
    <ReactPlayer
        width={"100%"}
        height={"100%"}
        url={video}
        muted={true}
        playing={playing}
    />
 </div>
  );
}

export default Video;
