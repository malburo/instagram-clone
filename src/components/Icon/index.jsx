import React from 'react';
import styles from './style.module.scss';
import like from 'assets/images/icons/like.svg';
import unlike from 'assets/images/icons/unlike.svg';
import dot from 'assets/images/icons/dot.svg';
import comment from 'assets/images/icons/comment.svg';
import message from 'assets/images/icons/message.png';
import save from 'assets/images/icons/save.png';
import setting from 'assets/images/icons/setting.svg';

export function LikeIcon(props) {
  const { isLiked, handleLike, postId } = props;
  return (
    <img
      src={isLiked ? like : unlike}
      alt="LikeIcon"
      className={styles.icon}
      onClick={() => handleLike(postId)}
    />
  );
}

export function CommentIcon(props) {
  return <img src={comment} alt="CommentIcon" className={styles.icon} />;
}

export function MessageIcon(props) {
  return <img src={message} alt="MessageIcon" className={styles.icon} />;
}

export function SaveIcon(props) {
  return <img src={save} alt="SaveIcon" className={styles.icon} />;
}

export function DotIcon(props) {
  return <img src={dot} alt="SaveIcon" className={styles.icon} />;
}

export function SettingIcon(props) {
  return <img src={setting} alt="SettingIcon" className={styles.icon} />;
}
