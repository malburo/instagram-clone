import React from 'react';
import styles from './style.module.scss';
import PropTypes from 'prop-types';
import { FastField, Formik, Form } from 'formik';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import CommentInputField from 'custom-field/CommentInputField';

CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
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
    comment: Yup.string().required('This field is required.'),
  });
  const handleSubmit = (data, actions) => {
    if (onSubmit) {
      onSubmit(postId, data.comment, actions);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      {formik => {
        const { isSubmitting, errors, values } = formik;
        return (
          <Form className={styles['comment-form']}>
            <div className={styles['comment-form__comment']}>
              <FastField
                name="comment"
                component={CommentInputField}
                placeholder="Thêm bình luận..."
              />
            </div>
            <FormGroup>
              <Button
                type="submit"
                color="secondary"
                disabled={values.comment === '' || errors.comment}>
                {isSubmitting ? <Spinner size="sm" /> : 'Đăng'}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}
export default CommentForm;
