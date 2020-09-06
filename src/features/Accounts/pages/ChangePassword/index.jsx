import React from 'react';
import PropTypes from 'prop-types';
import EditProfileForm from 'features/Accounts/components/EditProfileForm';
import ChangePasswordForm from 'features/Accounts/components/ChangePasswordForm';

ChangePassword.propTypes = {};

function ChangePassword(props) {
  return (
    <div>
      <ChangePasswordForm />
    </div>
  );
}

export default ChangePassword;
