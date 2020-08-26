import android from 'assets/images/android-download.png';
import empty from 'assets/images/empty-post.jpg';
import instagramEmpty from 'assets/images/icons/instagram-empty.svg';
import ios from 'assets/images/ios-download.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'reactstrap';
import styles from './style.module.scss';

EmptyPost.propTypes = {
  isCurrentUser: PropTypes.bool.isRequired,
};
EmptyPost.defaultProps = {
  isCurrentUser: false,
};
function EmptyPost(props) {
  const { isCurrentUser } = props;
  return (
    <>
      {isCurrentUser && (
        <div className={styles.wrapper}>
          <Row className="d-flex flex-column-reverse flex-md-row">
            <Col xs="12" md="6">
              <img
                src={empty}
                alt="empty-post-current"
                className={styles.image}
              />
            </Col>
            <Col md="6">
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
            </Col>
          </Row>
        </div>
      )}
      {isCurrentUser || (
        <Col xs="12">
          <div className={styles.empty}>
            <img src={instagramEmpty} alt="empty" className={styles.image} />
            <p>Chưa có bài viết</p>
          </div>
        </Col>
      )}
    </>
  );
}

export default EmptyPost;
