import ChangePasswordForm from 'features/Accounts/components/ChangePasswordForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changePassword } from 'app/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';


function ChangePassword(props) {
  const dispatch = useDispatch();
  const handleSubmit = async (values, action) => {
    try {
      const updateResult = await dispatch(changePassword(values));
      unwrapResult(updateResult);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ChangePasswordForm onSubmit={handleSubmit} />
    </div>
  );
}

export default ChangePassword;
