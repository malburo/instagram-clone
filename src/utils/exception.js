import { notification } from 'antd';

const exception = {
  SomethingWentWrong: 'Something went wrong',
  NotAuthorizedException: 'Incorrect email or password.',
  UserNotFoundException: 'This email does not exist.',
  UsernameExistsException: 'This email already exists.',
  LimitExceededException: 'Attempt limit exceeded, please try after some time.',
  CodeMismatchException:
    'Invalid verification code provided, please try again.',
};

export const showError = (error) => {
  try {
    const keys = Object.keys(exception);
    const index = keys.findIndex((key) => error.exception === key);
    if (index < 0) {
      notification.error({
        message: error?.message || exception.SomethingWentWrong,
      });
    } else {
      notification.error({
        message: 'Notification',
        description: error?.message || exception[keys[index]],
      });
    }
  } catch {
    //
  }
};