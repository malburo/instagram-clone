import InputField from 'custom-field/InputField';
import UploadField from 'custom-field/UploadField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
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
          <div className={styles.wrapper}>
            <p className={styles.header}>Tạo bài viết mới</p>
            <Form className={styles['post-form']}>
              <FastField
                name="caption"
                component={InputField}
                placeholder="Bạn đang nghĩ gì vậy ?"
              />
              <FastField
                type="file"
                name="file"
                component={UploadField}
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
          </div>
        );
      }}
    </Formik>
  );
}

export default PostForm;
