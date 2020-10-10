import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

CommentInputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

CommentInputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
};

function CommentInputField(props) {
  const { field, type, label, placeholder, disabled } = props;
  const { name } = field;

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}

export default CommentInputField;
