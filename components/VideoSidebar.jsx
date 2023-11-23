import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "@/styles/VideoSidebar.module.css";
import CommentIcon from "@mui/icons-material/Comment";
import ReplyIcon from "@mui/icons-material/Reply";
const cx = classNames.bind(styles);

function VideoSidebar() {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <div className={cx("videoSidebar")}>
        <div className={cx("videoSidebar__button")}>
          {liked ? (
            <FavoriteIcon fontSize="large" onClick={() => setLiked(false)} />
          ) : (
            <FavoriteBorderIcon
              fontSize="large"
              onClick={() => setLiked(true)}
            />
          )}

          <p>{liked ? 300 + 1 : 300}</p>
        </div>
        <div className={cx("videoSidebar__button")}>
          <CommentIcon fontSize="large" />
          <p>300</p>
        </div>
        <div className={cx("videoSidebar__button")}>
          <ReplyIcon fontSize="large" />
          <p>300</p>
        </div>
      </div>
    </>
  );
}

export default VideoSidebar;
