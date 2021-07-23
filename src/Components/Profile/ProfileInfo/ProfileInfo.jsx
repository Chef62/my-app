import React from "react";
import s from "./ProfileInfo.module.css";
import MyPosts from "../MyPosts/MyPosts";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          src="http://wallpapers-image.ru/1920x1080/mountains/wallpapers/mountains-wallpapers-1920x1080-0007.jpg "
          width="50%"
        />
      </div>
      <div className={s.desc}>
        <img src={props.profile.photos.large} />
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
