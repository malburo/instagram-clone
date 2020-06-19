import React from 'react';
import styles from './style.module.scss';
import InputField from 'custom-field/InputField';
import PropTypes from 'prop-type';
import { FastField, Formik, Form } from 'formik';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';

CommentForm.propTypes = {
  onSubmit: PropTypes.func,
  postId: PropTypes.string.isRequired,
};

CommentForm.defaultProps = {
  onSubmit: null,
};
function CommentForm(props) {
  const { onSubmit, postId } = props;
  const initialValues = {
    comment: '',
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
        <Form className={styles['comment-form']}>
          <FastField
            name="comment"
            component={InputField}
            placeholder="Thêm bình luận..."
          />
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
export default CommentForm;
