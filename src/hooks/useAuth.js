import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useAuth = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const history = useHistory();
  useEffect(() => {
    if (isAuth) {
      history.replace('/kahoots');
    }
  }, [history, isAuth]);
};

export default useAuth;