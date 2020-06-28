import InputField from 'custom-field/InputField';
import UploadFiled from 'custom-field/UploadField';
import PropTypes from 'prop-types';
import { FastField, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import styles from './style.module.scss';

PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function PostForm(props) {
  const { onSubmit } = props;
  const initialValues = {
    caption: '',
    file: null,
  };
  const validationSchema = Yup.object().shape({
    caption: Yup.string(),
    file: Yup.mixed().required('This field is required.'),
  });
  const [fileInputKey, setFileInputKey] = useState('');
  const handleSubmit = (newPost, actions) => {
    if (onSubmit) {
      setFileInputKey(Date.now());
      onSubmit(newPost, actions);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      {formik => {
        const { isSubmitting, values, errors } = formik;
        return (
          <Form className={styles['post-form']}>
            <FastField
              name="caption"
              component={InputField}
              placeholder="Bạn đang nghĩ gì vậy ?"
            />
            <FastField
              type="file"
              name="file"
              component={UploadFiled}
              key={fileInputKey}
            />
            <FormGroup>
              <Button
                type="submit"
                color="primary"
                className={styles.button}
                disabled={values.file === null || errors.file}
                block>
                {isSubmitting ? <Spinner size="sm" /> : 'Đăng'}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PostForm;
