import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Input } from 'reactstrap';

UploadFiled.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  disabled: PropTypes.bool,
};

UploadFiled.defaultProps = {
  type: 'file',
  label: '',
  disabled: false,
};

function UploadFiled(props) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name } = field;
  const { errors, touched, setFieldValue } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup>
      <Input
        id={name}
        onChange={event => {
          setFieldValue('file', event.currentTarget.files[0]);
        }}
        type={type}
        disabled={disabled}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default UploadFiled;
