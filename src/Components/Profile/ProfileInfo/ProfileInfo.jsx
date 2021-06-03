import React from "react"
import s from "./ProfileInfo.module.css"
import MyPosts from "../MyPosts/MyPosts";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='http://wallpapers-image.ru/1920x1080/mountains/wallpapers/mountains-wallpapers-1920x1080-0007.jpg '
                    width='50%'/>
            </div>
            <div className={s.desc}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;