import { logoutSuccess } from 'features/Auth/AuthSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, Modal } from 'reactstrap';
import styles from './style.module.scss';
const SettingModal = props => {
  const { icon } = props;
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const toggle = () => setModal(!modal);
  const handleLogout = () => {
    setModal(!modal);
    dispatch(logoutSuccess());
    history.push('/auth/login');
  };
  return (
    <div>
      <div color="danger" onClick={toggle}>
        {icon}
      </div>
      <Modal isOpen={modal} toggle={toggle} className={styles['dialog-modal']}>
        <div className={styles['body-modal']}>
          <Button
            color="primary"
            onClick={handleLogout}
            className={styles.button}>
            Đăng xuất
          </Button>
          <Button color="primary" onClick={toggle} className={styles.button}>
            Hủy
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default SettingModal;
