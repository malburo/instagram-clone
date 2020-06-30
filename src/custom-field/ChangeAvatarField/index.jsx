import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Input } from 'reactstrap';
import styles from './style.module.scss';
UploadField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  disabled: PropTypes.bool,
};

UploadField.defaultProps = {
  type: 'file',
  label: '',
  disabled: false,
};

function UploadField(props) {
  const { field, form, type, disabled } = props;
  const { name } = field;
  const { setFieldValue, submitForm } = form;
  return (
    <FormGroup>
      <Input
        id={name}
        onChange={event => {
          setFieldValue('avatar', event.currentTarget.files[0]);
          submitForm();
        }}
        type={type}
        disabled={disabled}
        className={styles.input}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default UploadField;
