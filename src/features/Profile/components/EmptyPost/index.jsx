import empty from 'assets/images/empty-post.jpg';
import ios from 'assets/images/ios-download.png';
import android from 'assets/images/android-download.png';
import React from 'react';
import styles from './style.module.scss';
EmptyPost.propTypes = {};

function EmptyPost(props) {
  return (
    <div className={styles.wrapper}>
      <img src={empty} alt="empty-post" />
      <div className={styles.body}>
        <p className={styles.title}>
          Bắt đầu ghi và chia sẻ khoảnh khắc của bạn.
        </p>
        <p className={styles.subtitle}>
          Tải ứng dụng để chia sẻ ảnh hoặc video đầu tiên của bạn.
        </p>
        <div className={styles['icon-download']}>
          <img src={ios} alt="ios-download" />
          <img src={android} alt="android-download" />
        </div>
      </div>
    </div>
  );
}

export default EmptyPost;
