import React from 'react';
import s from '../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={s.messege}>{props.message}</div>
    )
}

export default Message;