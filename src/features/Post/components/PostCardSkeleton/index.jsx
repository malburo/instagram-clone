import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './style.module.scss';
PostCard.propTypes = {};
PostCard.defaultProps = {};
function PostCard(props) {
  return (
    <div className={styles['post-card']}>
      <div className={styles['post-card__header']}>
        <Skeleton
          circle={true}
          height={32}
          width={32}
          className={styles['post-card__avatar']}
        />
        <Skeleton width={100} />
      </div>
      <div>
        <Skeleton height={200} duration={0} />
      </div>
      <div className={styles['post-card__footer']}>
        <Skeleton width={300} />
        <Skeleton width={300} />
      </div>
    </div>
  );
}

export default PostCard;
