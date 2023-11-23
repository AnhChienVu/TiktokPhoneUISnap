import { useState, useEffect } from "react";

import classNames from "classnames/bind";
import styles from "@/styles/Home.module.css";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

import Video from "@/components/Video";
import video from "@/videos/download.mp4";
import video2 from "@/videos/2.mp4";
import db from "@/firebase";

const cx = classNames.bind(styles);

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos((prev) => [...prev, getVideos(db)]);
  }, []);

  async function getVideos(db) {
    const videosCol = collection(db, "videos");
    const videoSnapshot = await getDocs(videosCol);
    const videoList = videoSnapshot.docs.map((doc) => doc.data());
    return videoList;
  }

  return (
    <>
      <div className={cx("app")}>
        <div className={cx("app__videos")}>
          {/* {videos.map(
            ({ url, channel, description, song, likes, messages }) => (
              <Video
                url={url}
                channel={channel}
                song={song}
                description={description}
                likes={likes}
                messages={messages}
              />
            )
          )} */}
          <Video src={video} />
          <Video src={video2} />
        </div>
      </div>
    </>
  );
}
