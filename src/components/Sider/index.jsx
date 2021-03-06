import Avatar from 'components/Avatar';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './style.module.scss';
Sider.propTypes = {};

function Sider(props) {
  const currentUser = useSelector(state => state.user.current);
  const { profilePictureUrl, username } = currentUser;
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <Link to={username}>
          {profilePictureUrl ? (
            <Avatar img={profilePictureUrl} size="medium" />
          ) : (
            <div className={styles.isFetching}>
              <Skeleton
                circle={true}
                height={50}
                width={50}
                className={styles.avatar}
              />
              <Skeleton width={100} />
            </div>
          )}
        </Link>
        <Link to={username}>{username}</Link>
      </div>
      <div className={styles.list}>
        <ul>
          <li>
            <Link>Giới thiệu</Link>
          </li>
          <li>
            <Link>Trợ giúp</Link>
          </li>
          <li>
            <Link>Báo chí</Link>
          </li>
          <li>
            <Link>API</Link>
          </li>
          <li>
            <Link>Việc làm</Link>
          </li>
          <li>
            <Link>Quyền riêng tư</Link>
          </li>
          <li>
            <Link>Điều khoản</Link>
          </li>
          <li>
            <Link>Vị trí</Link>
          </li>
          <li>
            <Link>Tài khoản liên quan nhất</Link>
          </li>
          <li>
            <Link>Hashtag</Link>
          </li>
          <li>
            <Link>Ngôn ngữ</Link>
          </li>
        </ul>
        <p className={styles.malburo}>© 2020 INSTAGRAM CLONE FROM MALBURO</p>
      </div>
    </div>
  );
}

export default Sider;
