import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Input } from 'reactstrap';

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
  const { errors, setFieldValue } = form;
  const showError = !!errors[name];

  return (
    <FormGroup>
      <Input
        id={name}
        onChange={event => {
          setFieldValue('file', event.currentTarget.files[0]);
        }}
        type={type}
        disabled={disabled}
        invalid={showError}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default UploadField;
