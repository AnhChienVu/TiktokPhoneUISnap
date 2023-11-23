import React from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";

import styles from "@/styles/VideoFooter.module.css";
import video_record from "@/images/record_img.jpeg";

const cx = classNames.bind(styles);

function VideoFooter() {
  return (
    <>
      <div className={cx("videoFooter")}>
        <div className={cx("videoFooter__text")}>
          <h3>@chrisvuxx</h3>
          <p>This is a description</p>
          <MusicNoteIcon className={cx("videoFooter__icon")} />

          <div className={cx("videoFooter__ticker")}>
            <Ticker className={cx("ticker")} mode="smooth">
              {({ index }) => (
                <>
                  <h3>Rere</h3>
                </>
              )}
            </Ticker>
          </div>
        </div>
        <div className={cx("wrapper")}>
          <Image
            className={cx("videoFooter__record")}
            src={video_record}
            alt=""
            width={35}
            height={35}
          />
        </div>
      </div>
    </>
  );
}

export default VideoFooter;
