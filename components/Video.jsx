import React, {
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import classNames from "classnames/bind";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

import styles from "@/styles/Video.module.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const cx = classNames.bind(styles);

function Video({ src }) {
  const videoRef = useRef();
  const [play, setPlay] = useState(true);
  const [muted, setMuted] = useState(true);

  function handleScroll(e) {
    if (play) {
      videoRef.current.pause();
    }
  }

  function handleVideoClick() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <>
      <div className={cx("video")} onWheel={() => handleScroll()}>
        {muted ? (
          <button
            className={cx("video__volume")}
            onClick={() => {
              setMuted(!muted);
              setPlay(true);
            }}
          >
            <VolumeOffIcon fontSize="large" />
          </button>
        ) : (
          <button
            className={cx("video__volume")}
            onClick={() => {
              setMuted(!muted);
              setPlay(false);
            }}
          >
            <VolumeUpIcon fontSize="large" />
          </button>
        )}

        <video
          loop
          autoPlay
          muted={muted}
          onClick={handleVideoClick}
          ref={videoRef}
          className={cx("video__player")}
          src={src}
        ></video>
        {/* Video Footer */}
        <VideoFooter />
        {/* Video Sidebar */}
        <VideoSidebar />
      </div>
    </>
  );
}

export default Video;
