import React from 'react';
import styles from './style.module.scss';
import InputField from 'custom-field/InputField';
import PropTypes from 'prop-types';
import { FastField, Formik, Form } from 'formik';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import UploadFiled from 'custom-field/UploadField';

PostForm.propTypes = {};

function PostForm(props) {
  const { onSubmit, postId } = props;
  const initialValues = {
    comment: '',
    file: null,
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('This field is required.'),
  });
  const handleSubmit = postId => {
    if (onSubmit) {
      onSubmit(postId);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => handleSubmit(postId)}
      validationSchema={validationSchema}>
      {({ isSubmitting }) => (
        <Form className={styles['post-form']}>
          <FastField
            name="caption"
            component={InputField}
            placeholder="Bạn đang nghĩ gì vậy ?"
          />
          <FastField type="file" name="file" component={UploadFiled} />
          <FormGroup>
            <Button type="submit" color="primary" className={styles.button}>
              {isSubmitting ? <Spinner size="sm" /> : 'Đăng'}
            </Button>
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
}

export default PostForm;
