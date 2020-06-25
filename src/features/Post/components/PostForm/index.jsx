import InputField from 'custom-field/InputField';
import UploadFiled from 'custom-field/UploadField';
import PropTypes from 'prop-types';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
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
    caption: Yup.string().required('This field is required.'),
    file: Yup.mixed().required('This field is required.'),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {formik => {
        const { isSubmitting, values } = formik;
        const fileInputKey = values.caption || Math.random();
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
